# Research and AI System — Public Overview

**Source:** Public derivative of the private AI System Design (Document 09), AI Capability Roadmap (Document 03), Sprint 006 and the merged Sprint 007 WP4 A+B1 handoff.

## Evidence-oriented pipeline

```mermaid
flowchart LR
    Files[Eligible documents] --> Intake[Quarantine / validation / parsing]
    Intake --> Chunks[Provenance-aware chunks]
    Chunks --> Index[Lexical and derived vector retrieval]
    Question[Research question] --> Scope[Authorized current-Workspace scope]
    Scope --> Index
    Index --> Evidence[Eligible source passages]
    Evidence --> Context[Bounded evidence context]
    Context --> Generator[Governed generation boundary]
    Generator --> Answer[Persisted answer with citations]
    Answer --> Recheck[Source eligibility re-check]
```

A generated response is not trusted solely because it includes a citation. Source IDs, version identities and authorized eligibility remain server-side concerns. External model use is subject to the applicable profile, classification, consent and accounting gates.

## Implemented boundary

The research architecture includes reviewed document processing, hybrid retrieval, persisted source-backed answers, and bounded current-Workspace conversation follow-up. The merged tests used synthetic provider transports; actual live model/embedding quality and mandatory Hebrew/English evaluation remain separate acceptance work.

## Deferred or unaccepted capability areas

Research Agent, Workspace Overview, wider document/multi-Workspace generation scope and the broader evaluation/mode work were outside the merged WP4 A+B1 scope. Planned multi-agent and Knowledge Graph systems are not implemented features in this snapshot.

This page intentionally omits exact provider-policy settings, internal prompts, routing rules, rate limits and private evaluation fixtures.
