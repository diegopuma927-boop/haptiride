// Orquestador: las interacciones se cargan desde js/*.js
// (demo de señales, validación de formulario, menú, tema, etc.)


// Selector de modos de ruta (HU-03, incorporado desde Semana 11)
(() => {
  const informacionRutas = {
    segura: {
      estado: '↱ Próximo giro a la derecha · Tráfico Bajo (15 min)',
      detalle: 'Modo Segura: Prioriza ciclovías segregadas y calles de bajo flujo vehicular.'
    },
    rapida: {
      estado: '↑ Continuar recto · Tráfico Moderado (10 min)',
      detalle: 'Modo Rápida: Utiliza avenidas principales con carril compartido para menor tiempo.'
    },
    confort: {
      estado: '↰ Giro suave a la izquierda · Sin pendientes (18 min)',
      detalle: 'Modo Confort: Recorrido plano con áreas arboladas y menor exposición al ruido.'
    }
  };
  const botones = document.querySelectorAll('.btn-ruta');
  const estado = document.querySelector('#estado-ruta');
  const detalle = document.querySelector('#detalle-ruta');
  if (!botones.length || !estado || !detalle) return;
  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const modo = informacionRutas[boton.dataset.modo];
      if (!modo) return;
      botones.forEach(item => {
        const activo = item === boton;
        item.classList.toggle('activo', activo);
        item.setAttribute('aria-pressed', String(activo));
      });
      estado.textContent = modo.estado;
      detalle.textContent = modo.detalle;
    });
  });
})();
