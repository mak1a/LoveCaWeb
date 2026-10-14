# LoveCaWeb

OpenSiv3D Web版のビルド済み実行ファイルを公開するリポジトリです。

## GitHub Pagesへの配信

`index.data` は約176MBのGit LFSファイルです。ブランチから直接Pagesへ配信すると実体ではなく134バイトの参照ファイルが公開され、シェーダーや画像を読み込めずタイトル画面が表示されません。

1. **Settings → Pages → Build and deployment → Source** を **GitHub Actions** に設定します。
2. `main` に変更をpushするか、**Actions → Deploy LoveCaWeb to GitHub Pages → Run workflow** を実行します。
3. ワークフローがGit LFSの実体を取得し、`build-manifest.json` のSHA-256と照合してから実行用ファイルだけを配信します。

公開URL: <https://mak1a.github.io/LoveCaWeb/>

## ビルド更新

`LoveLiveCardWeb/build-pages.ps1` でビルドした `_site` のファイルを、このリポジトリのルートへ一式コピーしてコミット・pushします。`index.data` を含むバイナリーと `index.js`、`index.html`、`build-manifest.json` は同じビルドのものを使ってください。`.github`、`ci`、`.gitattributes` は保持します。

`.gitattributes` は実行用ファイルの改行変換を無効にし、WindowsとGitHub Actionsでハッシュを一致させます。

ローカルで配信ファイルを検証する場合はPython 3.11以降で実行します。

```powershell
python ci/stage-site.py
python -m http.server 8080 --directory _site
```

検証後の `_site` はGitには含めません。再検証するときは前回の `_site` を退避または削除してください。
