/* Filtres du catalogue : recherche, catégorie, marque et budget maximum. */
(function () {
  'use strict';

  var grid = document.getElementById('vehicle-grid');
  if (!grid) return;

  var cards = Array.prototype.slice.call(grid.querySelectorAll('.vehicle-card'));
  var query = document.getElementById('filter-query');
  var category = document.getElementById('filter-category');
  var brand = document.getElementById('filter-brand');
  var price = document.getElementById('filter-price');
  var results = document.getElementById('results-count');
  var heroCount = document.getElementById('catalog-count-number');
  var empty = document.getElementById('empty-state');

  function normalize(value) {
    return String(value || '').trim().toLocaleLowerCase('fr');
  }

  function applyFilters() {
    var q = normalize(query && query.value);
    var c = category && category.value ? category.value : 'toutes';
    var b = brand && brand.value ? brand.value : 'toutes';
    var p = price && price.value ? Number(price.value) : null;
    var visible = 0;

    cards.forEach(function (card) {
      var searchable = normalize(card.getAttribute('data-search'));
      var matches =
        (!q || searchable.indexOf(q) !== -1) &&
        (c === 'toutes' || card.getAttribute('data-category') === c) &&
        (b === 'toutes' || card.getAttribute('data-brand') === b) &&
        (p === null || Number(card.getAttribute('data-price')) <= p);

      card.hidden = !matches;
      if (matches) visible += 1;
    });

    var label = visible + (visible > 1 ? ' résultats' : ' résultat');
    if (results) results.textContent = label;
    if (heroCount) heroCount.textContent = String(visible).padStart(2, '0');
    if (empty) empty.hidden = visible !== 0;
  }

  // Construit la liste des marques à partir des fiches présentes dans la page.
  if (brand) {
    var brands = [];
    cards.forEach(function (card) {
      var value = card.getAttribute('data-brand');
      if (value && brands.indexOf(value) === -1) brands.push(value);
    });
    brands.sort(function (a, b) { return a.localeCompare(b, 'fr'); });

    var selected = brand.value;
    brand.innerHTML = '<option value="toutes">Toutes les marques</option>' + brands.map(function (value) {
      return '<option value="' + value + '">' + value + '</option>';
    }).join('');
    brand.value = brands.indexOf(selected) !== -1 ? selected : 'toutes';
  }

  if (query) query.addEventListener('input', applyFilters);
  if (category) category.addEventListener('change', applyFilters);
  if (brand) brand.addEventListener('change', applyFilters);
  if (price) price.addEventListener('change', applyFilters);

  applyFilters();
})();
