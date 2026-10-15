# Source-Grounded Research — Conceptual Data Flow

```mermaid
flowchart TB
    Q["User question in Workspace"] --> Auth["Server-side scope and eligibility"]
    Auth --> Lex["Lexical retrieval"]
    Auth --> Sem["Governed vector retrieval · if available"]
    Lex --> Merge["Rank and deduplicate candidates"]
    Sem --> Merge
    Merge --> Recheck["Current PostgreSQL reauthorization and source freshness"]
    Recheck --> Bound["Bound context, preserve chunk/version identity"]
    Bound --> Consent["Provider, classification, consent and budget gates"]
    Consent --> Model["Generation transport · if approved"]
    Model --> Answer["Persisted answer and citation references"]
    Answer --> View["Read-time source eligibility / suppression"]
```

The diagrams separate **source eligibility** from **relevance**; vector hits are never an authorization authority. The [original rank-fusion function](../../backend/app/search/domain/models.py) provides one real algorithmic example. The [adapted context builder](../../backend/app/rag/application/evidence_demo.py) intentionally omits policy and authorization implementation.

Merged A+B1 integration and synthetic-provider tests do not constitute live-provider or Hebrew/English quality acceptance.
