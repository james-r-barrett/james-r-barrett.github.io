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

<section class="home-section">
  <h2 class="home-section__title">Latest publications</h2>
  {% assign pubs = site.publications | sort: 'date' | reverse %}
  <div class="home-pubs">
    {% for post in pubs limit: 3 %}
      {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" %}
      <a class="home-pub" href="{{ base_path }}{{ post.url }}">
        {% if post.image %}<img class="home-pub__image" src="{{ base_path }}{{ post.image }}" alt="" loading="lazy">{% endif %}
        <span class="home-pub__title">{{ title }}</span>
        <span class="home-pub__meta">{% if post.venue %}<i>{{ post.venue }}</i>, {% endif %}{{ post.date | date: "%Y" }}</span>
      </a>
    {% endfor %}
  </div>
  <p class="home-section__more"><a href="{{ base_path }}/publications/">All publications</a></p>
</section>

<div class="home-columns">
  <section class="home-section">
    <h2 class="home-section__title">Protocols</h2>
    {% assign protocols = site.protocols | sort: 'date' | reverse %}
    <ul class="home-list">
      {% for item in protocols limit: 4 %}
        <li><a href="{{ base_path }}{{ item.url }}">{{ item.title }}</a></li>
      {% endfor %}
    </ul>
    <p class="home-section__more"><a href="{{ base_path }}/protocols/">All protocols</a></p>
  </section>

  <section class="home-section">
    <h2 class="home-section__title">Software</h2>
    {% assign tools = site.software | sort: 'date' | reverse %}
    <ul class="home-list">
      {% for item in tools limit: 4 %}
        <li><a href="{{ base_path }}{{ item.url }}">{{ item.title }}</a></li>
      {% endfor %}
    </ul>
    <p class="home-section__more"><a href="{{ base_path }}/software/">All software</a></p>
  </section>
</div>

{% if site.author.bluesky %}
<section class="home-section home-bsky">
  <h2 class="home-section__title">On Bluesky</h2>
  <script type="module" src="https://cdn.jsdelivr.net/npm/bsky-embed@0.3.0/dist/bsky-embed.es.js" async></script>
  <div class="home-bsky__scroll" data-bsky-handle="{{ site.author.bluesky | remove: '@' }}"></div>
  <p class="home-section__more"><a href="https://bsky.app/profile/{{ site.author.bluesky | remove: '@' }}" target="_blank" rel="noopener">Follow on Bluesky</a></p>
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
        feed.setAttribute('limit', '8');
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
