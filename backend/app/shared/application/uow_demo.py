"""PUBLIC TEACHING EXAMPLE — adapted from CORIPEX's UoW architecture, not production source.

No database access, authorization implementation, session configuration, or audit capability
is included. This example illustrates transaction ownership and atomicity only.
"""

from collections.abc import Callable
from dataclasses import dataclass
from typing import Protocol, Self


class Session(Protocol):
    async def begin(self) -> None: ...
    async def commit(self) -> None: ...
    async def rollback(self) -> None: ...
    async def close(self) -> None: ...


@dataclass
class UnitOfWork:
    """Toy transaction boundary. Real CORIPEX also configures trusted DB context."""

    make_session: Callable[[], Session]

    async def __aenter__(self) -> Self:
        self.session = self.make_session()
        try:
            await self.session.begin()
        except BaseException:
            await self.session.close()
            raise
        return self

    async def __aexit__(self, exc_type, exc, tb) -> None:
        try:
            if exc_type is not None:
                await self.session.rollback()
            else:
                try:
                    await self.session.commit()
                except BaseException:
                    await self.session.rollback()
                    raise
        finally:
            await self.session.close()


async def register_document(uow_factory: Callable[[], UnitOfWork], save) -> None:
    """The use case makes one atomic decision; repositories must not commit."""
    async with uow_factory():
        await save()
