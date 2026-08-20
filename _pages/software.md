---
layout: archive_2
title: "Software"
permalink: /software/
author_profile: true
---

Software I develop and use for analysis and discovery is (when possible) shared in public github repositories.

{% include base_path %}

{% assign tools = site.software | sort: 'date' | reverse %}
<div class="software-grid">
  {% for tool in tools %}
    <article class="software-card">
      <div class="software-card__header">
        <span class="software-card__icon">
          {% if tool.icon %}
            <img src="{{ base_path }}{{ tool.icon }}" alt="">
          {% else %}
            <i class="fas fa-flask"></i>
          {% endif %}
        </span>
        <h2 class="software-card__title">
          <a href="{{ base_path }}{{ tool.url }}" rel="permalink">{{ tool.title }}</a>
        </h2>
      </div>

      <div class="software-card__excerpt">
        <p>{{ tool.excerpt | markdownify | remove: '<p>' | remove: '</p>' }}</p>
      </div>

      {% if tool.repo_url or tool.tool_url %}
        <div class="software-card__actions">
          {% if tool.tool_url %}
            <a href="{{ tool.tool_url }}" class="btn btn--success" target="_blank" rel="noopener">
              <i class="fas fa-external-link-alt"></i> Use the Tool
            </a>
          {% endif %}
          {% if tool.repo_url %}
            <a href="{{ tool.repo_url }}" class="btn btn--info" target="_blank" rel="noopener">
              <i class="fab fa-github"></i> View on GitHub
            </a>
          {% endif %}
        </div>
      {% endif %}
    </article>
  {% endfor %}
</div>