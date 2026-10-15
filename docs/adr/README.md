# Selected CORIPEX Architecture Decision Records

These documents are **public editions of original engineering decisions** from the private CORIPEX repository, prepared as near-source, selectively edited material where needed. They preserve the original reasoning and historical framing, rather than claiming each decision alone proves final product acceptance.

1. [ADR-001 — Modular Monolith First](ADR-001-modular-monolith-first.md)
2. [ADR-002 — Local-First Development](ADR-002-local-first-development.md)
3. [ADR-003 — Python / FastAPI Backend](ADR-003-python-fastapi-backend.md)
4. [ADR-004 — React / TypeScript / Vite](ADR-004-react-typescript-vite-frontend.md)
5. [ADR-005 — Low-Cost First](ADR-005-low-cost-first-development.md)
6. [ADR-006 — Persistence Foundation](ADR-006-persistence-foundation.md)
7. [ADR-007 — Unit of Work / Transaction Boundaries](ADR-007-unit-of-work-repositories-transactions.md)

More sensitive identity, audit, privileged-database and provider-policy ADRs remain in the private product repository; they are not silently treated as nonexistent.

## Public code links

- [Original research ranking domain model](../../backend/app/search/domain/models.py)
- [Illustrative UoW transaction boundary](../../backend/app/shared/application/uow_demo.py) (not production source)
- [Source and fidelity index](../sample-provenance.md)
