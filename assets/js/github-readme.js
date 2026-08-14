(function () {
  function isRelative(url) {
    return url && !/^([a-z][a-z0-9+.-]*:)?\/\//i.test(url) && !url.startsWith('data:') && !url.startsWith('mailto:') && !url.startsWith('#');
  }

  function absolutize(html, repo, branch) {
    var container = document.createElement('div');
    container.innerHTML = html;

    var rawBase = 'https://raw.githubusercontent.com/' + repo + '/' + branch + '/';
    var blobBase = 'https://github.com/' + repo + '/blob/' + branch + '/';

    container.querySelectorAll('img[src]').forEach(function (img) {
      var src = img.getAttribute('src');
      if (isRelative(src)) {
        img.setAttribute('src', rawBase + src.replace(/^\.?\//, ''));
      }
    });

    container.querySelectorAll('a[href]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (isRelative(href)) {
        a.setAttribute('href', blobBase + href.replace(/^\.?\//, ''));
      }
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener');
    });

    return container.innerHTML;
  }

  function loadReadme(wrapper) {
    var repo = wrapper.getAttribute('data-repo');
    var content = wrapper.querySelector('.gh-readme-content');
    if (!repo || !content) return;

    fetch('https://api.github.com/repos/' + repo)
      .then(function (res) { return res.ok ? res.json() : {}; })
      .catch(function () { return {}; })
      .then(function (repoInfo) {
        var branch = repoInfo.default_branch || 'main';

        return fetch('https://api.github.com/repos/' + repo + '/readme', {
          headers: { Accept: 'application/vnd.github.html+json' }
        }).then(function (res) {
          if (!res.ok) throw new Error('No README available for ' + repo);
          return res.text();
        }).then(function (html) {
          content.innerHTML = absolutize(html, repo, branch);
        });
      })
      .catch(function () {
        wrapper.style.display = 'none';
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.gh-readme-wrapper[data-repo]').forEach(loadReadme);
  });
})();
