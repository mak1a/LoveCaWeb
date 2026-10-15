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

## 2026-10-15の更新

- CPU対戦で、自分の選択にルールベースの候補手を表示します。
- 回転表示に元のテクスチャを使用し、描画時の画像再読み込みと回転画像の永久キャッシュを廃止しました。ロード済みカードアセットは64件、デッキ編集のプレビューは32件を上限に保持します。
- エールの公開カードを横向きに重ね、上辺のマークが見える間隔で表示します。公開中はコストラベルでマークを隠さないようにしました。ネイティブ版と共通の描画処理です。

修正済みビルドでは、2対戦でメンバー登場、エール公開、次ターンへの進行を確認し、メモリ不足による停止は再発していません。配信ファイル一式のハッシュと配信検証テストも確認しています。

## 2026-10-16の認証対応

オンライン対戦にGoogleログインと、Cloudflare Workersの許可リストを使うPhoton Custom Authenticationを追加しました。ログインはオンライン対戦だけで必要です。許可アカウントとPhoton用秘密キーは配信ファイルに含めません。

ローカル版で、許可アカウントによるルーム作成と許可外アカウントの接続拒否を確認済みです。公開後にPages側のログインを確認し、最後にPhoton管理画面で匿名接続を無効化します。この設定を無効にするまでは旧クライアントからの未認証接続が可能です。同じApp IDを使う認証未対応のネイティブ版にも影響します。

許可リストは元の開発環境の `auth-worker/secrets.local.json` とCloudflare Workers Secretsで管理します。Google Client Secretは使いません。デッキ編集・ソロ・CPU対戦にログインは不要です。
