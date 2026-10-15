# Engineering Standards — Selected Practices

**Source:** Curated adaptation of the private Engineering Standards & Quality Guidelines (Document 04), informed by actual review/CI practice.

## Quality and delivery principles

- Keep business logic outside transport handlers and persistence frameworks.
- Prefer small, explicit module interfaces over abstractions without demonstrated value.
- Require a named transaction owner and deterministic cleanup.
- Treat database migrations as reviewed source and validate real PostgreSQL-specific behavior against PostgreSQL, not SQLite substitutes.
- Use independent implementation and review, including focused remediation and repeat verification.
- Distinguish success in unit tests, integration tests, installed-environment acceptance and live external-service evaluation.
- Require protected operations to fail safely and revalidate external/derived outputs against authoritative state.
- Record architectural changes in decisions, while preserving historical trade-offs rather than rewriting them as inevitable outcomes.

## What review means in practice

The Sprint 007 data-lifecycle reconstruction is a concrete case where planner measurements and regression evidence led to rejection of an over-composed RLS approach. This case is more informative than a generic statement that the project "uses testing".

See [RLS reconstruction](case-studies/rls-planner-reconstruction.md), [Unit of Work](case-studies/unit-of-work-and-transactions.md) and [source-backed research](case-studies/provenance-and-grounded-rag.md).

This page does not include the private CI configuration, agent prompts, runbooks or security-control inventories.
