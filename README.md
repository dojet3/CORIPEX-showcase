# CORIPEX — Engineering Showcase

**A curated technical window into a private, security-first research intelligence platform.**

CORIPEX is a local-first research application for private document workspaces, secure intake, provenance-aware retrieval, and source-grounded research answers. The real product repository is private. This **separate public candidate** exposes selected authentic, reviewable source files, tests, architectural decisions and design evidence — without distributing the product, its credentials or operational controls.

> **Evidence boundary (15 October 2026).** The Academic Edition remains in Sprint 007 execution. Product UX, WP3-DEMO and bounded AI A+B1 implementation are merged, but owner-controlled Google/account-security checks, live AI and bilingual evaluation, full WP4 research capabilities, cloud deployment and final release acceptance are **not complete**. All showcases below are examples, not a deployable product.

## Engineering quality — verified numbers

<sub>**Snapshot:** 15 October 2026 · private product `main` commit `6ee93a24450ea5062086a5f3050fd374fa5822b7` · GitHub Actions run `38702176749` (completed successfully). The logs and repository are private; the numbers below are a dated, auditable summary, not live public CI badges.</sub>

| Recorded measure | Verified result | Interpretation |
| --- | ---: | --- |
| **Automated test cases passed** | **2,992** | 1,604 Python backend unit + 907 PostgreSQL integration + 481 frontend Vitest; counts from one CI run |
| Backend unit tests | 1,604 passed, 1 skipped | `pytest` output in Backend Quality job |
| PostgreSQL integration tests | 907 passed | Actual PostgreSQL/Redis/migration-security job, not SQLite tests |
| Frontend tests | 481 passed across 63 test files | Vitest summary in Frontend job |
| **Blocking CI jobs** | **8 / 8 succeeded** | Backend, PostgreSQL/Redis, Frontend, Trusted Launcher, secret scan, dependencies, IaC and project images |
| Trusted Launcher contract checks | 190 per shell | Reported once under Windows PowerShell and once under PowerShell 7; **not** added to 2,992 |
| Python backend production files | 309 | Tracked `.py` under `backend/app/`, excluding `backend/app/tests/` (includes `__init__.py`) |
| TypeScript/TSX frontend production files | 107 | Tracked `frontend/src/` source excluding `.test.ts` and `.test.tsx` |
| Backend test files | 94 unit + 61 integration | Tracked files with `test_*.py` naming in the respective trees |
| Frontend test files | 63 | Tracked `frontend/src/**/*.test.ts(x)` and `.spec.ts(x)` files |
| Tracked repository objects | 1,073 files, 124 directories | Git tree snapshot including docs, fixtures, generated files and evidence—not a code-only count |

The totals describe the **private CORIPEX product**, not tests running in this showcase. They do **not** establish code coverage, penetration-test approval, live AI model quality, deployment readiness, or completion of Sprint 007. **Total lines of code are intentionally not claimed**: an accurate figure would require a reproducible source-only scan with generated files and fixtures excluded.

**[Methods, CI job inventory and limitations →](docs/quality-metrics.md)**

## Tour the real engineering structure

The [`backend/`](backend/README.md) and [`frontend/`](frontend/README.md) folders are **curated mirrors of actual top-level module names**, not synthetic marketing categories. Inside each, you can browse a real source excerpt or an explanation of why sensitive modules remain private. [Structural map](docs/repository-map.md).

