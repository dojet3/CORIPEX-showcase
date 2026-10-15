from enum import StrEnum


class DeletionStatus(StrEnum):
    ACTIVE = "active"
    DELETION_PENDING = "deletion_pending"
    SOFT_DELETED = "soft_deleted"
    PURGE_PENDING = "purge_pending"
    PURGED = "purged"
