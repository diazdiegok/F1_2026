"""Procesa retratos y autos: quita fondo y guarda PNG transparente."""
from pathlib import Path
from rembg import remove, new_session
from PIL import Image, ImageChops
import io

# Modelo mas preciso para recortes limpios (cae a u2net si no esta disponible).
try:
    CAR_SESSION = new_session("isnet-general-use")
except Exception:
    CAR_SESSION = None

ROOT = Path(__file__).resolve().parent.parent
SRC = Path(r"C:\Users\diego\.cursor\projects\c-Users-diego-Desktop-F1-2026\assets")
DRIVERS_OUT = ROOT / "assets" / "drivers"
CARS_OUT = ROOT / "assets" / "cars"

DRIVERS = {
    "antonelli": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-eddf6203-d385-4e87-85cf-e2e0916f684a.png",
    "arvid_lindblad": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-c54ed05d-76c9-4a63-971a-af479fd3f269.png",
    "hulkenberg": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-b757aa0a-8d06-4430-a998-d2a65f4fcc9e.png",
    "bortoleto": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-3c872d78-a63f-48fd-a2dc-e819e8045a94.png",
    "perez": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-fe344ae5-3309-45e4-8d4f-1b5e7dd012b7.png",
    "bottas": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-0ad17137-2094-4b02-8e63-ec4d3bad95c0.png",
    "bearman": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-cd615618-010d-4184-a5e3-a0db90333ba0.png",
    "hadjar": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-4e1fcb72-bf2c-49c2-8ab6-9b18df169874.png",
}

CARS = {
    "audi-2026": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-eda47674-ab37-4013-8521-36cca14b9fc3.png",
    "cadillac-2026": "c__Users_diego_AppData_Roaming_Cursor_User_workspaceStorage_5c931e5be3af856624cfb770a27aa649_images_image-91f06713-4655-4ddc-89f6-a5b12653ecba.png",
}

CROP_CARS = {
    "audi-2026": (0.0, 0.0, 1.0, 1.0),
    "cadillac-2026": (0.0, 0.0, 1.0, 1.0),
}

CROP_DRIVERS = {
    "antonelli": (0.05, 0.02, 0.95, 0.98),
    "arvid_lindblad": (0.08, 0.02, 0.92, 0.98),
    "hulkenberg": (0.1, 0.05, 0.9, 0.98),
    "bortoleto": (0.1, 0.05, 0.9, 0.98),
    "perez": (0.08, 0.05, 0.92, 0.98),
    "bottas": (0.08, 0.05, 0.92, 0.98),
    "bearman": (0.1, 0.05, 0.85, 0.95),
    "hadjar": (0.18, 0.02, 0.98, 0.98),
}


def crop_rel(img: Image.Image, box):
    w, h = img.size
    l, t, r, b = box
    return img.crop((int(l * w), int(t * h), int(r * w), int(b * h)))


def pad_transparent(img: Image.Image, top=0.12, bottom=0.12, sides=0.04):
    w, h = img.size
    pad_t, pad_b = int(h * top), int(h * bottom)
    pad_l, pad_r = int(w * sides), int(w * sides)
    canvas = Image.new("RGBA", (w + pad_l + pad_r, h + pad_t + pad_b), (0, 0, 0, 0))
    canvas.paste(img, (pad_l, pad_t), img)
    return canvas


def normalize_driver_height(img: Image.Image, target_h=520):
    if img.height >= target_h:
        return img
    ratio = target_h / img.height
    return img.resize((int(img.width * ratio), target_h), Image.Resampling.LANCZOS)


def normalize_car_height(img: Image.Image, target_h=420):
    if img.height == target_h:
        return img
    ratio = target_h / img.height
    return img.resize((max(int(img.width * ratio), 1), target_h), Image.Resampling.LANCZOS)


def clean_alpha(img: Image.Image, threshold=40):
    """Elimina pixeles semitransparentes (manchones/halos del recorte)."""
    r, g, b, a = img.split()
    a = a.point(lambda v: 0 if v < threshold else v)
    return Image.merge("RGBA", (r, g, b, a))


def keep_largest_blob(img: Image.Image, min_ratio=0.02):
    """Conserva solo la region opaca mas grande (descarta smears sueltos)."""
    alpha = img.split()[3]
    mask = alpha.point(lambda v: 255 if v > 0 else 0).convert("L")
    bbox = mask.getbbox()
    if not bbox:
        return img
    # Recorte por columnas: descarta franjas verticales casi vacias en los bordes.
    w, h = img.size
    col_counts = []
    px = mask.load()
    for x in range(w):
        c = 0
        for y in range(0, h, 3):
            if px[x, y] > 0:
                c += 1
        col_counts.append(c)
    peak = max(col_counts) if col_counts else 0
    if peak <= 0:
        return img
    limit = peak * 0.06
    left = 0
    while left < w and col_counts[left] < limit:
        left += 1
    right = w - 1
    while right > left and col_counts[right] < limit:
        right -= 1
    if right - left < w * 0.2:
        return img
    return img.crop((left, 0, right + 1, h))


def process(src_path: Path, dest_path: Path, crop=None, max_h=900, pad_car=False, normalize_h=None):
    img = Image.open(src_path).convert("RGBA")
    if crop and crop != (0.0, 0.0, 1.0, 1.0):
        img = crop_rel(img, crop)
    if img.height > max_h:
        ratio = max_h / img.height
        img = img.resize((int(img.width * ratio), max_h), Image.Resampling.LANCZOS)
    buf = io.BytesIO()
    img.save(buf, format="PNG")

    kwargs = dict(
        alpha_matting=True,
        alpha_matting_foreground_threshold=240,
        alpha_matting_background_threshold=15,
        alpha_matting_erode_size=10,
    )
    if pad_car and CAR_SESSION is not None:
        kwargs["session"] = CAR_SESSION
    out = remove(buf.getvalue(), **kwargs)
    result = Image.open(io.BytesIO(out)).convert("RGBA")

    if pad_car:
        result = clean_alpha(result, threshold=45)
        bbox = result.getbbox()
        if bbox:
            result = result.crop(bbox)
        result = keep_largest_blob(result)
        bbox = result.getbbox()
        if bbox:
            result = result.crop(bbox)
        result = normalize_car_height(result, 420)
        result = pad_transparent(result, top=0.12, bottom=0.12, sides=0.04)
    else:
        bbox = result.getbbox()
        if bbox:
            result = result.crop(bbox)

    if normalize_h:
        result = normalize_driver_height(result, normalize_h)

    dest_path.parent.mkdir(parents=True, exist_ok=True)
    result.save(dest_path, "PNG", optimize=True)
    print(f"OK {dest_path.name} ({result.size[0]}x{result.size[1]})")


def main():
    for driver_id, fname in DRIVERS.items():
        src = SRC / fname
        if not src.exists():
            print(f"MISSING {src}")
            continue
        process(src, DRIVERS_OUT / f"{driver_id}.png", crop=CROP_DRIVERS.get(driver_id), normalize_h=520)

    for car_id, fname in CARS.items():
        src = SRC / fname
        if not src.exists():
            print(f"MISSING {src}")
            continue
        process(src, CARS_OUT / f"{car_id}.png", crop=CROP_CARS.get(car_id), max_h=800, pad_car=True)


if __name__ == "__main__":
    main()
