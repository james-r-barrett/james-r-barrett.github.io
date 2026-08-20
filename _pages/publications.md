---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">Below is a selection of my publications, you can find a comprehensive list on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}

{% include base_path %}

<div class="publication-list">
  {% for post in site.publications reversed %}
    {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" %}
    <article class="publication-card">
      {% if post.image %}
        <div class="publication-card__image">
          <img src="{{ base_path }}{{ post.image }}" alt="">
        </div>
      {% endif %}

      <div class="publication-card__body">
        <h2 class="publication-card__title">
          <a href="{{ base_path }}{{ post.url }}" rel="permalink">{{ title }}</a>
        </h2>

        {% if post.venue %}
          <p class="publication-card__meta">Published in <i>{{ post.venue }}</i>, {{ post.date | default: "1900-01-01" | date: "%Y" }}</p>
        {% endif %}

        {% if post.citation or post.paperurl %}
          <p class="publication-card__citation">
            {% if post.citation %}Cite: {{ post.citation }}{% endif %}
            {% if post.paperurl %} <a href="{{ post.paperurl }}" target="_blank" rel="noopener">{{ post.paperurl }}</a>{% endif %}
          </p>
        {% endif %}

        {% if post.content and post.content != empty %}
          <details class="publication-card__details">
            <summary>Show abstract &amp; details</summary>
            <div class="publication-card__full">
              {{ post.content }}
            </div>
          </details>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>
