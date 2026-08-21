---
layout: archive_2
title: "Protocols"
permalink: /protocols/
author_profile: true
---

Where possible, I will upload relevant protocols here.

{% include base_path %}

<div class="protocol-grid">
  {% for protocol in site.protocols %}
    <article class="protocol-card">
      <div class="protocol-card__body">
        <h2 class="protocol-card__title">
          <a href="{{ base_path }}{{ protocol.url }}" rel="permalink">{{ protocol.title }}</a>
        </h2>

        {% if protocol.excerpt %}
          <p class="protocol-card__excerpt">{{ protocol.excerpt | markdownify | remove: '<p>' | remove: '</p>' }}</p>
        {% endif %}
      </div>

      <div class="protocol-card__actions">
        <a href="{{ base_path }}{{ protocol.url }}" class="btn btn--info">
          <i class="fas fa-book-open"></i> Read protocol
        </a>
      </div>
    </article>
  {% endfor %}
</div>





