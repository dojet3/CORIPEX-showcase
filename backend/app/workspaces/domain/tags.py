import unicodedata
from dataclasses import dataclass
from uuid import UUID


@dataclass(frozen=True, slots=True)
class WorkspaceTag:
    id: UUID
    label: str
    match_key: str
    slot: int


class TagConflict(Exception):
    pass


def normalize_tag(label: str) -> tuple[str, str]:
    label = unicodedata.normalize("NFC", label.strip())
    if not 1 <= len(label) <= 64 or any(
        unicodedata.category(char).startswith("C") for char in label
    ):
        raise ValueError("A tag must contain 1 to 64 visible Unicode characters.")
    return label, unicodedata.normalize("NFC", label.casefold())
