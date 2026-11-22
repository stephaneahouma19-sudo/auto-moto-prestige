/* Coordonnées configurables et objet prérempli depuis l'URL. */
(function () {
  'use strict';

  var config = window.AMP_CONFIG || {};

  function fill(key, prefix) {
    var source = key === 'whatsapp' ? config.whatsappNumber : config[key];
    var value = String(source || '').trim();
    var targets = document.querySelectorAll('[data-contact="' + key + '"] small');

    for (var i = 0; i < targets.length; i += 1) {
      var small = targets[i];
      small.textContent = '';

      if (!value) {
        small.textContent = 'À renseigner';
        continue;
      }

      if (key === 'whatsapp') {
        small.textContent = value;
        continue;
      }

      var link = document.createElement('a');
      if (prefix === 'tel') {
        link.href = 'tel:' + value.replace(/[\s()-]/g, '');
      } else if (prefix === 'mailto') {
        link.href = 'mailto:' + value;
      } else {
        link.href = value;
      }
      link.textContent = value;
      small.appendChild(link);
    }
  }

  fill('phone', 'tel');
  fill('email', 'mailto');
  fill('address', '');

  var params = new URLSearchParams(window.location.search);
  var subject = params.get('objet') || '';
  var preview = document.getElementById('subject-preview');
  var subjectValue = document.getElementById('subject-value');

  if (preview && subjectValue) {
    preview.hidden = !subject;
    if (subject) subjectValue.textContent = subject;
  }
})();
