# Case Study — Source Provenance and Grounded Research

**Foundation:** Sprints 005–006 and the merged bounded Sprint 007 WP4 A+B1 implementation.

## The core problem

A search result is not enough to make a research answer inspectable. A reliable system needs to know which source, version and passage supplied evidence; whether that content was eligible when the answer was produced; and whether access remains authorized when past answers are reopened.

## Approach

- Prepare documents through an isolated, bounded ingestion pipeline before they can become eligible research sources.
- Keep document/version/chunk provenance in authoritative persistent state.
- Treat vector indexes as rebuildable search aids, not authorization authorities.
- Resolve retrieval scope on the server, then reauthorize source eligibility before evidence can be used or exposed.
- Persist answer history and citation identities in server-controlled records.
- Constrain follow-up context to bounded, presently eligible prior conversation material.

## What was actually reviewed

Sprint 006 produced a grounded research vertical slice and source/citation infrastructure. Sprint 007 WP4 A+B1 merged provider activation plumbing and bounded follow-ups. The integration campaign relied on synthetic provider transports; it **does not establish completed live model quality, bilingual evaluation or extended agent capabilities**.

## Lesson

Provenance and authorization are not cosmetic UI features. They influence data modeling, queue/idempotency boundaries, retrieval, answer persistence and deletion/revocation handling.

This public study intentionally omits exact API contracts, scoped SQL enforcement, source-verification algorithms, provider configuration and internal fixtures.

## Reading the code

The [original Search domain model](../../backend/app/search/domain/models.py) includes a real reciprocal-rank-fusion implementation. The [public evidence demo](../../backend/app/rag/application/evidence_demo.py) is a derived teaching example; its callers must reauthorize evidence first. See the [research flow diagram](../architecture/research-flow.md).
