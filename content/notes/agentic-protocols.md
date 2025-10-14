---
title: Agent Protocols
date: 2025.01.29
tags: ["dev", "seed"]
---

> This note has been updated to include multiple different agentic protocols as
> there has been a huge influx on new ones lately

It seems the industry needs to be reminded of this [xkcd](https://imgs.xkcd.com/comics/standards.png) post

<img src="https://imgs.xkcd.com/comics/standards.png" alt="standards" width="100%" />

Keeping this as a stub as I work my way through reading the different protocols
that my work has thrown my way.

- MCP — Model Context Protocol
- A2A - Agent-to-Agent Protocola
- ACP - Agent Client Protocol
- ACP - Agentic Commerce Protocol
- AP2 - Agent Payments Protocol

## Model Context Protocol

Model Context Protocol Notes

- Standardizes how applications provide context to LLMs
- Should help to integrate with data and tools
- Add flexibility to switch between llm providers and vendors
- Lets you secure your data within your own infrastructure

### Architecture

Client Server Architecture.

An application can connect to multiple servers

- Host: End-User applications running an LLMs
- Client: A protocol client that connects to a servers
- Server: A progrom that exposes specific capabilities

Essentially Servers expose data/tools while clients consume them.

a mental model I had for the relationships between clients and hosts are if a
python application has a mcp package installed and ran an instance of it in its
code, then it is a host with an MCP client.

There is a handshake process for a client and server to begin exchanging data.

#### Resources

This is essentially data that the servers can expose to the clients. There
endpoints for listing available resources, retreiving specific resources, and
getting notifications about changes to the resources.

There is an API schema for this.

Everything else (tools, prompts, samples, etc) all seem to be concrete
implementations of the generic resource type.

For any client <- server read operations you can use most of the resource types,
but in the case of client -> server write operations you need to use `tools`

### Servers

Essentially initialize an MCP Server with `mcp = FastMCP()` object in python and then
use decorators of `@mcp.tool()` to register certain functions
