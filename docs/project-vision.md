# CORIPEX — Vision and Project Charter (Public Edition)

**Source:** Adapted from the private Document 01, *Vision & Project Charter* (approved July 27, 2026). This is a public edition, not the complete internal charter.

## Mission

Build an AI-native Research Intelligence Platform that turns unstructured knowledge into **searchable, explainable and actionable research**. The long-term direction is a workspace-centered environment that connects documents, retrieval, reasoning and independently verifiable sources.

## The problem

General-purpose assistants are not sufficient on their own for private, domain-specific research. Research material is dispersed across files and collections; generated conclusions may be difficult to trace to precise sources. Private context introduces authorization, provenance, consent and lifecycle challenges that a simple chat UI does not solve.

## Engineering approach

1. **Small implementation, large architecture.** Start with a narrowly valuable workflow while preserving clear extension boundaries.
2. **Retrieval before generation.** Ground research in eligible sources rather than treating a language model as the source of truth.
3. **Security as an invariant.** Enforce authorization in both application services and the authoritative data store.
4. **Local-first and cost-conscious.** Do not add cloud or distribution complexity until it is justified by measured needs and approved release scope.
5. **Learning through review.** Treat tests, ADRs, failure analysis and independently reviewed changes as first-class engineering outputs.

## Product evolution

- **Academic Edition:** the local research product with secure source intake, private workspaces, retrieval, citations and traceable answer history. Delivery is advanced but acceptance is not yet complete.
- **Enterprise Edition:** planned organizational collaboration, advanced policy and administration.
- **Startup Edition:** planned commercial platform capabilities and scaling.

These are roadmap maturity levels, **not three delivered products**. See the [roadmap](product-roadmap.md) and [evidence ledger](capabilities-and-evidence.md).
