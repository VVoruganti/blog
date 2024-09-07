---
title: "Questions about LLMs in Group Chats"
date: 2024.09.07
tags: [AI, dev, side-projects]
---

Lately, I've been keeping a close eye on the [xenocog](https://www.xenocognition.com/) community and projects
that are spinning out of the ideas of the [cyborgism](https://www.lesswrong.com/posts/bxt7uCiHam4QXrQAA/cyborgism) and [act 1](https://ampdot.mesh.host/act1) projects.
However, in classic fashion, the aspects that are intriguing me the most are not
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
do you get LLMs to participate naturally in a group chat? Many of these models
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

Ultimately, I don't think there are any wrong answers to these questions and
think they are all tunable features you could add on top of the group chat's
dynamics. The best way to determine the best methods are probably to try a bunch
of different ones and see which give off the best _vibes_.

Either way I'm sure I'm not the first one to think about this and wanted to look
into what other methods people are taking and create a more definitive list of
tunable features before I set out to make my own framework. Best case there's
something I can use out of the box.

## Shapes

My first thought when thinking of existing methodologies for this was
[Shapes](https://shapes.inc/). I have a bit of a history with this platform and
remember seeing in their docs something about [Shapes talking to
Shapes](https://wiki.shapes.inc/shape-essentials/shapes-talking-to-shapes). So I
went ahead and made a couple bots on their platform and added them all to a
server. Initially, when I was interacting with the bots in the server they only
responded when I explicitly mentioned them.

The docs say to add all of the bots to a server and then `/activate` them so
that they will "respond to any message sent in that channel." After doing that I
was getting some better results. I could put out a message into the channel and
would immediately see the typing icons from all 3 of my bots.

![Shapes talking to Shapes](../assets/shapes-talking-to-shapes.png)

However, after the initial message it ended. The bots wouldn't then keep
replying to each other and keep the conversation going. I was more imagining
that the bots would keep the conversation flowing, and keep discussing the
initial topic. The docs mentioned that you need to send another message or react
to the most recent message to have the conversation going. Reacting seemed to
kind of get the workflow I wanted but having to react between each conversation
turn wasn't really what I wanted. I was looking for something more hands off.
That said this is a good control if you don't want to suddenly wake up to a
giant API bill.

So although Shapes didn't do everything I wanted it too it still serves as a
good case study for the different features I'm interested in. On their platform
they have a ton of different parameters you can tune to impact the bots
behavior.

- You can add a bunch of color to the "personality" of the bot between a few
  different text boxes. I imagine these are included in the system prompt of the
  LLM.
- Similarly you can add "knowledge" the bot has in a large text box.
- You can tweak the model generation parameters
  - Temperature
  - Top P
  - Maximum Response Length
  - Context Window
- You can tune "short term memory"
  - The number of recent messages in a chat to take into context
- You can tune "long term memory"
  - How many memories to take into the context window
  - the memory similarity threshold
  - How frequently the bot saves new memories
- You can tune the similarity threshold for your shape to recall knowledge

There were some more settings related to image generation, but I'm as interested
in that right now so skipping that.

Another interesting thing to note about Shapes are they have a concept of [free
will](https://wiki.shapes.inc/shape-essentials/introducing-free-will) that let's
agents take actions on their own. This includes: initiating conversations,
reacting to messages, and dming old friends. In the settings of a shape the free
will section has its own selection for a LLM model distinct from the regular
flow, making me think it's handling it separately on the backend with some kind of
randomness.

## Interactive Simulacra

Way back near the beginning of the ChatGPT craze one of the most influential
papers seemed to be [Generative Agents: Interactive Simulacra of Human
Behavior](https://arxiv.org/pdf/2304.03442) which simulated a whole town using
LLMs as the residents of the town.

I'd imagine that there would be cases where multiple villagers talk to each
other at once so I set out to re-read the paper to see if there was anything to
take away.

Although there wasn't anything directly referencing the idea of a group chat I
thought their approach for how the agents sees the world could be a good
parallel for how a group chat works. Essentially in the paper they describe each
agent having a `memoryStream` which is essentially a list of all the events that
an agent observes. These can be observations, reflections, plans, etc. The
memory stream is then used at each step to determine what the nex actions should
be.

> Generative agents operate in an action loop where, at each time step, they
> perceive the world around them and those perceived observations are stored in
> their memory stream. We prompt the language model with these observations to
> decide whether the agent should continue with their existing plan, or react.

In a group chat there could be a similar type of behavior where each agent has a
"memoryStream" which is essentially just every message that has occurred in a
channel and just constantly uses that as context to determine if it should say
something. The main caveat here is that within the generative agents context
each agent seems to have some kind of goal they are trying to achieve, whether
it is to perform a job or have certain relationships. In the xenocog type
environments they try to be pure and not give any additional incentives to the
agents from an architecture. It should be as close to the base model as
possible, so if there's no goal how does the llm decide if it should do
anything? Why would it want to?

This might turn out to not even be a problem and maybe just something to test.
Maybe we'll find that none of the bots ever want to respond to anything. Maybe
we'll find that they are all chatty.

The generative agents framework has a pretty strict architecture
it follows, and relies heavily on a RAG style architecture for its memories.
Ideally, I could avoid any type of RAG so as to be as pure as possible about the
chat bot, but having some kind of global event stream that a bot could search
against doesn't sound so bad. A human can search against the discord channel so
why can't the agent. So some questions that I'm thinking of as I reflect on the
paper:

- Should the bots be able to search a global event stream?
  - How would that flow work?
- Do the bots need any kind of incentive encoded in them?

Some further analysis of the architecture of
[ai-town](https://github.com/a16z-infra/ai-town/tree/main) may lead to more
interesting questions, but I don't want to oversubscribe on this method since
they were going for a very specific use case that doesn't perfectly match group
chats.

## AutoGen

AutoGen describes itself as a framework for building LLM Applications via
Multi-Agent Conversation based on the title of their
[paper](https://arxiv.org/pdf/2308.08155). I'll admit that this is a framework
that I've heard mention of numerous times before, but I've never really dove
into the details. From a cursory look at the abstract and docs it seems to
mention a lot about multi-agent scenarios, so I'm eager to see if it matches the
kind of scenarios I'm thinking about.

Things that popped out at me

- agent auto-reply
- Dynamic Group Chat
  - Dynamically selecting a speaker
  - Collecting responses from that speaker
  - broadcasting the message

AutoGen is more a framework for building agents like AutoGPT or BabyAGI. The
goal of these agents tends to be to complete some kind of task. They do have a
concept of a Group Chat, but it isn't a true group chat because the agents
themselves don't have agency. A "Moderator" exists to dynamically select who
should be allowed to talk next, usually in interest of achieveing some goal.

## Silly Tavern

Some googling about LLM group chats led me to a reddit thread that mentioned
[Silly Tavern](https://sillytavern.app/). I've heard of silly tavern before in
some contexts of good local llm interfaces, but never actually used it. I was
delighted to find there is a whole section of the documentation called [Group
Chats](https://docs.sillytavern.app/usage/core-concepts/groupchats/).

However the methods described in it were pretty naive. There's either

- Natural order which has a mentioned bot respond and then randomly chooses
  other bots to respond based on a "talkativeness" factor
- List order where bots respond in a predefined order.

Although there does seem to be a setting to allow the chat to go on indefinitely
the randomness doesn't really achieve the agency I'm looking for. This seems to
be a pretty similar method in practice to how Shapes does it.

## Multi-User Chat Assistant (MUCA)

The last source I took a look at was this paper released by in January called
[Multi-User Chat Assistant (MUCA): a Framework Using LLMs to Facilitate Group
Conversations](https://arxiv.org/pdf/2401.04883) and after reading the abstract
it sorta sounded perfect.

> while most existing research has primarily centered on single-user chatbots
> that focus on deciding "What" to answer after user inputs. In this paper, we
> identified that multi-user chatbots have more complex 3W design dimensions –
> "What" to say, "When" to respond, and "Who" to answer.

That's gold. Almost exactly the types of problems I was thinking about. The
paper didn't have any code with it and couldn't find much other information
about it. I'll dive into it a bit more to extract some notes and get some more
questions.

They expand the 3W's with the following:

- What: **Content Intelligence** determining what to respond is important
  because a group chat can have multiple things going on at once.
- When: **Timing Intelligence** needing a decision making process to determine
  the right timing to chime in or keep silent.
- Who: **Recipient Intelligence** determine recipient such as specific group,
  unspecified participants, or all participants.

Challenges that the framework tries to address:

- Stuck conversation advancement
- Multi-threaded discussion management
- Responsiveness requirements
- Participating evenness
- Conflict resolution

Now for my use case I don't necessarily care about all of these, but having them
as tunable features is still interesting.

The framework's architectures describes two tunable components:

1. The Dialog Analyzer
2. The Utterance Strategies Arbitrator

The 3rd component, Sub-topics Generator, was not mentioned as tunable and is
used initially.

The Utterance Strategy arbitrator is the most interesting part to me as it
decides how the agent will act. They implement features of warmups, cooldowns,
and several other heuristics to dynamically weight the options. The weight is
used in tandem with a trigger condition to determine which action is taken.

Now a lot of these actions are attuned for the role of a "facilitator" rather
than an assistant and I think in my case the we can allow the models to
dynamically decide if they should take certain actions instead of using
predefined randomness, warmup, or cooldown factors. The important dialog acts
then are

- Keep silent
- Direct Chatting
- In-context chime in
- Sub-topic transition

I do think however they present a very interesting framework for how to
structure the information that the model receives.

## Conclusions

I definitely still feel like this is an underexplored space, but at the same
time I might just be overthinking it. These are the final questions I thought of
and will keep in mind as I build my own xenocognitive group chat.

The questions focus more on the dynamics of the group chat rather than the
behavior of the individual agents.

- Does each model see every message
- Does it decide to reply and are there any interactions where it's force to reply
- How does it manage context window filling up (automatic nuke or error message ignored by everyone needing a manual reset)
- Do they use tools for anything like reply or discord commands
- If it's a chat model how are the human messages constructed when there's a large number of different people/bots that reply before it since they have restrictions of requiring alternative human ai message
- Can they make threads and are empowered to go down their own rabbit holes?
- Do they re think sending if another message arrives while they're drafting
- How many messages does the LLM take into each context window on each
  conversation turn
- Should the bots be able to search a global event stream?
  - How would that flow work?
- Do the bots need any kind of incentive encoded in them?
- Are the bots natively aware of everyone else in the channel?
