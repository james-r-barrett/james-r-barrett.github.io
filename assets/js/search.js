(function () {
  var overlay = document.getElementById('search-overlay');
  var input = document.getElementById('search-input');
  var resultsEl = document.getElementById('search-results');

  if (!overlay || !input || !resultsEl || typeof lunr === 'undefined') return;

  var toggleBtns = document.querySelectorAll('[data-search-toggle]');
  var closeEls = document.querySelectorAll('[data-search-close]');
  var collectionLabels = {
    page: 'Page',
    protocols: 'Protocol',
    publications: 'Publication',
    software: 'Software',
    presentations: 'Presentation'
  };

  var idx = null;
  var store = {};
  var dataPromise = null;

  function loadData() {
    if (dataPromise) return dataPromise;
    dataPromise = fetch(overlay.getAttribute('data-search-src'))
      .then(function (res) { return res.json(); })
      .then(function (docs) {
        idx = lunr(function () {
          this.ref('url');
          this.field('title', { boost: 10 });
          this.field('content');

          docs.forEach(function (doc) {
            this.add(doc);
            store[doc.url] = doc;
          }, this);
        });
      })
      .catch(function (err) {
        resultsEl.innerHTML = '<li class="search-overlay__empty">Search is unavailable right now.</li>';
        console.error('Search index failed to load', err);
      });
    return dataPromise;
  }

  function openSearch() {
    overlay.hidden = false;
    document.body.classList.add('overflow--hidden');
    loadData().then(function () {
      input.focus();
    });
  }

  function closeSearch() {
    overlay.hidden = true;
    document.body.classList.remove('overflow--hidden');
    input.value = '';
    resultsEl.innerHTML = '';
  }

  toggleBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (overlay.hidden) { openSearch(); } else { closeSearch(); }
    });
  });

  closeEls.forEach(function (el) {
    el.addEventListener('click', closeSearch);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) {
      closeSearch();
      return;
    }
    if (e.key === '/' && overlay.hidden && document.activeElement !== input &&
        document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      openSearch();
    }
  });

  var debounceTimer;
  input.addEventListener('input', function () {
    clearTimeout(debounceTimer);
    var query = input.value.trim();
    debounceTimer = setTimeout(function () { renderResults(query); }, 120);
  });

  function renderResults(query) {
    resultsEl.innerHTML = '';
    if (!query || !idx) return;

    var hits = [];
    try {
      hits = idx.query(function (q) {
        query.split(/\s+/).forEach(function (term) {
          if (!term) return;
          q.term(term, { boost: 10 });
          q.term(term, { wildcard: lunr.Query.wildcard.TRAILING });
        });
      });
    } catch (e) {
      hits = [];
    }

    if (!hits.length) {
      resultsEl.innerHTML = '<li class="search-overlay__empty">No results for “' + escapeHtml(query) + '”</li>';
      return;
    }

    hits.slice(0, 8).forEach(function (hit) {
      var doc = store[hit.ref];
      if (!doc) return;

      var li = document.createElement('li');
      li.className = 'search-overlay__result';

      var a = document.createElement('a');
      a.href = doc.url;
      a.innerHTML =
        '<span class="search-overlay__result-title">' + escapeHtml(doc.title) + '</span>' +
        '<span class="search-overlay__result-meta">' + escapeHtml(collectionLabels[doc.collection] || doc.collection) + '</span>' +
        '<span class="search-overlay__result-excerpt">' + escapeHtml(snippet(doc.content)) + '</span>';

      li.appendChild(a);
      resultsEl.appendChild(li);
    });
  }

  function snippet(text) {
    if (!text) return '';
    var trimmed = text.trim();
    return trimmed.length > 160 ? trimmed.slice(0, 160) + '…' : trimmed;
  }

  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
})();
