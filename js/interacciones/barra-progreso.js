(function () {
  'use strict';
  // HU: Como visitante, quiero ver mi progreso de lectura para saber cuánto falta del sitio.
  const barra = document.getElementById('barra-progreso');
  if (!barra) return;
  function actualizar() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const altura = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const pct = altura > 0 ? (scrollTop / altura) * 100 : 0;
    barra.style.width = pct + '%';
  }
  window.addEventListener('scroll', actualizar, { passive: true });
  actualizar();
})();
