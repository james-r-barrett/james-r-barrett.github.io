---
layout: archive_2
title: "Software"
permalink: /software/
author_profile: true
---

Software I develop and use for analysis and discovery is (when possible) shared in public github repositories.

{% include base_path %}

{% for tool in site.software %}
  <div class="list__item" style="margin-bottom: 2em;">
    <article class="archive__item">
      
      <h2 class="archive__item-title" style="font-size: 1.2em; margin-bottom: 0.25em;">
        <a href="{{ base_path }}{{ tool.url }}" rel="permalink">{{ tool.title }}</a>
      </h2>

      <div class="archive__item-excerpt" style="font-size: 1em; line-height: 1.6;">
        <p>{{ tool.excerpt | markdownify | remove: '<p>' | remove: '</p>' }}</p>
      </div>

      {% if tool.repo_url %}
        <p style="margin-top: 0.5em;">
          <a href="{{ tool.repo_url }}" class="btn btn--info" target="_blank" style="text-decoration: none; font-size: 0.9em;">
            <i class="fab fa-github"></i> View on GitHub
          </a>
        </p>
      {% endif %}
      
    </article>
  </div>
{% endfor %}