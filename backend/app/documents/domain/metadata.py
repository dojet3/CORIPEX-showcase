from typing import TypedDict


class DocumentMetadataChanges(TypedDict, total=False):
    title: str
    author_text: str | None
    publication_year: int | None
