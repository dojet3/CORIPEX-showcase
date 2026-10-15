from dataclasses import dataclass
from typing import Literal


@dataclass(frozen=True, slots=True)
class UserPreferences:
    theme: Literal["system", "light", "dark"] = "system"
    document_view: Literal["list", "grid"] = "list"
    page_size: Literal[10, 25, 50] = 25
    getting_started_dismissed: bool = False
    row_version: int = 0

    @property
    def etag(self) -> str:
        return f'"preferences-{self.row_version}"'
