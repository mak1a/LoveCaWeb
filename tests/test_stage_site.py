import hashlib
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('stage_site', ROOT / 'ci/stage-site.py')
site = importlib.util.module_from_spec(spec)
spec.loader.exec_module(site)


class StageTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.source = Path(self.temp.name) / 'source'
        self.source.mkdir()
        self.output = Path(self.temp.name) / 'site'
        self.manifest = {}
        for name in site.FILES:
            data = name.encode()
            (self.source / name).write_bytes(data)
            self.manifest[name] = hashlib.sha256(data).hexdigest()
        self.write_manifest()

    def write_manifest(self):
        (self.source / 'build-manifest.json').write_text(json.dumps(self.manifest))

    def test_stages_only_runtime(self):
        (self.source / 'private.txt').write_text('must not be published')
        site.stage(self.source, self.output)
        self.assertEqual({p.name for p in self.output.iterdir()},
                         site.FILES | {'.nojekyll', 'build-manifest.json'})

    def test_rejects_lfs_pointer_even_if_hash_matches(self):
        data = site.LFS_POINTER + b'\noid sha256:0000\nsize 176148049\n'
        (self.source / 'index.data').write_bytes(data)
        self.manifest['index.data'] = hashlib.sha256(data).hexdigest()
        self.write_manifest()
        with self.assertRaisesRegex(ValueError, 'Git LFS pointer'):
            site.stage(self.source, self.output)
        self.assertFalse(self.output.exists())

    def test_rejects_incomplete_or_mixed_build(self):
        for change in ('missing', 'tampered'):
            with self.subTest(change=change):
                path = self.source / 'index.wasm'
                if change == 'missing':
                    path.unlink()
                else:
                    path.write_bytes(b'another build')
                with self.assertRaises(ValueError):
                    site.stage(self.source, self.output)
                self.assertFalse(self.output.exists())

    def test_preserves_existing_output(self):
        self.output.mkdir()
        sentinel = self.output / 'keep.txt'
        sentinel.write_text('keep')
        with self.assertRaisesRegex(ValueError, 'already exist'):
            site.stage(self.source, self.output)
        self.assertEqual(sentinel.read_text(), 'keep')


if __name__ == '__main__':
    unittest.main()
