# Modular Architecture and Transaction Ownership

The structure is organized around business capabilities: `documents`, `workspaces`, `search`, `rag`, `identity`, `processing`. Inside a module, application use cases depend on inward contracts; the HTTP and SQLAlchemy adapters implement those contracts. The **Unit of Work** owns transaction lifecycle, not each repository method.

```mermaid
flowchart TB
   HTTP["FastAPI adapter"] --> UseCase["Application use case"]
   UseCase --> UOW["Unit of Work contract"]
   UseCase --> Domain["Domain invariants"]
   UOW --> Repo["Purpose-specific repositories"]
   SQL["SQLAlchemy adapter"] -. "implements" .-> Repo
   Session["Async DB session"] --> SQL
   UOW -. "opens/commits/rolls back" .-> Session
   SQL --> Postgres[("PostgreSQL")]
```

```mermaid
sequenceDiagram
    actor User
    participant API as HTTP adapter
    participant App as Use case
    participant UoW as Unit of Work
    participant DB as PostgreSQL
    User->>API: Request
    API->>App: Validate business command
    App->>UoW: Begin work
    UoW->>DB: Open transaction / establish protected context
    App->>UoW: Use repositories
    alt workflow succeeds
        UoW->>DB: Commit atomically
    else workflow fails
        UoW->>DB: Roll back changes
    end
    UoW-->>API: Release resources
```

The sequence is a **conceptual simplification**. Do not substitute the [educational UoW sample](../../backend/app/shared/application/uow_demo.py) for the private implementation. Read [ADR-007](../adr/ADR-007-unit-of-work-repositories-transactions.md).
