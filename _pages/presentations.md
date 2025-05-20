---
layout: archive_2
title: "Presentations"
permalink: /presentations/
author_profile: true
---

Where possible, I will upload relevant presentations here.

{% include base_path %}

<ul>
  {% for presentations in site.presentations %}
    <li>
      <a style="font-weight:bold" href="{{ presentation.url }}">{{ presentation.title }}</a>
      <p>{{ presentation.excerpt }}</p>
    <br>
    </li>
  {% endfor %}
</ul>