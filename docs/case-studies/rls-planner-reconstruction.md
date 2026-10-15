# Case Study — Reconstructing PostgreSQL RLS After Query-Planner Failures

**Project period:** Sprint 007, WP-007-03 (September–October 2026)  
**Outcome:** Owner-approved **WP3-DEMO** scope, technically closed and merged; wider originally planned features deferred.

## The challenge

CORIPEX protects private workspace data with application authorization and PostgreSQL Row-Level Security (RLS). Sprint 007 expanded its document and Workspace lifecycle requirements. An initial cumulative security-policy design created too many interconnected protected-table relationships for the query planner to handle reliably under the test constraints.

The investigation was about **planner complexity and reliable operation**, not a demonstrated data breach.

## What the tests revealed

The internal engineering handoff documents a historical bisect sequence in which planner expansion became repeatable, later experiments timed out and policy recursion was observed. Those results were not treated as justification to disable RLS or elevate routine runtime privileges.

A later fixed, disposable PostgreSQL baseline measured 18 existing-table planner probes, repeated three times under bounded CPU/memory/time conditions, with no recursion or timeout. The team kept the old healthy evidence as a reference instead of silently relaxing thresholds.

The private report contains detailed SQL and catalog evidence. Those materials are **not reproduced here**.

## Engineering response

1. **Stop extending the rejected policy chain.** Record the failure boundaries and preserve the original branch as forensic evidence.
2. **Classify prior work:** identify narrowly reusable behavior, adaptation candidates and changes that must not be transferred.
3. **Reconstruct in slices:** metadata/tags, selected Search scope, soft delete/restore and version behavior were rebuilt against an accepted baseline.
4. **Re-run fixed gates:** planner, privilege, authorization, concurrency, migrations and frontend/application regressions after each relevant change.
5. **Close a bounded scope:** accept WP3-DEMO on its actual requirements while deferring more complex destructive/administrative features.

## Result and boundaries

The resulting implementation covers metadata correction, tags and filters, server-resolved Search scope, Workspace Trash/Restore, source eligibility, immutable version history and explicit activation. Exact citation identities and suppression of ineligible derived content were also integrated. The broader original requirements for physical purge, moves, personal export and restricted administration were **not** represented as completed work.

## Lessons

- Real-PostgreSQL tests expose planner/security-policy behavior that ORM-only or SQLite-based tests cannot reproduce.
- **A secure control that cannot execute reliably still needs redesign** — but removing defense-in-depth is not an acceptable shortcut.
- Preserve failed experiments and compare against a fixed healthy baseline.
- Publish the **accepted scope**, not the aspirational scope.

**Disclosure boundary:** This public case study omits the original detailed policy chain, privileged roles, executable SQL, failure-inducing queries, internal forensic paths and raw diagnostics. It does not describe a confirmed external exploit.
