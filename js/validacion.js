(function () {
  'use strict';
  const form = document.getElementById('form-contacto');
  if (!form) return;

  const estado = document.getElementById('estado-formulario');
  const campos = Array.from(form.querySelectorAll('input, textarea'));

  function validar(campo) {
    let mensaje = '';
    if (campo.required && !campo.value.trim()) {
      mensaje = 'Este campo es obligatorio.';
    } else if (campo.type === 'email' && campo.value.trim() &&
               !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim())) {
      mensaje = 'Ingresá un correo electrónico válido.';
    } else if (campo.id === 'mensaje' && campo.value.trim().length > 0 &&
               campo.value.trim().length < 10) {
      mensaje = 'El mensaje debe tener al menos 10 caracteres.';
    }

    campo.classList.toggle('invalido', Boolean(mensaje));
    const ayuda = form.querySelector('[data-error-for="' + campo.id + '"]');
    if (ayuda) ayuda.textContent = mensaje;
    return !mensaje;
  }

  campos.forEach((campo) => {
    campo.addEventListener('blur', () => validar(campo));
    campo.addEventListener('input', () => {
      if (campo.classList.contains('invalido')) validar(campo);
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const ok = campos.every(validar);
    if (ok) {
      if (estado) estado.textContent = '';
      if (typeof window.mostrarToast === 'function') {
        window.mostrarToast('Formulario validado. Para recibir mensajes reales, conectá un servidor o servicio de formularios.');
      }
    } else if (estado) {
      estado.textContent = 'Revisá los campos marcados en rojo.';
    }
  });
})();
