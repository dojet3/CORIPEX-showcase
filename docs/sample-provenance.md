# Code and Test Sample Provenance

This index is part of the publication candidate so readers can distinguish **original production source** from **adapted education examples** without access to private GitHub.

## Exact-source candidates

| Showcase path | Private source path | Source treatment |
| --- | --- | --- |
| [`api/health.py`](../backend/app/api/health.py) | `backend/app/api/health.py` | Original, unchanged |
| [`api/models.py`](../backend/app/api/models.py) | `backend/app/api/models.py` | Original, unchanged |
| [`documents/domain/metadata.py`](../backend/app/documents/domain/metadata.py) | `backend/app/documents/domain/metadata.py` | Original, unchanged |
| [`identity/domain/preferences.py`](../backend/app/identity/domain/preferences.py) | `backend/app/identity/domain/preferences.py` | Original, unchanged |
| [`shared/domain/deletion.py`](../backend/app/shared/domain/deletion.py) | `backend/app/shared/domain/deletion.py` | Original, unchanged |
| [`search/domain/models.py`](../backend/app/search/domain/models.py) | `backend/app/search/domain/models.py` | Original, unchanged |
| [`workspaces/domain/tags.py`](../backend/app/workspaces/domain/tags.py) | `backend/app/workspaces/domain/tags.py` | Original, unchanged |
| [`research/questionDrafts.ts`](../frontend/src/research/questionDrafts.ts) | `frontend/src/research/questionDrafts.ts` | Original, unchanged |
| [`research/questionDrafts.test.ts`](../frontend/src/research/questionDrafts.test.ts) | `frontend/src/research/questionDrafts.test.ts` | Original, unchanged |
| [`search/groupPassages.ts`](../frontend/src/search/groupPassages.ts) | `frontend/src/search/groupPassages.ts` | Original, unchanged |

The original TypeScript sample depends on application-specific generated types or React. It is **not** bundled with the whole application, and not every file is independently runnable.

## Adaptations, not production source

| Showcase file | Characterization |
| --- | --- |
| [`uow_demo.py`](../backend/app/shared/application/uow_demo.py) | Small teaching adapter illustrating transaction ownership, not CORIPEX's implementation or security context |
| [`evidence_demo.py`](../backend/app/rag/application/evidence_demo.py) | Small self-contained example of bounded pre-authorized evidence serialization, not the production RAG flow |
| [`public_route_demo.py`](../backend/app/api/public_route_demo.py) | FastAPI request/response illustration, not a CORIPEX route |
| [`tests/test_public_samples.py`](../tests/test_public_samples.py) | New tests for public teaching examples, not a reproduction of the internal test suite |

**Provenance controls:** selected source texts were compared to the private GitHub baseline during preparation. Internal revision, content hashes and publication review decisions are retained separately and intentionally not placed into the public package.

## Showcase review follow-up

The independent educational FastAPI demo rejects whitespace-only note titles.
The independent educational Unit of Work demo explicitly rolls back and closes
its fake transaction when a commit raises. These are **public example review
improvements**, not modifications of the private CORIPEX product source and not
claims about its production security behavior.
