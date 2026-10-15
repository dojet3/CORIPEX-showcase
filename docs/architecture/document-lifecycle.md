# Secure Document Processing — Conceptual Lifecycle

```mermaid
flowchart TB
   Upload["User uploads file"] --> Quarantine["Quarantined source"]
   Quarantine --> Scan{"Malware and policy gates"}
   Scan -- "rejected / unavailable" --> Block["Blocked; no approved document processing"]
   Scan -- "approved" --> Isolate["Isolated parsing and validation"]
   Isolate --> Normalize["Normalized blocks and metadata"]
   Normalize --> Chunk["Versioned chunks with source provenance"]
   Chunk --> Lexical["Lexical retrieval readiness"]
   Chunk --> Consent{"Separately governed embedding eligibility"}
   Consent -- "enabled and approved" --> Vector["Derived vector indexing"]
   Consent -- "not approved" --> Lexical
   Lexical --> Search["Search eligibility checked at use time"]
   Vector --> Search
```

This is a concept illustration. It does **not** reveal the scanner's exact filters, parser confinement configuration, version activation SQL, security-role implementation or cloud operation. Not every file reaches the approved path. See [the provenance case study](../case-studies/provenance-and-grounded-rag.md).
