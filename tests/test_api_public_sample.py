"""Independent tests of public-only illustrative FastAPI handler."""
import importlib.util
from pathlib import Path
from uuid import uuid4


def _route():
    path = Path(__file__).resolve().parents[1] / 'backend/app/api/public_route_demo.py'
    spec = importlib.util.spec_from_file_location(f'public_route_{uuid4().hex}', path)
    assert spec and spec.loader
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def test_public_api_model_rejects_extra_input():
    from pydantic import ValidationError
    module = _route()
    try:
        module.CreateNote(title='Hello', unexpected=True)
    except ValidationError:
        pass
    else:
        raise AssertionError('The strict request model must reject unknown keys')


def test_public_route_returns_typed_response():
    module = _route()
    result = module.acknowledge_note(module.CreateNote(title='  Hello  '))
    assert isinstance(result, module.NoteAcknowledgement)
    assert result.normalized_title == 'Hello'


def test_public_api_model_rejects_whitespace_only_title():
    from pydantic import ValidationError
    module = _route()
    try:
        module.CreateNote(title='   ')
    except ValidationError:
        pass
    else:
        raise AssertionError('Whitespace-only titles must be rejected')
