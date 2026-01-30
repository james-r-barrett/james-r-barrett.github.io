---
layout: archive_2
title: "Presentations / Posters"
permalink: /presentations/
author_profile: true
---

Where possible, I will upload relevant presentations and posters here.

{% include base_path %}

## Presentations

<ul>
{% assign talks = site.presentations | where: "type", "Talk" | sort: "date" | reverse %}
{% for talk in talks %}
  <li>
    🎤 <a style="font-weight:bold" href="{{ talk.url }}">{{ talk.title }}</a><br>
    <em>{{ talk.venue }}</em>, {{ talk.date | date: "%Y" }}
    {% if talk.slides %}
      · <a href="{{ talk.slides }}" target="_blank" rel="noopener">Slides</a>
    {% endif %}
  </li>
{% endfor %}
</ul>

## Posters

<ul>
{% assign posters = site.presentations | where: "type", "Poster" | sort: "date" | reverse %}
{% for poster in posters %}
  <li>
    🪧 <a style="font-weight:bold" href="{{ poster.url }}">{{ poster.title }}</a><br>
    <em>{{ poster.venue }}</em>, {{ poster.date | date: "%Y" }}
    {% if poster.poster %}
      · <a href="{{ poster.poster }}">PDF</a>
    {% endif %}
  </li>
{% endfor %}
</ul>