---
title: Fly.io Cheatsheet
date: 03-12-2024
tags: ["evergreen", "pattern","dev"]
---

> A collection of random notes and gotcha's I've found as I've been using
> [Fly.io](https://fly.io/). For more info on my thoughts on Fly.io you can read
> [[fly-2023 | A Year With Fly and Developer Delight]]


Flycast URLs should use internal binding not bind to local6pn

[Private Networking](https://fly.io/docs/reference/private-networking/)

The service itself can bind to its own port by using `fly-local-6pn:port` 

So in the case of honcho when tutor-gpt wants to hit the honcho api it will
select `http://honcho.flycast`

## CLI

The change the number of machines or temporarily bring down a service you can
use the below command. 

To bring down the service just make the number 0

```bash
fly scale count {num} -a {app name} -g {process group}
```
