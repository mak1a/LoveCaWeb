"""Verify the downloaded runtime before exposing it through GitHub Pages."""
import argparse
import hashlib
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
FILES = {
    'index.html', 'index.js', 'index.wasm', 'index.wasm.gzip', 'index.data',
    'Inflate.service.js', 'Inflate.wasm', 'favicon.ico',
}
LFS_POINTER = b'version https://git-lfs.github.com/spec/v1'


def stage(source, destination):
    if destination.exists():
        raise ValueError('The staging directory must not already exist.')
    manifest = json.loads((source / 'build-manifest.json').read_text(encoding='utf-8'))
    if set(manifest) != FILES:
        raise ValueError('Unexpected runtime manifest.')
    for name in sorted(FILES):
        path = source / name
        if not path.is_file() or path.is_symlink():
            raise ValueError(f'Missing regular runtime file: {name}')
        with path.open('rb') as stream:
            if stream.read(len(LFS_POINTER)).startswith(LFS_POINTER):
                raise ValueError(f'{name} is a Git LFS pointer. Checkout must use lfs: true.')
            stream.seek(0)
            digest = hashlib.file_digest(stream, 'sha256').hexdigest()
        if digest != manifest[name]:
            raise ValueError(f'Runtime checksum mismatch: {name}. Copy the complete build output together.')
    destination.mkdir(parents=True)
    for name in sorted(FILES | {'build-manifest.json'}):
        shutil.copyfile(source / name, destination / name)
    (destination / '.nojekyll').touch()
    print(f'Verified and staged {len(FILES)} runtime files: {destination}')


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--source', type=Path, default=ROOT)
    parser.add_argument('--output', type=Path, default=ROOT / '_site')
    args = parser.parse_args()
    stage(args.source, args.output)


if __name__ == '__main__':
    main()
