# Quality evidence

Includes **new** self-contained tests for educational adaptations. Actual private PostgreSQL/RLS security fixtures and operational evidence remain private.


> This is a curated engineering-tour directory, not a runnable checkout or a complete mirror.

Run the **sample-only** tests from the repository root after installing `requirements-demo.txt`: `python -m pytest tests/test_public_samples.py tests/test_api_public_sample.py -q`.

The [showcase CI](../.github/workflows/showcase-checks.yml) checks only these Python examples and the [Markdown validator](../scripts/validate_markdown.py); it does not validate the private backend or run a standalone TypeScript suite.
