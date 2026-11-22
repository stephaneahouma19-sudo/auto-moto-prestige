/*
 * Génère les liens wa.me à partir de AMP_CONFIG.
 * - Numéro renseigné  -> https://wa.me/<numero>?text=<message>
 * - Numéro vide       -> https://wa.me/?text=<message> (partage WhatsApp)
 * Le message est toujours pris sur l'attribut data-wa-message du bouton.
 */
(function () {
  'use strict';

  var config = window.AMP_CONFIG || {};
  var number = String(config.whatsappNumber || '').replace(/\D/g, '');
  var generalMessage = config.whatsappGeneralMessage ||
    "Bonjour, j'aimerais savoir si vous avez des camions à votre disposition.";

  function buildHref(message) {
    var text = message || generalMessage;
    return number
      ? 'https://wa.me/' + number + '?text=' + encodeURIComponent(text)
      : 'https://wa.me/?text=' + encodeURIComponent(text);
  }

  var buttons = document.querySelectorAll('[data-wa-message]');
  for (var i = 0; i < buttons.length; i += 1) {
    var button = buttons[i];
    button.setAttribute('href', buildHref(button.getAttribute('data-wa-message')));
    button.setAttribute('target', '_blank');
    button.setAttribute('rel', 'noreferrer');
  }
})();
