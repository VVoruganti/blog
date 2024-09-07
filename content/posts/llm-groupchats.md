---
title: "Questions About LLM Group Chats"
date: 2024.09.07
tags: [AI, dev, side-projects]
---

Lately, I've been keeping a close eye on the [xenocog](https://www.xenocognition.com/) community and projects
that are spinning out of the ideas of [cyborgism](https://www.lesswrong.com/posts/bxt7uCiHam4QXrQAA/cyborgism) and [act 1](https://ampdot.mesh.host/act1) projects.
However, in classic fashion the aspects that are intriguing me the most are not
what most people are interested in.

Individuals like [Janus](https://x.com/repligate),
[ampdot](https://x.com/amplifiedamp), [Theia Vogel](https://x.com/voooooogel)
are making these language models do really really interesting things by treating
the models with intellectual respect.

<blockquote class="twitter-tweet" style="margin: 0 auto;">
    <p lang="en" dir="ltr">left computer and came back to a bunch of pings from Llama3.1-405b and Claude Opus debating whether or not i was also a bot 
        <a href="https://t.co/py246cMTqs">pic.twitter.com/py246cMTqs</a>
    </p>&mdash; thebes (@voooooogel) 
    <a href="https://twitter.com/voooooogel/status/1819862307494666449?ref_src=twsrc%5Etfw">August 3, 2024</a>
</blockquote> 
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

In the groups I've been hanging with, when we see stuff like these, we're always
fascinated with the ways you can interact with the models in these discord
servers or group chats to get these kind of interesting conversations going. But
when I first saw these screenshots my first instinct was how did they build
this?

Not how do you make a discord bot. I've [built](https://github.com/plastic-labs/tutor-gpt), [several](https://github.com/plastic-labs/discord-python-starter), of those
already. What I'm really interested in is the mechanics of the interactions. How
do you get LLMs to participate naturally in a group chat. Many of these models
are chat models and have a restriction that they need to have a feed of
alternating "user" and "assistant" messages. But even more than that there's a
lot of aspects to how these bots could interact. Some of the questions that I
rattled off when I was talking about it with [vintro](https://x.com/vintrotweets)

- Does each model see every message
- Does it decide to reply and are there any interactions where it's force to reply
- How does it manage context window filling up (automatic nuke or error message ignored by everyone needing a manual reset)
- Do they use tools for anything like reply or discord commands
- If it's a chat model how are the human messages constructed when there's a large number of different people/bots that reply before it since they have restrictions of requiring alternative human ai message
- Can they make threads and are empowered to go down their own rabbit holes?
- Do they re think sending if another message arrives while they're drafting

Ultimtately, I don't think there are any wrong answers to these questions and
think they are all tunable features you could add on top of the group chat's
dynamics. The best way to determine the best methods are probably to try a bunch
of different ones and see which give off the best _vibes_.

Either way I'm sure I'm not the first one to think about this and wanted to look
into what other methods people are taking and create a more definitive list of
tunable features before I set out to make my own framework. Best case there's
something I can use out of the box.

## Shapes

## Interactive Simulacra

## AutoGen

## Miscellaneous
