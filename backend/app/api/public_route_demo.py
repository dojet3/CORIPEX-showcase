"""PUBLIC TEACHING EXAMPLE — not a production CORIPEX route.

The actual application has identity/session, authorization, and error response wiring
that is not included in this small API-boundary teaching example.
"""

from fastapi import APIRouter
from pydantic import BaseModel, ConfigDict, Field, field_validator

router = APIRouter(prefix="/demo", tags=["public-sample"])


class CreateNote(BaseModel):
    model_config = ConfigDict(extra="forbid", frozen=True)
    title: str = Field(min_length=1, max_length=120)

    @field_validator("title")
    @classmethod
    def reject_blank_title(cls, value: str) -> str:
        normalized = value.strip()
        if not normalized:
            raise ValueError("A title must contain visible characters.")
        return normalized


class NoteAcknowledgement(BaseModel):
    accepted: bool
    normalized_title: str


@router.post("/notes", response_model=NoteAcknowledgement)
def acknowledge_note(request: CreateNote) -> NoteAcknowledgement:
    return NoteAcknowledgement(accepted=True, normalized_title=request.title.strip())
