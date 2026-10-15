# Engineering Quality Metrics — Evidence Snapshot

**Source:** private CORIPEX repository, `main` at `6ee93a24450ea5062086a5f3050fd374fa5822b7`.  
**Run:** GitHub Actions `CORIPEX Blocking CI`, run `38702176749`, 15 October 2026 (UTC), `push`, **completed / success**.  
**Evidence access:** private GitHub Actions job logs. This public document is a dated export of verified aggregate results, **not** an accessible public CI log, independent certification, or a continuously refreshed dashboard.

## Automated test outcomes from this run

| CI job | Framework / evidence | Observed result |
| --- | --- | --- |
| Blocking / Backend Quality | `pytest` backend unit command | **1,604 passed, 1 skipped**, 4 warnings; 160.90 seconds |
| Blocking / PostgreSQL Redis and Migration Security | `pytest` real database integration suite | **907 passed**; 918.33 seconds |
| Blocking / Frontend | Vitest (`npm test`) | **481 passed**, **63 test files passed** |
| Blocking / Trusted Launcher | Windows PowerShell and PowerShell 7 checks | **190 checks passed in each shell**; repeated in two shells, not 380 unique checks |

**Unambiguously additive test results:** 1,604 + 907 + 481 = **2,992 passing automated test cases**. The single skipped backend unit test is disclosed separately. Trusted Launcher contract checks are separate from the test-case total. The 63 frontend test files are not 63 extra tests.

### Blocking CI gate inventory

All **8 of 8 jobs** returned `success` in run `38702176749`:

1. Blocking / Backend Quality
2. Blocking / PostgreSQL Redis and Migration Security
3. Blocking / Frontend
4. Blocking / Secret Scan
5. Blocking / Trusted Launcher
6. Blocking / Dependency Security
7. Blocking / IaC Configuration Security
8. Blocking / Project Image Security

A passing job means the configured checks passed on that commit. It does not automatically mean production hardening, live provider readiness, or external security certification. No coverage percentage is reported here.

## Repository inventory at the same commit

GitHub's **recursive Git tree**, filtered to `blob` entries, contains **1,073 tracked files and 124 directory tree entries**. These numbers include documentation and evidence snapshots; they should not be presented as lines of application code.

| Source inventory | Tracked files | Counting rule |
| --- | ---: | --- |
| Backend Python implementation | **309** | `.py` in `backend/app/` excluding all paths under `backend/app/tests/`; includes Python package initializers |
| Frontend TypeScript implementation | **107** | `.ts` / `.tsx` under `frontend/src/`, excluding files ending `.test.ts`, `.test.tsx`, `.spec.ts`, `.spec.tsx` |
| Backend unit-test files | **94** | `test_*.py` under `backend/app/tests/` excluding `backend/app/tests/integration/` |
| Backend integration-test files | **61** | `test_*.py` under `backend/app/tests/integration/` |
| Frontend test files | **63** | Frontend `.test.ts(x)` or `.spec.ts(x)` tracked in `frontend/src/` |
| Entire tracked repository | **1,073** | Git tree blob count across all subdirectories |
| Git tree directories | **124** | Git tree entries of type `tree` |

The inventory counts **files present**, while the CI figures count **test cases executed**. A test file may contain multiple test cases. The inventory does not imply that every counted source file was exercised by that run.

## Methodology and reproducibility

- **CI test cases:** use the final test-run summaries in the three relevant job logs, not historical WP handoff counts or the number of test file names.
- **CI gates:** count distinct successful workflow jobs, not test cases or individual test steps.
- **Source files:** use the recursive Git tree at the immutable commit shown above and the documented path/extensions filters. Do not include virtual environment files or locally generated, untracked content.
- **Scope boundary:** the Git tree lists tracked files; it cannot directly establish total logical or physical lines of code. A LOC figure is **not published** until a source-only scanner is run against the full checked-out repository with a documented include/exclude policy.
- **Timing:** these are a historical snapshot, not automatically updated metrics and not the latest current result indefinitely. New merges require a fresh review and replacement snapshot.

## What these numbers cannot prove

Test counts are neither coverage percentages nor security guarantees. The Academic Edition's Google/account-security owner gates, real AI provider/bilingual quality acceptance, cloud deployment and release sign-off remained distinct from these CI tests at this snapshot. The showcase's small public teaching examples run independently and are not included in the private test count.

**Public disclosure note:** no raw workflow logs, private test fixtures, credentials, infrastructure files, or internal failure details are copied into this document.
