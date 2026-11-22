(function () {
  'use strict';
  // HU: Como visitante, quiero ampliar las imágenes de la galería para ver detalles del concepto.
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const cerrarBtn = lightbox ? lightbox.querySelector('.lightbox-cerrar') : null;
  if (!lightbox || !img) return;
  document.querySelectorAll('.galeria img').forEach((imagen) => {
    imagen.style.cursor = 'zoom-in';
    imagen.addEventListener('click', () => {
      img.src = imagen.src;
      img.alt = imagen.alt;
      if (caption) caption.textContent = imagen.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
    });
  });
  function cerrar() {
    lightbox.hidden = true;
    document.body.style.overflow = '';
  }
  if (cerrarBtn) cerrarBtn.addEventListener('click', cerrar);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) cerrar(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !lightbox.hidden) cerrar(); });
})();
