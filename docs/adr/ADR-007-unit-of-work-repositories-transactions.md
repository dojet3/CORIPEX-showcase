# ADR-007 — Unit of Work, Repository, and Transaction Boundaries

## Status

Accepted

## Date

2026-08-17

## Context

CORIPEX requires explicit transaction ownership and a clear separation between application workflows and persistence implementation details.

Security-sensitive workspace operations also require trusted PostgreSQL context to be established before protected repository queries execute.

Allowing repositories, route handlers, or individual persistence operations to manage independent commits would make atomicity, rollback, authorization context, and testing difficult to reason about.

## Decision

CORIPEX will use an application-level Unit of Work as the transaction boundary for persistence-sensitive use cases.

The Unit of Work is responsible for:

- opening the database transaction;
- applying trusted transaction-local PostgreSQL context;
- exposing purpose-specific repository implementations;
- committing successful workflows;
- rolling back failed workflows;
- closing database resources deterministically.

Repository interfaces are defined inward from infrastructure.

SQLAlchemy repository implementations use the Unit of Work session.

Repositories may flush when an identifier or database constraint must be resolved, but repositories do not commit and do not create independent sessions.

FastAPI route handlers do not directly use SQLAlchemy sessions or repositories.

## Alternatives Considered

### Repository-Owned Commits

Rejected because separate repository commits break atomic multi-step workflows and make rollback behavior unpredictable.

### Direct SQLAlchemy Sessions in API Routes

Rejected because this couples HTTP transport code to persistence infrastructure and bypasses the application transaction boundary.

### Implicit Global Session Management

Rejected because process-global or long-lived sessions create lifecycle, isolation, concurrency, and authorization-context risks.

### Transaction per Repository Method

Rejected because a single application use case may require multiple repository operations to succeed or fail together.

## Consequences

### Positive

- transaction ownership is explicit;
- multi-repository workflows remain atomic;
- rollback behavior is testable;
- PostgreSQL security context is established before protected queries;
- application code depends on repository and Unit of Work contracts rather than SQLAlchemy details;
- infrastructure adapters can be replaced without changing domain rules.

### Negative

- application use cases require explicit Unit of Work orchestration;
- repository implementations must follow transaction discipline;
- integration tests are required to prove commit, rollback, and cleanup behavior.

## Invariants

- repositories never call commit;
- protected queries do not execute before required database context is established;
- authorization truth is not stored in mutable process-global state;
- transaction-local context ends with COMMIT or ROLLBACK;
- connections are released deterministically after the Unit of Work completes.

## Future Reconsideration

The Unit of Work boundary may evolve as asynchronous workflows and the Transactional Outbox are introduced, but synchronous business operations must preserve explicit transaction ownership and atomicity.
