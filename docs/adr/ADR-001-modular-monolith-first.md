# ADR-001 — Modular Monolith First

## Status

Accepted

## Context

CORIPEX needs a project structure that is simple enough for early development but strong enough to grow into a larger platform.

Starting with many separate services would add unnecessary complexity during the first phase.

## Decision

CORIPEX will start as a modular monolith.

The backend will be one application, but the code will be organized by clear internal modules and responsibilities.

The project will keep one main repository and separate responsibilities through clear folders, modules, and interfaces. 

## Consequences

This keeps early development simple, local, and low-cost.

Later, if specific parts of the system need to scale independently, they can be extracted into separate services.