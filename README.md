# F1 2026 — Tablero de Temporada

Tablero interactivo de la temporada Fórmula 1 2026. Campeonato de pilotos y constructores, resultados por carrera, comparativas de equipo y datos en vivo desde la API Jolpica/Ergast.

## Uso local

Abrir `index.html` en el navegador o servir la carpeta con un servidor estático:

```bash
python -m http.server 8080
```

## GitHub Pages

El sitio es 100 % estático (HTML, CSS, JS). Funciona en GitHub Pages sin build.

1. Sube este repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**.
4. Branch: `main`, carpeta: `/ (root)`.
5. Guarda. En 1–2 minutos estará en `https://TU_USUARIO.github.io/NOMBRE_REPO/`.

## Estructura

```
index.html    # Entrada
style.css     # Estilos
data.js       # Equipos, pilotos, circuitos, logos
app.js        # Lógica y vistas
logos/        # Logo F1 y escuderías
```
