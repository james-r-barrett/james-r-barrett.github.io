---
layout: archive_2
title: "Software"
permalink: /software/
author_profile: true
---

Software I develop and use for analysis and discovery is (when possible) shared in public github repositories.

{% include base_path %}

<ul>
  {% for tool in site.software %}
    <li>
      <a style="font-weight:bold" href="{{ tool.url }}">{{ tool.title }}</a>
      {% if tool.repo_url %}
        <br>
        <span style="font-size: 0.9em;">
          [<a href="{{ tool.repo_url }}" target="_blank">View on GitHub</a>]
        </span>
      {% endif %}
      <p>{{ tool.excerpt }}</p>
      <br>
    </li>
  {% endfor %}
</ul>