"""Check local Markdown links and Mermaid fence pairs in the public showcase.

This offline script does not render Mermaid or inspect the private CORIPEX product.
"""

from pathlib import Path
import re
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
FENCE = chr(96) * 3
LINK = re.compile(r'!?\[[^\]\n]*\]\((<[^>]+>|[^\s)]+)(?:\s+"[^"]+")?\)')
EXTERNAL = {"http", "https", "mailto"}


def check() -> None:
    links = 0
    diagrams = 0
    errors: list[str] = []
    for path in sorted(ROOT.rglob("*.md")):
        if any(part.startswith(".") for part in path.relative_to(ROOT).parts):
            continue
        inside = False
        for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            stripped = line.strip()
            if stripped.startswith(FENCE):
                if not inside and stripped == FENCE + "mermaid":
                    diagrams += 1
                inside = not inside
                continue
            if inside:
                continue
            for match in LINK.finditer(line):
                raw = match.group(1).strip("<>")
                links += 1
                parsed = urlsplit(raw)
                if parsed.scheme in EXTERNAL or raw.startswith(("#", "//")):
                    continue
                if parsed.scheme:
                    errors.append(f"{path.relative_to(ROOT)}:{number}: unknown link scheme")
                    continue
                destination = unquote(parsed.path)
                if not destination:
                    continue
                resolved = (path.parent / destination).resolve()
                if not resolved.is_relative_to(ROOT) or not resolved.exists():
                    errors.append(f"{path.relative_to(ROOT)}:{number}: invalid local link: {destination}")
        if inside:
            errors.append(f"{path.relative_to(ROOT)}: unclosed code fence")
    if errors:
        raise SystemExit("\n".join(errors))
    print(f"Validated {links} Markdown links and {diagrams} Mermaid blocks.")


if __name__ == "__main__":
    check()
