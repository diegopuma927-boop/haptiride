(function () {
  'use strict';
  const btn = document.getElementById('btn-tema');
  const body = document.body;

  function aplicar(tema) {
    const claro = tema === 'claro';
    body.classList.toggle('tema-claro', claro);
    if (btn) {
      btn.textContent = claro ? '🌙' : '☀️';
      btn.setAttribute('aria-label', claro ? 'Activar tema oscuro' : 'Activar tema claro');
    }
  }

  let guardado = 'oscuro';
  try { guardado = localStorage.getItem('tema') || 'oscuro'; } catch (e) { guardado = 'oscuro'; }
  aplicar(guardado);

  if (btn) {
    btn.addEventListener('click', () => {
      const nuevo = body.classList.contains('tema-claro') ? 'oscuro' : 'claro';
      try { localStorage.setItem('tema', nuevo); } catch (e) { /* sin persistencia */ }
      aplicar(nuevo);
    });
  }
})();
