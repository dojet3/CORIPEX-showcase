from dataclasses import dataclass, field
from datetime import date
from typing import Literal
from uuid import UUID


@dataclass(frozen=True, slots=True)
class SearchFilters:
    title: str | None = None
    document_type: str | None = None
    version_id: UUID | None = None
    readiness: Literal["lexical_ready", "semantic_ready"] | None = None
    tag_terms: tuple[str, ...] = ()
    selected_versions: tuple[UUID, ...] | None = None
    author_terms: tuple[str, ...] = ()
    publication_years: tuple[int, ...] = ()
    uploaded_from: date | None = None
    uploaded_through: date | None = None


@dataclass(frozen=True, slots=True)
class SearchSource:
    chunk_id: UUID
    workspace_id: UUID
    document_id: UUID
    version_id: UUID
    generation_id: UUID
    title: str
    filename: str
    document_type: str
    version_number: int
    content: str = field(repr=False)
    page_start: int | None
    page_end: int | None
    section_path: tuple[str, ...]
    classification: str
    freshness: Literal["current", "older_version"] = "current"


@dataclass(frozen=True, slots=True)
class VectorIndex:
    id: UUID
    embedding_generation_id: UUID
    chunk_generation_id: UUID
    workspace_id: UUID
    version_id: UUID
    collection: str
    fingerprint: str
    active: bool


@dataclass(frozen=True, slots=True)
class RankedResult:
    source: SearchSource
    score: float
    methods: tuple[str, ...]


def reciprocal_rank_fusion(
    lexical: tuple[UUID, ...], semantic: tuple[UUID, ...]
) -> tuple[tuple[UUID, float, tuple[str, ...]], ...]:
    """RRF k=60, unique identities per channel, stable UUID tie-breaker."""
    scores: dict[UUID, float] = {}
    methods: dict[UUID, list[str]] = {}
    for name, channel in (("lexical", lexical), ("semantic", semantic)):
        for rank, identifier in enumerate(dict.fromkeys(channel), 1):
            scores[identifier] = scores.get(identifier, 0) + 1 / (60 + rank)
            methods.setdefault(identifier, []).append(name)
    return tuple(
        (key, scores[key], tuple(methods[key]))
        for key in sorted(scores, key=lambda key: (-scores[key], key.int))
    )
