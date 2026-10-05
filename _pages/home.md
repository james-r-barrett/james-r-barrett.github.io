---
layout: archive_2
permalink: /
title: "James Barrett"
seo_title: "James Barrett - Pyrenoid biology, University of York"
description: "James Barrett is a postdoctoral research associate in the Mackinder lab at the University of York, studying how pyrenoids work and evolved to guide CO2-concentrating mechanism engineering in plants."
author_profile: true
---

{% include base_path %}

<p class="home-intro">I am a postdoctoral research associate in the <a href="https://mackinderlab.github.io/">Mackinder lab</a> at the University of York. I study pyrenoids, the Rubisco-packed compartments that algae use to concentrate CO<sub>2</sub>: how they are built, how they evolved, and how they could be engineered into crop plants. <a href="{{ base_path }}/about/">More about me</a>.</p>

{% assign pubs = site.publications | sort: 'date' | reverse %}
{% assign featured = pubs | where_exp: "p", "p.image" | first %}
{% assign updates = site.protocols | concat: site.software | sort: 'date' | reverse %}

<div class="home-grid">
  <div class="home-main">
    <h2>Protocols and software</h2>
    <ul class="home-updates">
      {% for item in updates limit: 6 %}
        <li>
          <span class="home-updates__date">{{ item.date | date: "%b %Y" }}</span>
          <span><a href="{{ base_path }}{{ item.url }}">{{ item.title }}</a> <span class="home-tag">{% if item.collection == "software" %}Software{% else %}Protocol{% endif %}</span></span>
        </li>
      {% endfor %}
    </ul>
    <p class="home-more"><a href="{{ base_path }}/protocols/">All protocols</a> · <a href="{{ base_path }}/software/">All software</a></p>

    <h2>{% if featured %}More recent papers{% else %}Recent papers{% endif %}</h2>
    <ul class="home-papers">
      {% assign shown = 0 %}
      {% for post in pubs %}
        {% if featured and post.url == featured.url %}{% continue %}{% endif %}
        {% if shown >= 4 %}{% break %}{% endif %}
        {% assign shown = shown | plus: 1 %}
        {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" | strip %}
        <li>
          <a href="{{ base_path }}{{ post.url }}">{{ title }}</a>
          <span class="home-muted">{% if post.venue %}<i>{{ post.venue }}</i> {% endif %}{{ post.date | date: "%Y" }}</span>
        </li>
      {% endfor %}
    </ul>
    <p class="home-more"><a href="{{ base_path }}/publications/">All publications</a></p>
  </div>

  <aside class="home-side">
    {% if featured %}
      {% assign featured_title = featured.title | markdownify | remove: "<p>" | remove: "</p>" | strip %}
      <a class="home-feature" href="{{ base_path }}{{ featured.url }}">
        <img src="{{ base_path }}{{ featured.image }}" alt="Summary figure for {{ featured.title | strip_html | escape }}">
        <span class="home-feature__label">Latest paper</span>
        <span class="home-feature__title">{{ featured_title }}</span>
      </a>
    {% endif %}

    {% if site.author.bluesky %}
      <section class="home-bsky">
        <h2>On Bluesky</h2>
        <script type="module" src="https://cdn.jsdelivr.net/npm/bsky-embed@0.3.0/dist/bsky-embed.es.js" async></script>
        <div class="home-bsky__scroll" data-bsky-handle="{{ site.author.bluesky | remove: '@' }}"></div>
        <script>
          (function () {
            var box = document.querySelector('[data-bsky-handle]');
            if (!box) return;
            function isDark() {
              var attr = document.documentElement.getAttribute('data-theme');
              if (attr === 'light' || attr === 'dark') return attr === 'dark';
              return window.matchMedia('(prefers-color-scheme: dark)').matches;
            }
            var current = null;
            function render() {
              var dark = isDark();
              if (dark === current) return;
              current = dark;
              var feed = document.createElement('bsky-embed');
              feed.setAttribute('username', box.getAttribute('data-bsky-handle'));
              feed.setAttribute('limit', '10');
              feed.setAttribute('link-target', '_blank');
              feed.setAttribute('load-more', 'true');
              if (dark) feed.setAttribute('mode', 'dark');
              box.innerHTML = '';
              box.appendChild(feed);
            }
            render();
            new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', render);
          })();
        </script>
      </section>
    {% endif %}
  </aside>
</div>
