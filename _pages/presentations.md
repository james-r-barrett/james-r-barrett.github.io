---
layout: archive_2
title: "Presentations / Posters"
permalink: /presentations/
author_profile: true
---

Where possible, I will upload relevant presentations and posters here.

{% include base_path %}

## Presentations

<ul class="presentation-list">
{% assign talks = site.presentations | where: "type", "Talk" | sort: "date" | reverse %}
{% for talk in talks %}
  <li class="presentation-item">
    {% if talk.thumbnail %}
      <a href="{{ talk.url }}">
        <img src="{{ talk.thumbnail }}" alt="Thumbnail for {{ talk.title }}">
      </a>
    {% endif %}
    <div class="presentation-text">
      <a style="font-weight:bold" href="{{ talk.url }}">{{ talk.title }}</a><br>
      <em>{{ talk.venue }}</em>, {{ talk.date | date: "%Y" }}
      {% if talk.slides %}
        · <a href="{{ talk.slides }}" target="_blank" rel="noopener">Slides</a>
      {% endif %}
    </div>
  </li>
{% endfor %}
</ul>

## Posters

<ul class="presentation-list">
{% assign posters = site.presentations | where: "type", "Poster" | sort: "date" | reverse %}
{% for poster in posters %}
  <li class="presentation-item">
    {% if poster.thumbnail %}
      <a href="{{ poster.url }}">
        <img src="{{ poster.thumbnail }}" alt="Thumbnail for {{ poster.title }}">
      </a>
    {% endif %}
    <div class="presentation-text">
      <a style="font-weight:bold" href="{{ poster.url }}">{{ poster.title }}</a><br>
      <em>{{ poster.venue }}</em>, {{ poster.date | date: "%Y" }}
      {% if poster.poster %}
        · <a href="{{ poster.poster }}">PDF</a>
      {% endif %}
    </div>
  </li>
{% endfor %}
</ul>