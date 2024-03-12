---
title: Clauncher - Simple Web Scraper
date: 2024-03-11
---

this project is can be found on [GitHub](https://github.com/VVoruganti/clauncher)

The main purpose was to create a simple scraper that made use of the same
functionality as a browser's reader mode. It's a feature in most modern
browsers. 

* [Firefox](https://support.mozilla.org/en-US/kb/firefox-reader-view-clutter-free-web-pages)
* [Chrome](https://support.google.com/chrome/answer/14218344?hl=en)
* [Arc](https://www.reddit.com/r/ArcBrowser/comments/yn5rfj/reader_mode_like_feature/)

etc.

I make use of the [readability](https://github.com/mozilla/readability) library
that was opensourced by Mozilla. 

It simply uses `axios` to get the content of a page then sanitize it and put
into a virtual DOM using `jsdom` and `DOMPurify`. Finally, return the
`readability` payload as an API response. 

It definitely isn't the most optimized scraper ever and probably won't work for
most webpages too well, but it's a cheap and dirty option for self-hosting or
testing with other projects. 

