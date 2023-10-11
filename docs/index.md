---
layout: home
title: Home
date: 2023-03-02T09:10:19.017Z
order: "1"
description: The Running Alpha Handbook
hero:
  text: The Good Shepherd Alpha Handbook
  tagline: ‘But everything should be done in a fitting and orderly way.’ (1
    Corinthians 14:40)
  actions:
    - theme: brand
      text: Get Started
      link: /introduction/1-welcome
features:
  - icon: 📝
    title: <a href="/preparation/introduction.html">Preparing your Alpha</a>
    details: <a href="/preparation/1-introduction.html">Get Started -></a>
  - icon: 🎥
    title: <a href="/content/introduction.html">The Alpha Content</a>
    details: <a href="/content/1-introduction.html">Get Started -></a>
  - icon: 🙋🏻‍♂️
    title: <a href="/small-groups/introduction.html">Small Group Tips</a>
    details: <a href="/small-groups/1-introduction.html">Get Started -></a>
  - icon: 📆
    title: <a href="/post-alpha/introduction.html">Post Alpha follow up</a>
    details: <a href="/post-alpha/1-introduction.html">Get Started -></a>
---

<script setup>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
