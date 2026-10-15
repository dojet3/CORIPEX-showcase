# Capabilities and Evidence — Historical Snapshot

**Reviewed as of:** October 15, 2026, against a private repository snapshot. The internal review manifest retains the exact provenance. This page is an evidence classification, not a certification or production release note.

| Area | Implementation status | What the evidence does and does not establish |
| --- | --- | --- |
| Modular backend, persistence and transactions | Merged | ADRs and integration tests establish the reviewed architectural approach, not zero security defects |
| Private workspaces and authorization | Merged | Application authorization plus PostgreSQL RLS controls; no broad independent security certification claimed |
| Document intake and provenance | Merged | Reviewed local ingestion and processing with explicit rejection/failure rules |
| Search, tags, source versions and Trash/Restore | Merged within **WP3-DEMO** | Reconstructed/technically closed narrower scope; purge, Move and sensitive administration excluded |
| User experience and product polish | Owner-accepted local implementation | Functional navigation, Search/Ask and Settings improved; full PDF preview not delivered |
| Google/Account Security | Engineering integrated | Additional owner acceptance gates remain open |
| Current-Workspace governed RAG and bounded follow-up | WP4 A+B1 merged | Synthetic-provider integration evidence; **live external model/embedding and bilingual quality acceptance still pending** |
| Research Agent and Workspace Overview | Planned / deferred | Not delivered as part of WP4 A+B1 |
| Cloud hosting and public product release | Unmerged planning work | No confirmed live cloud deployment, restore verification, or Academic release acceptance |

## Why the distinctions matter

- **Merged** means code exists in a reviewed repository baseline.
- **Tested** refers to the exact suite, environment and commit that produced results.
- **Owner-accepted** refers to the relevant agreed acceptance boundary.
- **Live accepted** requires real external provider/cloud evidence, not synthetic tests or infrastructure planning.

The showcase is deliberately candid about remaining work. The public case studies demonstrate engineering decisions without overstating the product's deployment state.

## Quantitative quality evidence

See the [dated CI and repository inventory](quality-metrics.md) for exact test counts, job outcomes, source-file counts, definitions and limitations. These counts measure CI validation, **not** product release acceptance.
