# Engineering Workflow — Evidence Before Acceptance

CORIPEX uses scoped work packages, human review, test evidence and explicit acceptance boundaries. The diagram describes the normal method, not an automated approval flow.

```mermaid
flowchart LR
    Authority["Approved requirements / ADRs"] --> WP["Bounded work package"]
    WP --> Implement["Implementation branch"]
    Implement --> Tests["Unit / integration / negative tests"]
    Tests --> Review["Independent review"]
    Review -- "Findings" --> Repair["Focused remediation"]
    Repair --> Tests
    Review -- "Review ready" --> PR["Human-reviewed PR"]
    PR --> Main["Merged implementation"]
    Main --> Owner["Owner / live-environment acceptance"]
    Owner --> Release["Release gates / decision"]
```

A passing workflow is **not** a declaration that cloud delivery, real AI costs or quality, or full Academic release is accepted. The [RLS case study](../case-studies/rls-planner-reconstruction.md) illustrates review-driven reconstruction.

For an immutable, commit-scoped quantitative example of this process, read the [engineering quality metrics](../quality-metrics.md).
