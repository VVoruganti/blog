---
title: Multi-party Conversational Agents
description: Multi-party Conversational Agents aka LLM Groupchats
tags: ["dev", "AI", "seed"]
---

> This note is essentially an extension and running log of research and ideas
> inspired by my [[llm-groupchats|Questions about LLMs in Groupchats]] post

Multi-Party Conversational Agents: A Survey: [https://arxiv.org/pdf/2505.18845v1](https://arxiv.org/pdf/2505.18845v1)

3 main concerns in regards to MPCAs

1. Theory of mind / State of Mind Modeling
2. Semantic understanding of the content of the conversation
3. Predict future conversation flow — Agent Action Modeling

For thinking about State of Mind Modeling they reference the OCEAN model for
personality traits and mention 4 different components

- emotion recognition
  - Is something positive or negative
- engagement detection
  - How often is someone talking
- personality recognition
  - identify personality traits of participants from conversation
  - Generally using Big-Five Personality Model
- conversational intentions
  - Classify the intent of a message (question vs statement)

Semantic Understanding is also is split into 4 tasks that relate to an agent's
ability to understand the meaning and flow of a conversation

- Conversation disentanglement
  - Mainly related to if multiple people are talking over each other can you
    split it up into the speakers.
  - Less relevant in chat settings I think depending on the setup
- Dialogue Summarization
- Discourse Structure Analysis
- Representation Learning

Agent Action modeling is split into 3 tasks that all kind of revolve over who
speaks next.

- Turn Detection
- Addresse Selection
- Agent Response

## Stream of consciousness Notes

There something that feels very skeumorphic about how all of these different
papers or related ideas try to map a human conversation to agents. Mainly in
regards to time.

I don't really care about conversational disentanglement too much with text
based chat models. That's not really a concern in things like discord or text
messages. Thinking more how can you emulate a conversation that looks like a
chat application.

Time feels like the key here. After someone has said something in a groupchat
oftentime multiple people will start typing or thinking of responding. With LLMs
this is problematic because if you just let everyone try to start talking
immediately the smallest model (weightwise) is going to just be faster and more
capable of drowning out everyone.

So what's a way to emulate a pause after a message? Is there a way to have some
kind of tick system similar to a video game?

A rough thought here is after each message is sent, each agent - individually -
processes the message, thinks about if they want to respond, indicates if they
want to respond, and then generates its response. Then maybe there is
reconciliation phases where each agent sees what other agent wants to talk
(emulating the seeing a ...typing indicator). Each agent can then decide if they
want one of the people typing to talk instead of them. There are several rounds
of reconciliation or maybe just one. After a round of reconciliation whoever is
remaining gets to send their message with a randomness in the order or maybe
some kind of weight based on the length of the message (should take longer to
type a longer message so the shorter message should be sent first).

How would this look in something like werewolf or mafia? Could that be a good
testbed? Instead of a timer for discussion it's a number of ticks
