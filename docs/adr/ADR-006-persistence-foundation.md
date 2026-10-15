# ADR-006 — Persistence Foundation with SQLAlchemy 2.x, Alembic, and psycopg 3

## Status

Accepted

## Date

2026-08-17

## Context

CORIPEX requires a PostgreSQL persistence foundation that supports asynchronous application access, explicit schema migrations, strong typing, integration testing against the real database engine, and future growth without introducing unnecessary distributed infrastructure.

The persistence layer must remain compatible with the modular-monolith architecture and must not leak SQLAlchemy or PostgreSQL implementation details into the domain layer.

## Decision

CORIPEX will use:

- PostgreSQL as the authoritative relational database;
- SQLAlchemy 2.x for ORM mapping and database access;
- psycopg 3 as the PostgreSQL driver;
- asynchronous SQLAlchemy sessions for application runtime access;
- Alembic for versioned schema migrations;
- PostgreSQL integration tests instead of SQLite substitutes for persistence-sensitive behavior.

Domain objects remain separate from SQLAlchemy ORM models.

Alembic migrations are reviewed source files and are the authoritative mechanism for schema evolution.

Runtime, migration, and ownership database identities remain separate.

## Alternatives Considered

### Raw psycopg without SQLAlchemy

Rejected because it would increase mapping and repository boilerplate and reduce the value of typed ORM metadata while providing little benefit for the current project scope.

### Synchronous SQLAlchemy

Rejected because the approved backend architecture uses asynchronous FastAPI and asynchronous PostgreSQL access.

### SQLite for Integration Tests

Rejected because SQLite cannot faithfully reproduce PostgreSQL schemas, roles, Row-Level Security, transaction-local context, or PostgreSQL-specific constraints.

### Automatic Schema Creation from ORM Metadata

Rejected as the primary schema-management mechanism because it does not provide reviewed, versioned, downgrade-capable migration history.

## Consequences

### Positive

- persistence behavior is tested against the production-class database engine;
- migrations are explicit and reviewable;
- SQLAlchemy metadata provides typed persistence mappings;
- asynchronous access aligns with the backend runtime;
- schema evolution has a deterministic history;
- PostgreSQL-specific security controls can be tested directly.

### Negative

- local development requires PostgreSQL;
- migration files require careful review;
- asynchronous database tests are more complex than in-memory tests;
- PostgreSQL-specific behavior reduces database portability.

## Operational Rules

- repositories use the Unit of Work session;
- repositories may flush but do not commit;
- schema changes are applied through Alembic;
- application runtime code does not perform DDL;
- migration upgrade, downgrade, re-upgrade, and drift checks are part of the quality gate;
- schema migrations must not silently become data migrations.

## Future Reconsideration

This decision may be revisited only if measured requirements justify a different persistence technology or service boundary. Any replacement must preserve domain independence, migration discipline, authorization enforcement, and transactional guarantees.
