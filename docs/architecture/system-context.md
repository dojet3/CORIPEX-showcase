# Component Context — Public Architectural View

The private implementation is a **modular monolith** with separate API/background runtime roles. PostgreSQL is the authority for durable domain and eligibility information. Redis and Qdrant are supporting systems; their contents cannot grant access by themselves.

```mermaid
flowchart LR
    Browser["React / TypeScript"] --> API["FastAPI HTTP boundary"]
    subgraph Backend["Modular backend application"]
      API --> App["Application use cases"]
      App --> Domain["Domain rules"]
      App --> Abstractions["Ports / repositories"]
    end
    Abstractions --> DB[("PostgreSQL · durable truth")]
    Abstractions --> Ops[("Redis · operational state")]
    Abstractions --> Index[("Qdrant · derived index")]
    Worker["Worker / outbox roles"] --> App
    Worker --> Isolation["Isolated document processing"]
    App --> Providers["Governed external AI boundary"]
```

The presence of a provider boundary does **not** establish successful live AI activation or accepted evaluation. Cloud deployment is still outside the verified release state.
