(function () {
  'use strict';
  // HU: Como ciclista, quiero ver cuántas señales probé en la demo para llevar un registro de mi aprendizaje.
  const salida = document.querySelector('#respuesta-patron');
  const pulsos = document.querySelector('.pulsos');
  const contador = document.querySelector('#contador-patrones strong');
  if (!salida || !contador) return;
  let n = 0;
  document.querySelectorAll('[data-patron]').forEach((boton) => {
    boton.addEventListener('click', () => {
      document.querySelectorAll('[data-patron]').forEach((b) => b.classList.remove('activo'));
      boton.classList.add('activo');
      salida.textContent = {
        izquierda: 'Tres pulsos de derecha a izquierda: giro a la izquierda.',
        derecha: 'Tres pulsos de izquierda a derecha: giro a la derecha.',
        recto: 'Pulso continuo: continúa recto.',
        alerta: 'Pulsos rápidos: revisa tu entorno.',
        llegada: 'Secuencia final: llegaste a tu destino.'
      }[boton.dataset.patron];
      pulsos.classList.remove('animando');
      void pulsos.offsetWidth;
      pulsos.classList.add('animando');
      n += 1;
      contador.textContent = n;
    });
  });
})();
