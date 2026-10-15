# Private Repository — Curated Structure and File Tour

This is a source-verified **directory map**, not a full mirror. The inspected private `main` baseline on 15 October 2026 contained 1,073 files and 124 directories. The following major module names and separations were confirmed from the GitHub tree; internal files/implementation and full history are not reproduced.

```text
CORIPEX/                                # private product source
├── backend/
│   ├── app/
│   │   ├── api/                        # FastAPI boundary
│   │   ├── audit/                      # durable audit module
│   │   ├── authorization/              # access control module
│   │   ├── documents/                  # Application / Domain / Infrastructure
│   │   ├── experience/                 # product experience
│   │   ├── identity/                   # account/session domain
│   │   ├── infrastructure/             # composition / adapters
│   │   ├── processing/                 # background intake and processing
│   │   ├── providers/                  # external provider boundary
│   │   ├── rag/                        # grounded research
│   │   ├── search/                     # lexical/semantic retrieval
│   │   ├── shared/                     # common transaction/domain contracts
│   │   ├── tests/                      # unit/integration evidence
│   │   └── workspaces/                 # hierarchy/domain
│   └── migrations/                     # reviewed schema evolution
├── frontend/
│   └── src/
│       ├── account/   activity/   api/   app/
│       ├── assets/    auth/       documents/
│       ├── help/      home/       research/
│       ├── search/    settings/   theme/   workspaces/
├── docs/
│   ├── adr/          docs_suite/  implementation/
│   ├── operations/   sprints/     workpackages/
├── infra/            scripts/     tools/       tests/
├── benchmarks/       experiments/
└── README.md
```

## Browse the curated public mirror

- [`backend/app/api`](../backend/app/api/README.md): **genuine FastAPI/Pydantic files** and a small derived illustrative route.
- [`backend/app/documents`](../backend/app/documents/README.md): real typed domain metadata.
- [`backend/app/workspaces`](../backend/app/workspaces/README.md): real Unicode normalization.
- [`backend/app/search`](../backend/app/search/README.md): authentic RRF algorithm in the original domain model.
- [`backend/app/rag`](../backend/app/rag/README.md): adapted evidence framing, not the authorization logic.
- [`backend/app/shared`](../backend/app/shared/README.md): genuine lifecycle values and an illustrative UoW.
- [`frontend/src/research`](../frontend/src/research/README.md): original state and tests.
- [`frontend/src/search`](../frontend/src/search/README.md): original source grouping helper.
- [`infra`](../infra/README.md), [`scripts`](../scripts/README.md), [`tools`](../tools/README.md), [`tests`](../tests/README.md): boundaries and omissions, not copied sensitive tooling.

**Why README-only directories?** A claimed representative source file should *never* be invented or stripped of security context without labeling. Some modules (authorization, identities, credentials, audit and infrastructure) have no approved low-risk complete source file. Their folders are instead represented by truthful architectural guides.
