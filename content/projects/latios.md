---
title: "Latios.nvim — A Hackable Copilot for Neovim"
date: 2024.09.08
---

> This project can be found on
> [GitHub](https://github.com/VVoruganti/latios.nvim)

I've been working with language model applications for a while now, between work
on [tutor-gpt](https://github.com/plastic-labs/tutor-gpt) or
[honcho](https://github.com/plastic-labs/honcho). And in that time I've seen a lot of
different methods to improve the fidelity and value of the responses from models
like ChatGPT. Just things like adding a separate inference step where you ask
the model to "think" about the question has really improved the results I've
seen. I've also been using AI coding assistants for a while now, and
while they aren't always perfect, they can help speed up a lot of my coding.
Tools like [cursor](https://cursor.sh) are great, but I've struggled with making
the switch because of my entrenched usage of [[neovim-setup|neovim]].

I've been using [codeium.vim](https://github.com/Exafunction/codeium.vim), but I
don't really have any control of the model or prompting architecture. I'm also
just curious how it works under the hood. I figured that neovim's
[tree-sitter](https://neovim.io/doc/user/treesitter.html) integration would be
great for building the context for queries. The curiosity, my fairly often usage
of coding assistants, and experience building applications inspired me to try
and build my own. I'm sure this is more complicated than I'm making it out in my
head, but I haven't seen too many implementations that mess around a lot with the
prompt of the copilot. From a cursory look at a lot of options they seem to just
throw the current code file into the context window and send it to a model. So I
wanted to mess with it more to see what things you can tune to make it better.

- What system prompts?
- What prompting architecture?
- What context to throw into the model?

I also just want to delve more into the world of plugin development in neovim.
[[today|Today.nvim]] is a pretty simple plugin and I'm sure the rabbit hole just goes
way deeper.

Since this is a more ambitious project, I think I'll split up updates into
devlogs and try to use this page as a more evergreen source of links and
research.

## Inspiration

- [Codeium.vim](https://github.com/Exafunction/codeium.vim) — The Copilot I
  currently use

## Devlogs

- [[latios-devlog-1|Latios Devlog (1) A Naive Copilot]]
