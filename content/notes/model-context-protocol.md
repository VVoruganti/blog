---
title: Model Context Protocol
date: 2025.01.29
tags: ["dev", "seed"]
---

Model Context Protocol Notes

- Standardizes how applications provide context to LLMs
- Should help to integrate with data and tools
- Add flexibility to switch between llm providers and vendors
- Let's you secure your data within your own infrastructure

## Architecture

Client Server Architecture.

An application can connect to multiple servers

- Host: End-User applications running an LLMs
- Client: A protocol client that connects to a servers
- Server: A progrom that exposes specific capabilities

Essentially Servers expose data/tools while clients consume them.

## Servers

Essentially initialize an MCP Server with `mcp = FastMCP()` object in python and then
use decorators of `@mcp.tool()` to register certain functions
