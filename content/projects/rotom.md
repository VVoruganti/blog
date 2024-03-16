---
title: Rotom — A dead simple link validator
date: 2024-03-15
---

this project is can be found on [GitHub](https://github.com/VVoruganti/rotom)

The purpose of this project was to create a small script that can find all
the links in a directory using `grep` and checking that they are still valid
links but checking the http status code of the link from a `curl` request

The main script in this repo is the `audit.sh` file that will generate two
files. 

- `live.txt` — containing all the live links
- `dead.txt` — containing all the dead links

Any status code that is 400 or greater is considered a dead link.

I wrote this script while I was working as an offensive security engineer and
doing [penetration tests](https://en.wikipedia.org/wiki/Penetration_test) each
week. I used it as one of a few other preliminary checks when looking at a new
codebase. 

## Possible Future Work

* Creating a [Pre-commit](https://pre-commit.com/) hook that could automatically check for dead links
  before a push
* Creating a [GitHub Action](https://docs.github.com/en/actions/creating-actions) script that can run the `audit.sh` script as part
  of a CI pipeline
* Checking the git cache of a repo to only check files that have been changed 

