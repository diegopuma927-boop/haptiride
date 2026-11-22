(function () {
  'use strict';
  // HU: Como visitante, quiero filtrar testimonios por perfil para encontrar experiencias relevantes.
  const botones = document.querySelectorAll('.filtro-btn');
  const tarjetas = document.querySelectorAll('#testimonios blockquote');
  if (!botones.length) return;
  botones.forEach((btn) => {
    btn.addEventListener('click', () => {
      botones.forEach((b) => b.classList.remove('activo'));
      btn.classList.add('activo');
      const filtro = btn.dataset.filtro;
      tarjetas.forEach((t) => {
        const perfil = t.dataset.perfil;
        const mostrar = filtro === 'todos' || perfil === filtro;
        t.style.display = mostrar ? '' : 'none';
      });
    });
  });
})();
