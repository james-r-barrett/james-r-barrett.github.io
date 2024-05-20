---
layout: archive
title: "Protocols"
permalink: /protocols/
author_profile: true
---

Where possible, I will upload relevant protocols here.


{% include base_path %}

{% for post in site.protocols reversed %}
  {% include archive-single.html %}
{% endfor %}


<ul>
  {% for post in site.protocols %}
    <li>
      <a href="{{ protocol.url }}">{{ protocol.title }}</a>
    </li>
  {% endfor %}
</ul>