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

## Machines vs Apps

As of the editing of this cheatsheet there is not full feature parity with the
the fly apps platform and machines API. This became apparent to me when I was
trying to set the restart policy of a machine. This is not possible from the
`fly.toml` and instead I need to use the machines api to change the
configuration of a specific machine. 

I found this from this [thread](https://community.fly.io/t/how-do-i-change-the-restart-policy-for-machines/7341)

Use this `fly machine update` to change created machines after launching an app.

[Fly Machine Update Docs](https://fly.io/docs/machines/flyctl/fly-machine-update/)
[Fly Machine update Reference](https://fly.io/docs/flyctl/machine-update/)


To view the configuration of a specific machine run

```bash
fly machine status {id} -a {app-name} -d
```
