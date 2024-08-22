---
title: "Latios Devlog #1 A Naive Copilot"
date: 2024.08.21
tags: ["dev", "side-projects", "AI", "neovim"]
---

> This post is in relation to my [[latios|latios.nvim]] which can be found on
> [GitHub](https://github.com/VVoruganti/latios.nvim).

At the time of writing this post I've built a naive AI copilot as a plugin for
neovim using lua. I say naive because it...

- Is slow
- Doesn't really have the best completions
- Isn't super easily hackable
- Not rigorously tested for backwards compatibility

But what we do have is a copilot that

- shows inline completions that can be `Tab` completed
- builds a context using treesitter, lsp, and several other sources
- requests completions from claude sonnet 3.5

A decent starting point. My process for building this was to analyze a few other
existing copilot solutions in neovim using [[repo-to-prompt]] and
[claude](https://claude.ai). The artifacts feature had just released when I
started development and a lot of those were incorporated into the initial
designs.

> [!Note]
> If you want to follow along in my repo I'm writing this at the point of commit [199d4ac](https://github.com/VVoruganti/latios.nvim/commit/199d5acff1180d2c6fb0043d440996f59425b451)

There's a decent amount of work left to do to clean up unnecessary and redundant
code generated from the claude artifacts so I'll try to only cover what is
actually used. There are also many specifics of the development that are
important for neovim plugin development and then others that important for
copilot development. I'll make an effort to delineate the two.

## Structure

### Neovim Plugin Structure

### Copilot Structure

- `init.lua`
- `server.lua`
- `display.lua`
- `context.lua`

## Challenges and Gotchas

### Debouncing Completion Requests

### Managing the Display

### Debugging and Profiling

## Sources

- https://m4xshen.dev/posts/develop-a-neovim-plugin-in-lua
- https://www.linode.com/docs/guides/write-a-neovim-plugin-with-lua/
- https://www.reddit.com/r/neovim/comments/15f78jq/plugin_development_starting_point/
- https://zignar.net/2022/11/06/structuring-neovim-lua-plugins/
- https://miguelcrespo.co/posts/how-to-write-a-neovim-plugin-in-lua/

## Next Steps

- [ ] Research more methods for building a more steamlined context for the copilot
- [ ] Finding better debugging and testing workflows for neovim plugin development
- [ ] Looking into a chat window and a select to edit feature
