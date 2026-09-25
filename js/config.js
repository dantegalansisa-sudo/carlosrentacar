/* ═══════════════════════════════════════════
   ORTEGA RENT CAR · CONFIGURACIÓN DEL NEGOCIO
   Edita aquí los datos de contacto y redes.
═══════════════════════════════════════════ */

window.ORTEGA = {
  NOMBRE: 'Ortega Rent Car',

  // WhatsApp / teléfono (solo dígitos, con código de país)
  WHATSAPP: '18295234738',
  TELEFONO_VISIBLE: '+1 (829) 523-4738',

  // Redes sociales — deja "" para ocultar el ícono en todo el sitio.
  // Para activar Instagram, pega la URL, ej: 'https://www.instagram.com/usuario'
  INSTAGRAM_URL: '',
  FACEBOOK_URL: '',

  DIRECCION: 'Av. Winston Churchill, Piantini, Santo Domingo, Distrito Nacional, República Dominicana',
  MAPS_URL: 'https://www.google.com/maps/search/?api=1&query=Av.+Winston+Churchill,+Piantini,+Santo+Domingo,+Rep%C3%BAblica+Dominicana',
};

/* Link de WhatsApp con mensaje pre-llenado */
window.waLink = function (msg) {
  return 'https://wa.me/' + ORTEGA.WHATSAPP + (msg ? '?text=' + encodeURIComponent(msg) : '');
};

/* Redes: asigna la URL o elimina el elemento si está vacía (sin links muertos).
   Uso en HTML: <a data-social="instagram">…</a>  ·  <div data-social-group>…</div> */
(function () {
  function applySocials() {
    var urls = { instagram: ORTEGA.INSTAGRAM_URL, facebook: ORTEGA.FACEBOOK_URL };
    document.querySelectorAll('[data-social]').forEach(function (el) {
      var url = urls[el.dataset.social];
      if (url) {
        el.href = url;
      } else {
        (el.closest('[data-social-item]') || el).remove();
      }
    });
    // Oculta contenedores de redes que quedaron vacíos
    document.querySelectorAll('[data-social-group]').forEach(function (g) {
      if (!g.querySelector('[data-social]')) g.remove();
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applySocials);
  } else {
    applySocials();
  }
})();
