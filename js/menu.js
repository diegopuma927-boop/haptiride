(function () {
  'use strict';
  const barra = document.querySelector('.barra');
  const nav = document.querySelector('.barra nav');
  if (!barra || !nav) return;

  // Botón hamburguesa (móvil)
  const btn = document.createElement('button');
  btn.className = 'hamburguesa';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Abrir menú de navegación');
  btn.setAttribute('aria-expanded', 'false');
  nav.id = nav.id || 'nav-principal';
  btn.setAttribute('aria-controls', nav.id);
  btn.innerHTML = '<span></span><span></span><span></span>';
  barra.insertBefore(btn, nav);

  const cerrarMenu = () => {
    nav.classList.remove('abierto');
    btn.classList.remove('abierto');
    btn.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.submenu.abierto').forEach((s) => s.classList.remove('abierto'));
    document.querySelectorAll('.submenu-trigger').forEach((t) => t.setAttribute('aria-expanded', 'false'));
  };

  btn.addEventListener('click', () => {
    const abierto = nav.classList.toggle('abierto');
    btn.classList.toggle('abierto', abierto);
    btn.setAttribute('aria-expanded', String(abierto));
  });
  nav.querySelectorAll(':scope > a, :scope > .menu-item > a:not(.submenu-trigger)').forEach((a) =>
    a.addEventListener('click', cerrarMenu)
  );

  // Submenú vertical (ACME)
  document.querySelectorAll('.has-submenu').forEach((item) => {
    const trigger = item.querySelector('.submenu-trigger');
    const submenu = item.querySelector('.submenu');
    if (!trigger || !submenu) return;
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const abierto = submenu.classList.toggle('abierto');
      submenu.hidden = !abierto;
      trigger.setAttribute('aria-expanded', String(abierto));
    });
    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!item.contains(e.target)) {
        submenu.classList.remove('abierto');
        submenu.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
