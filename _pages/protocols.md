---
layout: archive_2
title: "Protocols"
permalink: /protocols/
author_profile: true
---

Where possible, I will upload relevant protocols here.

<ul>
  {% for protocol in site.protocols %}
    <li>
      <a href="{{ protocol.url }}">{{ protocol.title }}</a>
      <p>{{ protocol.excerpt }}</p>
    </li>
  {% endfor %}
</ul>





