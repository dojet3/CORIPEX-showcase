from pydantic import BaseModel, ConfigDict


class ApiRequestModel(BaseModel):
    model_config = ConfigDict(
        extra="forbid",
        frozen=True,
    )
