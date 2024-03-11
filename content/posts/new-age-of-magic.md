--- 
title: A New Age of Magic
date: 2023-09-16
tags: ['post'] 
---

I first came across this quote in a great talk from the Software You Can Love
conference — [The Idealism and Practicality of Software You Can Love](https://www.youtube.com/watch?v=aYtAdWASGzg&t=9s).

With the advent of ChatGPT and “prompt engineering” I been thinking more and
more about this quote from Clarke’s three laws. 

> "Any sufficiently advanced technology is indistinguishable from magic."

It really resonated with me and aligned with a lot of the reasons I got into
tech to begin with. I first fell in love with hacker culture through college
hackathons where I saw incredible projects like [RedSi](https://devpost.com/software/redsi),
which was an FPGA made completely in Minecraft Redstone in the span of 36 hours or 
[Shadow Realm VR](https://news.mlh.io/shadowrealmvr-12-15-2015), which made something my ten-year-old 
brain always wanted into a pseudo reality. This endless creativity and
the promise that you could make anything you could imagine ultimately led me
down the path of engineering.

Now hackathons have lost their majesty a bit, which I talked about a little in
[[creative-communities | Creative Communities for Engineering]], but that’s an
aside. 

With the framing of advanced technology being like magic, prompt engineering
started to sound a lot more like casting spells to achieve tasks. On a macro
level it’s a pretty wild idea. You type out a random little phrase, and you can
get entire [art pieces](https://www.midjourney.com/home/?callbackUrl=/app/),
[videos](https://kaiber.ai/product), fully functional [pieces of code](https://github.com/geekan/MetaGPT). 

As AI Agents grow in popularity, and the ecosystem grows we’ll be able to do more
and more. However, right now prompting isn’t necessarily the most
straightforward thing. You can’t just ask for whatever you want however you
want. Each model and engine has its own quirks. Sometimes you have to tell
ChatGPT to give you an answer “as a joke” to get the right answer. With
Midjourney you can add some strange tags to specify what you want and don’t want
in an image. There’s even a [chaos](https://docs.midjourney.com/docs/chaos)
parameter to add more variety. There’s no end to the resources on how to get
these models to do what you want. just to name a few:

- https://www.promptingguide.ai/
- https://github.blog/2023-07-17-prompt-engineering-guide-generative-ai-llms/
- https://docs.cohere.com/docs/prompt-engineering
- https://docs.anthropic.com/claude/docs/introduction-to-prompt-design

You have to talk the language of the LLM to get it do what you want like how in
the Inheritance cycle book series you have to speak [the ancient language](https://inheritance.fandom.com/wiki/Ancient_Language) to cast spells.
This is a not so subtle transition to my idea. 

## Prompts as Spells

This isn’t even a unique idea. As I’ve been thinking about it I’ve seen
similar discussion like [Now is the time for grimoires](https://www.oneusefulthing.org/p/now-is-the-time-for-grimoires).
Most people (including me) don’t truly understand how LLMs work under the hood. I’ve
looked through [Attention is all you need](https://arxiv.org/pdf/1706.03762.pdf) people a few times, but my eyes
always glaze over once it starts get into too much math. 

All I know is that I can talk to an LLM using the [universal magic language of text](https://scale.com/blog/text-universal-interface) to get results like
magic. You’ll see posts all over on engineering blogs for “Cookbooks for using
ChatGPT”, but I’d argue the term “Spellbooks” are more apt. 

## Types of Magic Systems

Generally, in literature we distinguish between [hard and soft](https://habitwriting.com/hard-magic-vs-soft-magic/) magic systems.
Essentially, in a hard system the limitations are well defined, and the reader
understands how it works, while in a soft magic system (think lord of the rings)
it’s more vague how it works.

In some ways LLMs are a hard magic system. We have institutions that wrote the
papers describing the exacts steps taken to build them. When we inference
against one we know what’s going on under the hood mechanically. We even have
great [YouTube tutorial](https://www.youtube.com/watch?v=kCc8FmEb1nY) breakdowns
going step by step on how to build them: 

That’s all well and good, but there’s also an argument to call them a
soft-magic system considering the [“capability overhang”](https://www.lesswrong.com/posts/N6vZEnCn6A95Xn39p/are-we-in-an-ai-overhang).
Even though we built these tools and controlled every part of the process, new
uses and ways of prompting are being discovered each day to siphon more and more
value. Every other day I see a new gumroad link for prompts to achieve xyz, or a
new paper on prompting or even context window management. Yes this magic system
exists, but we don’t necessarily know the limits of what we can achieve with it.
So maybe there’s a better distinction that we can make. We know the source of
the magic, but not how to use it yet. 

## The Source of Magic

The source of magic is always different in literature too. Some examples
includes

- The force in star wars — “It's an energy field created by all living things”
- Alchemy in full brother alchemist — “diastrophic energy that is released from
  the movement and collision of tectonic plates”
- Final Fantasy VII It comes from the life stream”
- In Dragon Ball Ki is a way of harness your own energy
- In Naruto Chakra is a way of harnessing your own energy

In general from what I’ve seen there’s either some external omnipresent thing
that magic is harnessed from, or it’s generated internally using your own energy
as an exchange. 

So, if we equate using prompts on LLMs as casting magic spells, what is the
source? Is it the LLM itself, or maybe the compute itself is the magic. The
compute is the actual physical thing doing “work” in the most physical sense. Is
it the network of compute strung together forming the internet? Compute by
itself isn’t really omni-present, instead the internet let’s people access it
from anywhere. You can think of phones and computes as wands that let you access
the source of magic. A metaphor I liked a lot was from Patricia Lockwood’s [No One is Talking About this](https://www.amazon.com/No-One-Talking-About-This/dp/0593189582), referring
to everything as a “Portal” for entering and accessing the internet. What about
the electricity that’s used to run everything? Maybe this is too narrow of a
view. Instead of one magic system we can think of each of layer up to LLMs as a
distinct set of magic. Going back to Clarke’s 3 laws any advanced technology can
be considered magic. So each layer was at one point magic until it was widely
understood how it works. 

## The Currency of Magic

Magic exists all around us. Electricity, the internet, the radio — all just
different scientific advancements that worked together to get us to today’s
ecosystem. Now how do we use this magic? We know the different sources but what
do we need to harness it. 

Well when it comes down too it, I don’t see any other argument except money. You
can’t just sacrifice get a computer working in exchange for your own energy. You
have to pay for electricity, some kind of “portal”, and pay for access to an
LLM. So you’re paying just for the base access to the magic system. Each
additional layer adds another base cost. If you don’t have an LLM you can still
write code and achieve your own magical effects. https://thi.ng/ shows you can
make tons of cool things just by coding alone. If you’re using OpenAI to cast
“spells” on GPT-4, it could be easier, but you then are [paying by the token](https://openai.com/pricing).

We’re not quite in a place where I can pedal a bike to generate enough
electricity to sell back to the grid where I made profit too then use to run an
LLM. Or at least I don’t know how to get there.

## Final Thoughts

We are building more and more abstractions on coding and technology where it
keeps looking more and more like magic, but should remember that everything that
they are built on were also magic at one point. 

This mental model more than anything makes me appreciate prompt engineering as a
discipline. I’ve seen tons of people scoff at the idea of prompt engineering
being engineering at all or not being very impressed by what they can achieve
with LLMs today. I can see where that’s coming from, but also when I think about
programming it was also initially like that. Writing assembly code and stuff on
punch cards was neat I’m sure, but I doubt everyone thought it was going to be
groundbreaking in its state at the time. Despite the tech not being there yet,
people still invested into seeing how computers work and developing the
discipline of programming. The computers got better overtime and people already
well-versed in how old systems work were able to bring those learnings to
develop the art of programming until eventually we got too today where the
amount of resources are endless. 

There’s so much interest in AI and in my mind a sufficient amount of use cases
already to make them valuable that I don’t think we’ll stop improving them
anytime soon. Already I’m seeing papers like [Retentive Networks](https://arxiv.org/abs/2307.08621) on
how to improve from transformer models. Just because the source of the magic
isn’t fully developed, doesn’t mean we can’t already start exploring what we can
do with it.