| Inspect | Sample / evidence | Why it is interesting |
| --- | --- | --- |
| FastAPI / Pydantic | [real `/health` handler](backend/app/api/health.py), [real request schema base](backend/app/api/models.py), [adapted API demo](backend/app/api/public_route_demo.py) | HTTP boundary and strict request contracts |
| Unit of Work | [adapted transaction example](backend/app/shared/application/uow_demo.py), [public tests](tests/test_public_samples.py), [ADR-007](docs/adr/ADR-007-unit-of-work-repositories-transactions.md) | Atomic commits, rollback, repository boundaries |
| Retrieval / RAG | [real Reciprocal Rank Fusion function](backend/app/search/domain/models.py), [adapted bounded evidence builder](backend/app/rag/application/evidence_demo.py) | Search ranking versus authorization and evidence construction |
| Domain modeling | [original tag normalization](backend/app/workspaces/domain/tags.py), [document metadata](backend/app/documents/domain/metadata.py), [preferences](backend/app/identity/domain/preferences.py) | Immutable values, Unicode and typed data boundaries |
| Client-side correctness | [real research drafts](frontend/src/research/questionDrafts.ts), [Vitest cases](frontend/src/research/questionDrafts.test.ts) | Scoped state, bounded memory and stale submission handling |
| Search UI | [original passage grouping helper](frontend/src/search/groupPassages.ts) | Stable grouping without unintended reranking |
| Difficult engineering recovery | [WP3-DEMO RLS reconstruction](docs/case-studies/rls-planner-reconstruction.md) | When planner tests forced redesign without removing security |

**Source fidelity:** original files and teaching adaptations are explicitly separated in [the sample provenance index](docs/sample-provenance.md). The educational UoW, context builder and API example are *not* production code, and they do not include authorization internals.

## Architectural documentation

- [System context and component topology](docs/architecture/system-context.md)
- [Module boundaries + transaction sequence](docs/architecture/module-boundaries.md)
- [Secure document-processing lifecycle](docs/architecture/document-lifecycle.md)
- [Authorized retrieval and grounded research](docs/architecture/research-flow.md)
- [Review/acceptance lifecycle](docs/architecture/engineering-workflow.md)
- [Architecture summary](docs/architecture-overview.md) and [AI architecture summary](docs/ai-system-overview.md)

All diagrams use GitHub-native Mermaid rendering and deliberately avoid deploying a specific internal security topology.

## Decisions and evidence

This repository retains **seven original ADR texts** (001–007) after source-level selection, along with adapted [vision](docs/project-vision.md), [roadmap](docs/product-roadmap.md), [engineering standards](docs/engineering-standards.md), and [status/evidence](docs/capabilities-and-evidence.md). Read the [ADR index](docs/adr/README.md).

| Decision | Resulting trade-off |
| --- | --- |
| [Modular monolith](docs/adr/ADR-001-modular-monolith-first.md) | Fewer distributed moving parts; clear internal seams |
| [SQLAlchemy + real PostgreSQL integration](docs/adr/ADR-006-persistence-foundation.md) | More realistic constraints and test discipline |
| [Explicit UoW](docs/adr/ADR-007-unit-of-work-repositories-transactions.md) | Commit/rollback are use-case transaction boundaries |
| [RLS planner reconstruction](docs/case-studies/rls-planner-reconstruction.md) | Rejected cumulative policy topology; bounded WP3-DEMO scope |
| [Provenance-aware research](docs/case-studies/provenance-and-grounded-rag.md) | Derived vector systems cannot be an access authority |

## What this repository deliberately does not contain

- No runnable deployment, original repository Git history, complete backend/frontend, environment files, operator scripts, privileged SQL, migrations, provider keys, internal failure diagnostics, review prompts or raw security fixtures.
- No fictitious screenshots, real user documents, live secrets or private endpoints.
- No suggestion that the small teaching examples implement the production authorization, cost or privacy policies.

A complete list of reviewed inclusion/exclusion rules is kept **outside this candidate**, for the project owner's private publication audit.

## Try the small public examples

The example tests exercise the adapted UoW and evidence builder and the original pure Unicode-tag normalization. They do **not** test the real application or its security integration.

```sh
python -m pip install -r requirements-demo.txt
python -m pytest tests/test_public_samples.py tests/test_api_public_sample.py -q
```

For the real TypeScript source files, the matching Vitest test is included as *reading evidence*, not as a standalone installable React package. The tests intentionally reference the React runtime in the parent application.

## Public release policy

This curated repository is reviewed **privately before any public visibility change**. Publication and code/document licensing require explicit project-owner approval. The repository intentionally contains no license grant at this stage; public visibility must not be mistaken for permission to reuse the work.
