---
title: How I Setup My Blog
date: 2022-09-18
---

> The content in this post is now out of date. See [[colophon]] for an
> [[tags/evergreen | evergreen]] version.

Since that [[why-i-blog | last post]] there have been a lot of changes
in how my blog has been looking. Originally I was using
[bearblog](https://bearblog.dev) but since then their terms and conditions
changed. 

I didn't like their new system, and I finally had a large amount of freetime, so I
decided that I would invest a meaningful amount of time into creating a style
and workflow that I like. 

## 11ty 

Since [bearblog](https://bearblog.dev) wasn't working out for me, I needed to
think about the right platform. I wanted to something super lightweight but
configurable, so I decided to look at different [Jamstack
Options](https://jamstack.org/generators/). 

I tried out a few different options such as [Hugo](https://gohugo.io/), which
is known as one of the fastest static site generators, and I thought about
using NextJS since I had a lot of experience working with it professionally.
However, I'm not familiar with golang and NextJS just felt like overkill. I
wanted to avoid using anything complicated or with a large learning curve, so I
wouldn't have the same problem as before of endlessly tweaking my blog instead
of actually writing content. 

In the end, I settled on using [11ty](https://11ty.dev) because I have a lot of
experience with javascript and it seemed fairly lightweight. I thought about the
benefits of hugo being a lot faster, but that seemed like a bigger sell for
large companies or publications with hundreds of articles. So far I haven't had
any issues with the speed of 11ty. 

### Markdown Layer Requirements

I will note that one other aspect of 11ty that sold me over Hugo was its
configuration options. Mainly the [markdown configuration](https://www.11ty.dev/docs/languages/markdown/#optional-set-your-own-library-instance)
that lets you tweak the markdown conversion library [markdown-it](https://github.com/markdown-it/markdown-it).
Originally I was defining layout templates using reactjs or the css framework [bulma](https://bulma.io)
and found that I could not control what elements were in the final HTML.
For example. a bulma has a series of typography helpers classes but by default
I couldn't add them to all `<p>` tags. 

`markdown-it` is a fairly extensable library and has a decent ecosystem of
existing extensions. Hugo used the [goldmark](https://github.com/yuin/goldmark)
markdown library, which also has numerous extensions. However, Hugo didn't have an obvious
way for me to tweak the standard goldmark instance, and I don't know golang for
if I ever want to develop an extension. 

### Inspiration

Okay, now that I know how I want to build my blog I needed to decide what I
wanted it to look like. I spent a while looking through my bookmarks and finding
webpages with aesthetics that I like a lot. Below are a few different ones that
I used as reference. 

- [https://www.worksinprogress.co/](https://www.worksinprogress.co/)
- [https://fabiensanglard.net/](https://fabiensanglard.net/) 
- [https://andymatuschak.org/](https://andymatuschak.org/)
- [https://www.akselmo.dev/](https://www.akselmo.dev/)
- [https://moonscript.org/](https://moonscript.org/)
- [https://not-matthias.github.io/](https://not-matthias.github.io/)
- [https://zola-after-dark.netlify.app/some-other-article/](https://zola-after-dark.netlify.app/some-other-article/)

In the end I would say the final design is HEAVILY inspired by the
[moonscript](https://moonscript.org) webpage.

I also realized that a lot of the webpages I enjoyed visually used a monospace
font, so I played around with a few different ones and ended on the
`Inconsolata`.

## Writing Setup

Before, I was using [Taleguild](https://taleguild.com), but I was having some
formatting pains when I would move it over to bearblog since Taleguild doesn't
natively support markdown.

I figured since I now controlled all the source code for the blog I'll just
write my content the same way I write the code. So now I'm using [LunarVim](https://github.com/LunarVim/LunarVim)
with a markdown linter. Originally, I tried to configure my own version of
neovim with a bunch of different extensions, but the ecosystem changes so often
and there's so many ways to do it that I got frustrated and decided an opiniated 
distribution would be better. But, that's a story for another post...

--- 

You can track the progress of my blog directly in the [GitHub repository](https://www.github.com/VVoruganti/blog)

Here I'm keeping track of some other features and ideas I want to implement on
the website like adding more blog metadata. 
