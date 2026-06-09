// ─── INTERACTIVE 360° CAR VIEWER (HD img + drag) ─────────────────────────────

class Car360Viewer {
  constructor(container, imageUrl, options = {}) {
    this.container = container;
    this.imageUrl = imageUrl;
    this.frameCount = options.frames || 48;
    this.frameIndex = 0;
    this.dragging = false;
    this.lastX = 0;
    this.sensitivity = options.sensitivity || 3.2;
    this.panoramic = true;
    this.arc = Math.PI * 0.68;
    this.probe = null;
    this.dragRoot = null;
    this.init();
  }

  async init() {
    this.container.innerHTML = `
      <div class="car360-loading">Cargando…</div>
      <div class="car360-stage">
        <img class="car360-img" alt="Monoplaza" draggable="false" referrerpolicy="no-referrer" style="display:none" />
      </div>`;
    this.stageEl = this.container.querySelector('.car360-stage');
    this.imgEl = this.container.querySelector('.car360-img');
    this.dragRoot = this.container.closest('.team-hero-car');
    try {
      this.probe = await this.loadImage(this.imageUrl);
      this.panoramic = this.probe.width / this.probe.height > 3;
      this.arc = this.panoramic ? Math.PI * 0.72 : Math.PI * 0.62;
      this.imgEl.classList.add('is-panoramic');
      this.dragRoot?.classList.add('is-panoramic');
      this.sizeToFit();
      this.imgEl.src = this.imageUrl;
      this.imgEl.style.display = 'block';
      this.container.querySelector('.car360-loading')?.remove();
      this.startFrame = Math.floor(this.frameCount / 2);
      this.renderFrame(this.startFrame);
      this.bindEvents();
      this.resizeObs = new ResizeObserver(() => this.sizeToFit());
      this.resizeObs.observe(this.dragRoot || this.container);
    } catch (_) {
      this.container.innerHTML = '<div class="car360-error">Monoplaza no disponible</div>';
    }
  }

  sizeToFit() {
    if (!this.probe || !this.imgEl) return;
    const padX = 12;
    const padY = 10;
    const containerW = this.dragRoot?.clientWidth || this.container.clientWidth || 900;
    const containerH = this.container.clientHeight || 360;
    const availW = Math.max(300, containerW - padX * 2);
    const availH = Math.max(220, containerH - padY * 2);
    const ratio = this.probe.width / this.probe.height;

    let h;
    if (this.panoramic) {
      const targetW = availW * 0.9;
      h = Math.round(targetW / ratio);
      h = Math.min(h, Math.round(availH * 0.98));
      h = Math.max(h, Math.round(availH * 0.72));
    } else {
      h = Math.round(Math.min(availH, availW / ratio) * 0.96);
    }

    this.baseHeight = h;
    this.imgEl.style.height = `${h}px`;
    this.imgEl.style.width = 'auto';
    this.imgEl.style.maxWidth = 'none';
    this.imgEl.style.maxHeight = `${availH}px`;
  }

  loadImage(url) {
    return new Promise((resolve, reject) => {
      const probe = new Image();
      probe.referrerPolicy = 'no-referrer';
      probe.onload = () => resolve(probe);
      probe.onerror = reject;
      probe.src = url;
    });
  }

  frameAngle(index) {
    const t = ((index % this.frameCount) + this.frameCount) % this.frameCount / (this.frameCount - 1);
    return -this.arc / 2 + t * this.arc;
  }

  renderFrame(index) {
    const angle = this.frameAngle(index);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const scaleX = Math.max(0.3, Math.abs(cos));
    const mirror = cos < 0 ? -1 : 1;
    const lift = sin * 2;
    this.imgEl.style.transform = `translateY(${lift}px) scaleX(${scaleX * mirror})`;
    this.frameIndex = index;
  }

  bindEvents() {
    const onMove = clientX => {
      if (!this.dragging) return;
      const delta = clientX - this.lastX;
      this.lastX = clientX;
      if (Math.abs(delta) < 0.3) return;
      this.renderFrame(this.frameIndex + delta / this.sensitivity);
    };

    const dragRoot = this.dragRoot || this.container;
    const setDragging = on => dragRoot.classList.toggle('is-dragging', on);

    dragRoot.addEventListener('mousedown', e => {
      this.dragging = true;
      this.lastX = e.clientX;
      setDragging(true);
      e.preventDefault();
    });
    window.addEventListener('mousemove', e => onMove(e.clientX));
    window.addEventListener('mouseup', () => {
      if (!this.dragging) return;
      this.dragging = false;
      setDragging(false);
    });

    dragRoot.addEventListener('touchstart', e => {
      this.dragging = true;
      this.lastX = e.touches[0].clientX;
      setDragging(true);
    }, { passive: true });
    dragRoot.addEventListener('touchmove', e => onMove(e.touches[0].clientX), { passive: true });
    dragRoot.addEventListener('touchend', () => {
      this.dragging = false;
      setDragging(false);
    });
  }
}

function initCar360Viewers() {
  document.querySelectorAll('[data-car360]').forEach(el => {
    if (el.dataset.car360Init) return;
    el.dataset.car360Init = '1';
    const url = el.dataset.car360;
    if (url) new Car360Viewer(el, url);
  });
}
