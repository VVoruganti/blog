---
title: Journaling with Neovim to Manage my Mind
date: 2023-12-21
tags: ["mental health", "neovim"]
---

For those of you who know me one of the things I'm open about is my
struggle with my mental health. I tweet about it pretty often and don't like to
shy away from talking about therapy or medication. My mental health issues
usually manifest as depression and anxiety.

One of the symptoms I face is when I particularly stressed or having an episode
is my thoughts start to race at an alarming rate. This can be as simple as being
unable to focus on one thing and constantly context switching so that nothing
gets done to just going down deep thought loops that are assumptions built on
assumptions that just make me feel bad. It affects my productivity quite a bit
and can lead to really bad downward spiral.

Over the years I've gotten a bit better about managing my emotions when I reach
this state. Being able to talk out and unpack my thoughts is the key for me —
often I can disarm negative thinking by picking apart at the contradictions I'm
making or just simply add some organization to the chaos. However, I'm not
always around someone I can talk it through with, so I picked up journaling as a
grounding tool.

I started journaling initially when I was struggling to fall asleep during the
pandemic because my thoughts were just going nuts. I would handwrite in a
journal for a bit to get everything I was thinking on paper and then once I was
satisfied I could go back to sleep a lot easier. The problem with journaling by
hand for me was that I really wasn't able to write as fast as my brain was
moving. Still it was better than nothing and a drastic improvement from having
nothing.

Recently, I switched jobs to one that has me doing a lot more development work
and with that I've been having a terminal window open pretty much permanently.
When I was having one of these fits of racing thoughts I randomly opened up a
new file in vim and just started writing down everything. I found this to really
help me organize everything and get to work a lot faster. I'm a massive vim fan
and at this point struggle with using other text editors because I can't achieve
the same speed. That was the key, the speed I can open and manipulate text in
vim was unparalleled and immediately it became clear to me that this was the
best tool I could use to completely unpack my thoughts.

I'm also a pretty big personal knowledge management nerd, being that one person
in a friend group who tries every new productivity app. From that I've become
familiarized with a lot of the concepts in [Obsidian](https://obsidian.md/), and
the idea of creating a daily note. This is actually how I managed my notes when
I was working at Microsoft. Helped to organize the chaos of each day with
situations changing so often. I figured I could try to apply this same idea with
my neovim workflow, so I could journal each to unpack my thoughts and stay more
productive. I ended up setting up a simple `~/notes` folder in my workspace and
then wrote a small bash function, so I could quickly edit today's note from
anywhere. Below is the snipped I added to my `.zshrc`.

```bash
today () {
  local_root="$HOME/workspace/notes"
  file="$local_root/daily/$(date "+%Y-%m-%d").md"
  if [ ! -f "$file" ]; then
    cp "$local_root/templates/jrnl.md" $file
  fi
  nvim $file
}
```

I just get the current date and make a copy of a journal template I made then
open it with neovim. The template is also quite simple. It contains a section
for my daily todo items, a section for thoughts, and a reflection section that I
fill out at the end of the day. Below is a markdown example of this.

```md
# Date

## To Do

- [ ]

## Thoughts

## Reflection
```

## Conclusions

I've been using this workflow for about a month now, and it has been incredible
how much better I have been at staying grounded on my tasks and not losing time
to random context switching. It's also very accessible since I always have a
terminal window open anyways for whatever reason and searchability is great with
[ripgrep](https://github.com/BurntSushi/ripgrep) available.

Turns out I didn't need all the bells and whistles available in other PKM tools
like notion or even obsidian. The speed and ease of access of just using vim has
trumped everything.

If you're struggling with similar issue of racing thoughts I hope my experience
has some takeaway that can help you with managing your own thoughts. That being
said I'm not a mental health professional, and I'm not a therapist.I encourage
everyone to talk to a professional to find something to that fits them.
Mental health is not something to be ashamed of and is a very real part of the
human experience.
