--- 
title: Cutting Out The Middlemen
link: cutting-out-the-middlemen
layout: post.njk 
date: 2023-02-13
permalink: "posts/cutting-out-the-middlemen/"
meta_description: My goals and ideals going into personal projects in 2023 
tags: ['post'] 
---

<!-- Excerpt Start -->
I was spending some time at the beginning of the year parsing through my
personal wiki and looking at all of project ideas I've come with it.

At the time of writing this I have over 200 notion pages, each representing
a new project or investigation. I was getting choice paralysis and started
thinking how could I possibly start working at any them. 
<!-- Excerpt End -->

So I spent some time reviewing all of these ideas spanning since the beginning
of college. I was able to prune a decent number of ideas that were duplcates or
just small blurbs that I had no idea what the note was talking about. Then spent
some time adding tags to each of the ideas. I added one column for tracking
status. Some notes were just a title, while others had much longer outlines,
while some were close to being done. Finally, I added a column with tags for
each of the notes to classify the different topics they include. Examples of
these tags are Web, GameDev, Developer Productivity, Systems, Finance, etc.
After this both of these exercises I had a much better idea of "landscape" of
all of my different ideas. 

Basically, at random points over the last couple of years I would get a burst of
interest into a topic like **Game Development** and then spend a couple of days
researching the topic and throw down a bunch of random ideas. Then I would never
look at it again, saying that I'll work on them when I have more free time. But
when another concept that I really noticed was that in a lot of the cases I just
want to cut out middlemen in my life. A lot of cases where I'm using some
service or tool where instead, I hate that I feel like I could make my own tool.
The [[plain-text-accounting | Plain Text Accounting]] post is a great example of
this (which I definitely will post a part 2 soonish). This felt like a much
better set of ideas to focus my time on since the work would actually help me
and remove annoyances in my life. So the core concepts I'm going to focus on for
2023 are:

* Financial Views
* Travel
* Bookmarking
* Neovim

Kind of in style of my [Garden](../../../garden) page wanted to do a bit of a
preview of what I mean by these ideas with some links below. I'll probably also
update that page. 

# Financial Views

A lot of the pains with finances I've already talked about in
[plain-text-accounting](../plain-text-accounting), but I'll mention some
points again to drive it home. If I have multiple financial accounts with
different companies and different transactions, it's really hard to have a good
idea of the current state of my finances. I've tried a few different platforms. 

* [Personal Capital](https://www.personalcapital.com/)
* [Sofi](https://www.sofi.com/)
* Built in services with my Bank
* [Maybe.co](https://maybe.co/)

Usually, the views built-in to these platforms don't give me enough details and
don't let me drill down, It's very finicky if I want to categorize expenses, and
the most annoying thing is that the accounts are usually never in sync, and I
need to reauthorize them everytime. [Maybe.co](https://maybe.co/) was probably
my favorite one, but they are sunsetting their free plan, and I really don't need
a lot of what's in their premium plans. 

In reality, I just need a database of all the transactions associated with my
accounts, and I can analyze the data however. Double entry accounting is a nice
model for analyzing it, but the underlying issue still is that I can't access to
the data. 

# Travel

This is a more recent annoyance I've found, but now that I live much farther
from my family and after college a lot of my friends moved all over the country,
it's more important for me to be able to travel. However, every tool I've used
for trying to search for the cheapest, and most convenient flights doesn't meet
my needs. 

Some tools only support certain airlines, some don't have good flexible date
pickers (a lot of time I don't really have specific days in mind, just a week).
Also, a lot of these flight aggregate sites will show you a low price, but
instead of being able to book that ticket directly with an airline, to
keep the same price I have to use some weird third-party website. 

Again, I really just need access to a database of flights across different air
routes, and the ability to directly book flights with an airline. Been looking at
using [Duffel](https://duffel.com/) to enable some of these features. So no
hopefully in the near feature, I won't have to deal with terrible UIs, limited
searches to "alliance" members only, and an unholy amount of ads.

# Bookmarking

The topic of bookmarks are near and dear to my heart. I spend a ton of time on
the internet and encounter many different articles and websites that I want
to save. I had a reputation at old company I worked at for being the guy who
knew a link/company for everything. 

Colleage: "We need someone to do X" 
Me: "Oh you mean something like www.example.com?"

For the longest time I kept track of everything using browser bookmarks, but
they have become unwieldy. They are poorly organized, hard to search, don't
manage duplicates with the same root, don't let me search the content of the
pages, and a host of other problems. Also, now I have to split my time between
multiple different computers and browsers and can't just rely on everything
being in my Brave account. 

I've been using a couple of different tools to manage this lately. 

* [Notion Web Clipper](https://www.notion.so/web-clipper) for tools, companies, and anything I might want to
**use/leverage** in the future
* [Pocket](https://getpocket.com/) for longer form articles and things I want to **read**

These do an ok job, but still don't handle a lot of the cases I mentioned
before. Hard to search especially since it's across multiple tools, still have
bad UIs, and doesn't manage duplicates. Seen a lot of work with this around the
concept of a [memex](https://en.wikipedia.org/wiki/Memex) and some tools built
specifically for bookmarks. A few of these that I want to use for inspiration
are below. 

* [Diskernet](https://www.google.com/search?q=diskernet)
* [Raindrop](https://raindrop.io/)
* [Promnesia](https://github.com/karlicoss/promnesia)
* [Rewind.ai](https://www.rewind.ai/)
* [Zotero](https://www.zotero.org/)

Raindrop seems the most promising, and I'll admit I haven't tried migrating
everything over to it yet, however a general philisophy I feel like I'm trying
to follow is if I have all the of the data myself, I don't want to pay someone else
to make it usuable or pretty.

# Neovim

I have tried to use a lot of different developer tools in my time, but I have
never found an IDE to work well for me. They always feel too slow and clunky and
hard to extend. Vim has just always sped up my development a ton. Yes I know I
can use vim-mode with an extension in vscode, but it still feels clunky and
there's an unnatural latency that I notice. So my editor of choice is [Neovim](https://neovim.io/)
in fact I'm writing this blog post in neovim. 

However, configuring neovim isn't that trivial. There are tons of extensions that
are fairly crucial for elevating the experience and there's a decent amount you
need to know about the intricacies of how neovim works for configuring it.
There's a whole lua api for writing configurations and scripts and sometimes
different extensions can feel like a huge undertaking to incorporate (I'm
looking at you [Denite](https://github.com/Shougo/denite.nvim)). I've spent a
bunch of weekends and afternoons configuring my neovim environment by following
random medium articles, blogs, and reddit comments, but a lot of it is just
copy/pasting snippets and hoping it works. So I want to take some time to dig
through neovim and actually understand how it works. 

* Understanding the architecture and different concepts (registers, buffers, etc)
* Understanding the lua api for moving towards a full lua configuration
* Understanding LSPs and Linters better and how they are used by Neovim

After one particularly frustrating session of fiddling with my settings I just
threw everything away, and decided to use [LunarVim](https://www.lunarvim.org/),
which is a great default configuration. But there's a few shortcuts and
workflows that I want to change. and the level of abstraction makes some things
even trickier to change. 

A lot of this copy/paste workflow comes down to the fact that I don't really
understand what's going on a lot of the time when I change different
configurations, so I want to do some due diligence and understand the tool. Then
I want to make my dream configuration and give back to the neovim community via
contributions/tutorials.
