---
title: Yet Another Neovim Setup Guide — 2024 Edition
date: 06.16.2024
tags: ["dev", "guide", "neovim"]
---

> The code and configuration associated with this post is available on
> [GitHub](https://github.com/VVoruganti/dotfiles) some of the configs may be
> out of date as I'm not using all the same tools anymore

It should be obvious by now that I'm a huge [[neovim]] fan. I started using it early in my
coding journey and it's been my [[journaling | daily driver]] for a long time.
I've gone back and forth between different configurations and plugins time and
time again, often losing nights to just rebuilding everything. I've even
recently started creating my [[today | own plugins]] to optimize my workflow.
Many familiar with [ricing](https://www.reddit.com/r/unixporn) will be familiar
with the endless pursuit of making a custom thing feel just right.

Up until very recently I had been using a preconfigured distribution of neovim
called [LunarVim](https://www.lunarvim.org/). I've had a few custom setups
before ,but was devoting too much time, so tried to stop that by using something
with sane defaults and just stick with it. This had varying degrees of
success... There were some plugins that I wanted that weren't in LunarVim and
when I wanted to further customize stuff I had to use their config format.
However, it was still not too bad and better than the sometimes nightly practice
of fine-tuning. That was all until my copilot stopped working for me after an
update.

I've been using [codeium.vim](https://codeium.com/) for my co-pilot in neovim
since early on when stuff like [GitHub
Copilot](https://github.com/github/copilot.vim) was announced and it just wasn't
working after a random `LvimUpdate`. I figured this is something I messed up and
broke so I needed to figure out what part of my setup is breaking down. In this
process I ended up just deciding, ok I should just redo my setup and properly
document it this time.

> [!NOTE]
> Turns out wasn't my fault there was just a [problem with
> codeium](https://github.com/Exafunction/codeium.vim/issues/376) but got me
> here anyways

Neovim was also having a moment on Twitter and it's 2024 so I figured there's
probably a bunch new extensions that standards to try. Starting from the
LunarVim plugin list and also Googling for what I new hot plugins there were, I set out
to rebuild my setup.

## Prerequisites

I was setting up neovim on my M1 Macbook Pro, so some of the setup instructions
may vary. The current version of neovim as of writing this post is `v0.10.0`. I
used [homebrew](https://brew.sh/) to install neovim.

```bash
brew install neovim
```

The only other prerequisite I installed was `ripgrep` for making file searching
faster.

```bash
brew install ripgrep
```

At this point entering `nvim` should open up the default neovim screen. I'm
assuming that you have knowledge of how to use vim and vim commands generally,
but may not have setup neovim before.

## Structure

All of the configuration files for my setup are located in `~/.config/nvim`. I
believe this is the default location on Mac OS. Running `set runtimepath?` from
the command menu in Neovim will display all of the paths neovim is checking.

Below is an incomplete snapshot of the directory structure for my config files.

```markdown
.
└── .config/
└── nvim/
├── init.lua
├── lua/
│ └── marshmalon/
│ ├── lazy/
│ └── init.lua
└── after/
└── ftplugin/
```

Everything starts with the `init.lua` in `.config/nvim`. This is the entrypoint
for the config. Some older guides may use an `init.vim` for backwards
compatibility, but I wanted my entire config to be in lua so I wouldn't need to
figure out any VimScript.

Then there is the `lua` folder that holds all of the remaining configurations.
The `lua/` folder is special because anything in there is requirable. In fact
all of the setup is done in this folder. The `.config/nvim/init.lua` file just
requires the `marshmalon` module.

**init.lua**

```lua
require("marshmalon")
```

That makes the new entrypoint `.config/nvim/lua/marshmalon/init.lua`. This
structure is taken from [ThePrimeagen's Recommendations](https://www.youtube.com/watch?v=w7i4amO_zaE). I used the name

> [!TIP]
> I used `marshmalon` because that's usually my username online, but this can be
> anything. Can be the name of your system or your user the computer.

The other directory within `marshmalon/` is `lazy/` which will contain all of
the setup and configuration for plugins installed using the
[Lazy](https://github.com/folke/lazy.nvim) plugin manager.

### Setting up Lazy

Before we can start using fancy plugins and getting a really slick experience we
need to setup a package manager. As I mentioned in the last section I'm using
Lazy, but there are a number of older manages such as `packer` and `vim-plug`
that are still used and referenced in documenation for plugins.

From the [Lazy Setup Docs](https://lazy.folke.io/installation) I use the single
file setup to get started.

Under `marshmalon/` I have a file called `lazy_init.lua` with the following
contents:

```lua
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not (vim.uv or vim.loop).fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable", -- latest stable release
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

require("lazy").setup({
    spec = "marshmalon.lazy",
    change_detection = { notify = false }
})
```

This will clone the package manager if it isn't already installed and set the
location for plugin definitions to be the `.config/nvim/lua/marshmalon/lazy/`
folder.

Before that works we need to update our `marshmalon/init.lua` file to include
it.

```lua
vim.g.mapleader = " " -- Set leader key before Lazy

require("marshmalon.lazy_init")
```

Lazy needs a leader key to defined before it is loaded so I run that before
everything else and set the leader to a spacebar press.

Now you should be able to exit and re-enter neovim with Lazy configured. Run
`:Lazy` to verify that it is there. You should see a window like in the image
below (without any additional plugins).

![Lazy](lazy.png)

## Plugins

Now we can get into the different plugins I used. Below is a list of
the different plugins I setup.

- [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) — Fuzzy file finder using ripgrep
- [today.nvim](https://github.com/VVoruganti/today.nvim) — A daily journaling plugin
- [tokyonight.nvim](https://github.com/folke/tokyonight.nvim) — Colorscheme
- [nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) — Language Server Protocol Configurations
  - [mason.nvim](https://github.com/williamboman/mason.nvim) — Manages language servers
  - [mason-lspconfig.nvim](https://github.com/williamboman/mason-lspconfig) — Manages language servers
  - [cmp-buffer](https://github.com/hrsh7th/cmp-buffer) — completion source
  - [cmp-nvim-lsp](https://github.com/hrsh7th/cmp-nvim-lsp) — completion source
  - [cmp-path](https://github.com/hrsh7th/cmp-path) — completion source
  - [LuaSnip](https://github.com/L3MON4D3/LuaSnip) — snippets
  - [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) — completion engine
- [codeium.vim](https://github.com/Exafunction/codeium.vim) — GitHub Co-pilot alternative
- [lazy.nvim](https://github.com/folke/lazy.nvim) — Plugin Manager
- [lualine.nvim](https://github.com/nvim-lualine/lualine.nvim) — configurable statusline
- [nvim-treesitter](https://github.com/nvim-treesitter/nvim-treesitter) — Tree Sitter and Syntax Highlighting
- [which-key.nvim](https://github.com/folke/which-key.nvim) — Shows keybindings
- [Comment.nvim](https://github.com/numToStr/Comment.nvim) — Easy Shortcut for commenting lines
- [symbols-outline.nvim](https://github.com/simrat39/symbols-outline.nvim) — Show outline of symbols in a file
- [vim-illuminate](https://github.com/RRethy/vim-illuminate) — highlights all instances of word under cursor
- [nvim-autopairs](https://github.com/windwp/nvim-autopairs) — Automatically pair for brackets and quotes
- [gitsigns.nvim](https://github.com/lewis6991/gitsigns.nvim) — show git signs in side buffer
- [indent-blankline.nvim](https://github.com/lukas-reineke/indent-blankline.nvim) — show lines for indent levels
- [bufferline.nvim](https://github.com/akinsho/bufferline.nvim) — show tabs in bufferline at the top

I won't go into each one in exhaustive detail as I think it's up to each user to
decide what they want, but feel free to look at the
[GitHub](https://github.com/VVoruganti/dotfiles) and copy whatever you want.

For each plugin I made a corresponding file under
`.config/nvim/lua/marshmalon/lazy` and specified the configuration there. Below
is an example for [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter)

**.config/nvim/lua/marshmalon/lazy/treesitter.lua**

```lua
return {
  "nvim-treesitter/nvim-treesitter",
  build = ":TSUpdate",
  config = function()
    local configs = require("nvim-treesitter.configs")

    configs.setup({
      ensure_installed = {
        "c", "lua", "vim", "vimdoc", "elixir", "javascript", "html", "python", "typescript"
      },
      sync_install = false,
      highlight = { enable = true },
      indent = { enable = true },
    })
  end
}
```

The file needs to return a table that matches a [Plugin
Spec](https://lazy.folke.io/spec). The first entry is the name of the Git
Repository that the plugin is located in on GitHub.

Then some setup code. The `build` entry specifies a command to run when the
plugin is installed or updated, and the `config` entry is a function to run when
the plugin is loaded. See the full docs for all the available options. In this
case I am ensuring that several treesitter parsers are installed and enabling
highlighting and indentation.

If you don't know where to start or what plugins to install I would at the very
least recommend the following

- [Treesitter](https://github.com/nvim-treesitter/nvim-treesitter) — for syntax
  highlighting
- [Telescope](https://github.com/nvim-telescope/telescope.nvim) — for quick file
  search
- A colorscheme of your choice (I use [Tokyonight](https://github.com/folke/tokyonight.nvim))
- [LSP Config](https://github.com/neovim/nvim-lspconfig) and [Mason](https://github.com/williamboman/mason.nvim) for managing language servers

## LSP

The Language Server Protocol (LSP) is a very powerful tool that is built-in to
neovim and can be used for diagnostics, code completion, and more. To utilize it
when coding you need a corresponding language server. Each language will have
different ones with different capabilities.

To manage this I recommend using [Mason](https://github.com/williamboman/mason.nvim) a package manager
for language servers in neovim.

There are several ways to go about setting up the LSP. One popular way is to use
the [LSP Zero](https://lsp-zero.netlify.app) plugin that provides a lot of
sane defaults.

I did all of my LSP setup in a plugin definition under `.config/nvim/lua/marshmalon/lazy/lsp.lua`. In that file I also
setup the `nvim-cmp` plugin for managing autocompletions and set up several
sources for the completion including the language servers themselves.

## Miscellaneous Settings

After installing all the plugins and language servers you want the last step is
to configure any other defaults of the editor. I have two files for this.

- `set.lua` — for setting defaults in neovim
- `remap.lua` — for managing my custom keybindings

**Set.lua**

```lua
vim.cmd.colorscheme("tokyonight")

vim.opt.clipboard = 'unnamedplus' -- use system keyboard for yank

vim.opt.nu = true                 -- set line numbers -- set line numbers
vim.opt.relativenumber = true     -- use relative line numbers

-- set tab size to 2 spaces
vim.opt.tabstop = 2
vim.opt.softtabstop = 2
vim.opt.shiftwidth = 2
vim.opt.expandtab = true
vim.opt.smartindent = true

vim.opt.wrap = false

vim.opt.incsearch = true -- incremental search

vim.opt.termguicolors = true
```

This is a smaller file that sets various defaults for neovim such as tab
size, line numbering, and clipboard configuration.

For managing my keybindings I used a plugin called
[which-key](https://github.com/folke/which-key.nvim) that let's me annotate,
organize, and create a small dialog window at the bottom that tells me what
different keys will do. Very helpful for when I forget a key binding.

My `remap.lua` file is rather long and has many comments but to illustrate how
it works I put a small snippet from it below

**Remap.lua snippet**

```lua
local which_key = require("which-key")
local non_lsp_mappings = {
  ["<leader>"] = {
    e = { vim.cmd.Ex, "Open file explorer" },
    p = { "\"_dP", "Paste without overwrite" },
    ["/"] = { "<Plug>(comment_toggle_linewise_current)", "Toggle comment" },
    s = { [[:%s/\<<C-r><C-w>\>/<C-r><C-w>/gI<Left><Left><Left>]], "Search and replace word under cursor" },
    t = { ":Today<CR>", "Open today's note" },
  },
  J = { "mzJ`z", "Join lines and keep cursor position" },
  ["<C-d>"] = { "<C-d>zz", "Half page down and center" },
  ["<C-u>"] = { "<C-u>zz", "Half page up and center" },
  n = { "nzzzv", "Next search result and center" },
  N = { "Nzzzv", "Previous search result and center" },
  Q = { "<nop>", "Disable Ex mode" },
}

which_key.register(non_lsp_mappings)
```

This creates several keybinds, but when entering a group (such as with
\<leader\>) it will show a float window with all the keybinds in that group like
so.

![Keybinds](keybinds.png)

Before these work I need to make sure to include both files in my
`marshmalon/init.lua` file. So my final `init.lua` looks like this.

```lua
vim.g.mapleader = " "

require("marshmalon.lazy_init")
require("marshmalon.remap")
require("marshmalon.set")
```

## The `after` Directory

This is a directory that I haven't talked about until now. It let's you define
configurations that are loaded after everything else. This is useful if you want
to ensure a set of plugins are installed before running some configurations. You
can also set certain configurations to run on certain filetypes by specifying
them inside `after/ftplugin`

I largely did not need to use the `after` directory as I was able to specify
dependencies using `Lazy` and didn't hit any conflicts. The configuration I did
make is that I have a `markdown.lua` file that sets the text width to 80.

**.config/nvim/after/ftplugin/markdown.lua**

```lua
vim.cmd("setlocal textwidth=80")
```

This is helpful when writing so that my lines automatically wrap at 80
characters and I don't just have lines that go forever.

## Conclusion

At the end of the setup my `.config/nvim` directory looks like so:

```markdown
.
└── .config/
└── nvim/
├── init.lua
├── lua/
│ └── marshmalon/
│ ├── lazy/
│ │ └── ...Many plugin specs
│ ├── init.lua
│ ├── lazy_init.lua
│ ├── remap.lua
│ └── set.lua
└── after/
└── ftplugin/
└── markdown.lua
```

Everything is configured using strictly lua with no VimScript.

Neovim is an ever-evolving platform that can change quite fast. One day's
plugins can be obsolete the next day, so inevitably there will be some drift and
this guide will be dated. That being said the ecosystem has been maturing and many standards
are becoming more cemented.

I can't see myself going to another editor at this point. Anything else I try
feels too slow and being co-located in the terminal is always nice as I'm
zipping around and running different commands.

I hope this guide was clear and helpful and can just drive home some ideas other
guides included.

### Further Work

As I hinted to earlier just like ricing, customizing an editor can be an endless
pursuit and just from the initial setup there are a few thins I want to work on.

The main one being writing my own co-pilot extension so that I have full control
of the model and prompt architecture.

## References

- [lsp-zero](https://lsp-zero.netlify.app/v3.x/)
- [ThePrimeagen's init.lua](https://github.com/ThePrimeagen/init.lua/tree/master)
- [Josean's 2024 Neovim Setup on Mac](https://www.josean.com/posts/how-to-setup-neovim-2024)
- [LunarVim Plugin Setup](https://www.lunarvim.org/docs/configuration/plugins/example-configurations)
