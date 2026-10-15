# ADR-003 — Python FastAPI Backend

## Status

Accepted

## Context

CORIPEX requires a backend that can support APIs, AI workflows, document processing, and future RAG pipelines.

Python is well suited for AI engineering and backend development.

## Decision

CORIPEX will use Python with FastAPI for the backend.

FastAPI will expose REST endpoints and serve as the main backend framework.

## Consequences

This provides a modern backend foundation with strong support for typing, validation, testing, and AI integrations.

The project must maintain clean structure and avoid putting business logic directly inside route handlers.