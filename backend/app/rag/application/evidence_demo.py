"""PUBLIC TEACHING EXAMPLE — adapted from a reviewed CORIPEX RAG context boundary.

It is NOT an authorization check, prompt-injection defense, or a complete RAG pipeline.
Actual CORIPEX obtains eligible sources from independently reauthorized storage first.
"""

import json
from dataclasses import dataclass
from uuid import UUID


@dataclass(frozen=True, slots=True)
class EligiblePassage:
    workspace_id: UUID
    chunk_id: UUID
    content: str


def serialize_evidence(passages: tuple[EligiblePassage, ...], workspace_id: UUID) -> str:
    """Bound and serialize pre-authorized evidence as data, not as instructions."""
    chosen: list[dict[str, str]] = []
    seen: set[UUID] = set()
    for passage in passages:
        if passage.workspace_id != workspace_id:
            raise ValueError("source_ineligible")
        if passage.chunk_id in seen or not passage.content.strip():
            continue
        if len(passage.content.encode("utf-8")) > 3600:
            continue
        seen.add(passage.chunk_id)
        proposed = chosen + [{"slot": f"E{len(chosen) + 1}", "text": passage.content}]
        framed = json.dumps({"untrusted_evidence": proposed}, ensure_ascii=False, separators=(",", ":"))
        if len(framed.encode("utf-8")) > 12000:
            continue
        chosen = proposed
        if len(chosen) == 6:
            break
    return json.dumps({"untrusted_evidence": chosen}, ensure_ascii=False, separators=(",", ":"))
