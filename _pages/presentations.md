---
layout: archive_2
title: "Presentations / Posters"
permalink: /presentations/
author_profile: true
---

Where possible, I will upload relevant presentations and posters here.

{% include base_path %}

## Presentations

<div class="presentation-grid">
  {% assign talks = site.presentations | where: "type", "Talk" | sort: "date" | reverse %}
  {% for talk in talks %}
    {% include presentation-card.html item=talk %}
  {% endfor %}
</div>

## Posters

<div class="presentation-grid">
  {% assign posters = site.presentations | where: "type", "Poster" | sort: "date" | reverse %}
  {% for poster in posters %}
    {% include presentation-card.html item=poster %}
  {% endfor %}
</div>