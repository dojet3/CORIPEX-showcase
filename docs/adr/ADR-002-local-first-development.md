# ADR-002 — Local First Development

## Status

Accepted

## Context

CORIPEX should minimize cost and avoid unnecessary cloud complexity during early development.

Sprint 001 focuses on building a reliable local development foundation.

## Decision

CORIPEX will run locally first using Windows native tools and Docker Desktop.

Cloud deployment is postponed to a later sprint.

## Consequences

This reduces cost and makes the project easier to develop and debug.

Later cloud deployment will require additional configuration, but local development will remain supported.