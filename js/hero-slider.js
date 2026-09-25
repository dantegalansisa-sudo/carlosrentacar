/* ═══════════════════════════════════════════
   ORTEGA RENT CAR · HERO SLIDER
   Autoplay 5s (pausa en hover) · flechas · dots · swipe
   Sincroniza el select del booking bar con el slide activo.
═══════════════════════════════════════════ */

(() => {
  const wrap = document.querySelector('.hero__slider-wrap');
  if (!wrap) return;

  const cars = Array.from(wrap.querySelectorAll('.hero__car'));
  const dots = Array.from(wrap.querySelectorAll('.hero__dot'));
  const prevBtn = wrap.querySelector('.hero__arrow--prev');
  const nextBtn = wrap.querySelector('.hero__arrow--next');
  const select = document.getElementById('heroVehicle');
  if (cars.length < 2) return;

  const INTERVAL = 5000;
  const ANIM_MS = 700;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current = Math.max(0, cars.findIndex(c => c.classList.contains('hero__car--active')));
  let busy = false;
  let timer = null;
  let hovering = false;
  let userPicked = false; // el usuario eligió en el select → no pisar su elección

  const ANIM_CLASSES = ['hero__car--enter', 'hero__car--exit', 'hero__car--enter-rev', 'hero__car--exit-rev'];

  function syncUI(idx) {
    dots.forEach((d, i) => {
      d.classList.toggle('hero__dot--active', i === idx);
      d.setAttribute('aria-current', i === idx ? 'true' : 'false');
    });
    const vid = cars[idx].dataset.vehicle;
    if (select && vid && select.value !== vid) select.value = vid;
  }

  function goTo(idx, dir) {
    idx = (idx + cars.length) % cars.length;
    if (idx === current || busy) return;
    if (dir === undefined) dir = idx > current ? 1 : -1;

    const out = cars[current];
    const inc = cars[idx];
    current = idx;
    syncUI(idx);

    if (reduceMotion) {
      out.classList.remove('hero__car--active');
      inc.classList.add('hero__car--active');
      return;
    }

    busy = true;
    [out, inc].forEach(c => c.classList.remove(...ANIM_CLASSES));
    // Forzar reflow para reiniciar la animación
    void inc.offsetWidth;
    out.classList.add(dir > 0 ? 'hero__car--exit' : 'hero__car--exit-rev');
    inc.classList.add('hero__car--active', dir > 0 ? 'hero__car--enter' : 'hero__car--enter-rev');

    setTimeout(() => {
      out.classList.remove('hero__car--active', ...ANIM_CLASSES);
      inc.classList.remove(...ANIM_CLASSES);
      busy = false;
    }, ANIM_MS);
  }

  const next = () => goTo(current + 1, 1);
  const prev = () => goTo(current - 1, -1);

  function start() {
    stop();
    if (!hovering && !userPicked && !document.hidden) timer = setInterval(next, INTERVAL);
  }
  function stop() {
    if (timer) clearInterval(timer);
    timer = null;
  }
  // Reinicia el conteo tras una interacción manual
  function manual(fn) {
    return (...args) => { userPicked = false; fn(...args); start(); };
  }

  if (nextBtn) nextBtn.addEventListener('click', manual(next));
  if (prevBtn) prevBtn.addEventListener('click', manual(prev));
  dots.forEach((d, i) => d.addEventListener('click', manual(() => goTo(i))));

  // Pausa en hover (solo dispositivos con puntero real)
  wrap.addEventListener('pointerenter', (e) => {
    if (e.pointerType !== 'mouse') return;
    hovering = true; stop();
  });
  wrap.addEventListener('pointerleave', (e) => {
    if (e.pointerType !== 'mouse') return;
    hovering = false; start();
  });

  // Swipe (touch) — listeners pasivos, no bloquean el scroll vertical
  let x0 = null, y0 = null;
  wrap.addEventListener('touchstart', (e) => {
    x0 = e.touches[0].clientX;
    y0 = e.touches[0].clientY;
  }, { passive: true });
  wrap.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    x0 = y0 = null;
    if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
      manual(dx < 0 ? next : prev)();
    }
  }, { passive: true });

  // Select del booking bar → mueve el slider si ese vehículo está en el hero
  if (select) {
    select.addEventListener('change', () => {
      const idx = cars.findIndex(c => c.dataset.vehicle === select.value);
      if (idx >= 0) goTo(idx);
      // Pausa el autoplay para no cambiar el vehículo elegido; flechas/dots lo reanudan
      userPicked = true;
      stop();
    });
  }

  // No avanzar con la pestaña oculta
  document.addEventListener('visibilitychange', () => (document.hidden ? stop() : start()));

  syncUI(current);
  start();
})();
