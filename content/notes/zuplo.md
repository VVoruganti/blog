---
title: Zuplo
date: 2024-03-21
tags: ['budding', 'review', 'dev']
---

> This page covers my notes as I started using and learning how to use the
> [Zuplo API Gateway](https://zuplo.com) 

## Background

I've been working on several API services that should be exposed to multiple
users. Rather than just being a backend for a web app I need this API to support
mutliple users and customers. 

A single user can either be a single person or a team of individuals. I use the
term *tenant* to refer to this concept. 

To provide some sort of tenant isolation between resources created by tenants I
need API keys scoped to each tenant. 

My API also has several sets of abstractions for different primitives. I want to
try to scope the API keys to different levels of abstractions. This may require
different types of API keys. 

### Enter Zuplo

Zuplo had a few different services that made it appealing. 

* It's a full API Gateway so helpful if I want to set up several services
* API key management with auth access management
* Rate Limiting
* Metering that can be used for cost management and billing


## Getting Started

Most of the getting started guide walked through how to use their web interface
for defining routes and adding policies to them. Policies seem to be the main
interface for customizing route functionality. 

API Key Consumers was the section in the settings that interested me the most. A
consumer seems to be the most primitive user of an API. They have the following
attributes

```json
{
"Subject": "",
"Key Managers": "".
"Metadata": {}
}
```

Associated with a consumer is a single API key. This API key is scoped to a
single consumer, and a `api-key-inbound` policy is necessary on each route to
require the API Key.

This doesn't feel flexible enough for the requirements I had above, but it did
have some interesting scripting features for dynamic rate limiting.

I want to investigate the API Keys and Consumers more. 


## API Keys

[API Keys Overview](https://zuplo.com/docs/articles/api-key-management)

Some key ideas from here

__Consumers__

A consumer can have multiple API keys associated with — but each key authorizes
the same consumer (i.e. identity)

__API Keys__

"API Keys do not contain any actual data within the key istelf"

---

It seems like most of the logic I'd want to create would still require me to do
the logic manually. At this point I don't think the service will actually
accomplish what I want.

It looks like it'll be easier to roll my own Auth and Database schema for
managing everything.




