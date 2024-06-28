---
layout: archive_2
title: "Protocols"
permalink: /protocols/
author_profile: true
---

Where possible, I will upload relevant protocols here.

{% include base_path %}

<ul>
  {% for protocol in site.protocols %}
    <li>
      <a style="font-weight:bold" href="{{ protocol.url }}">{{ protocol.title }}</a>
      <p>{{ protocol.excerpt }}</p>
    <br>
    </li>
  {% endfor %}
</ul>





