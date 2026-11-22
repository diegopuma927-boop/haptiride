(function () {
  'use strict';
  const toast = document.getElementById('toast');
  if (!toast) return;

  let timer = null;
  window.mostrarToast = function (mensaje) {
    toast.textContent = mensaje;
    toast.classList.add('visible');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('visible'), 3200);
  };
})();
