# 日本の農泊

農泊を身近に感じ、自分の希望に合った農家や宿泊施設を探すための研究提案デモサイトです。日本語と英語に対応しています。

## 主な機能

- 滞在期間、アクセス、7つのテーマ、交流の程度から農泊先を検索
- 架空のサンプル施設12件を掲載（温泉を楽しめる施設6件）
- 施設詳細、日程・人数選択、料金計算、予約内容の確認
- 予約者の年代・国籍、同行者の続柄の任意入力
- 食事や交流の希望に基づく相性診断、農家登録、農産物購入のデモ

**実際の予約・注文・決済は行われません。** 施設・料金はサンプルです。入力情報はサーバーへ保存・送信されません。相性診断はデモ用の仕組みで、生成AIには接続していません。写真はAI生成のイメージです。画像の制作指示は `IMAGE_PROMPTS.md` に記載しています。

## ファイル構成

`public/` に公開するHTML・CSS・JavaScriptと画像をまとめています。ビルドを必要としない静的サイトです。

## Cloudflare Pagesで公開

GitHubリポジトリをCloudflare Pagesに接続し、次の設定を使用してください。

| 項目 | 設定 |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `public` |

## GitHub Pagesで公開

リポジトリの **Settings → Pages → Build and deployment → Source** で **GitHub Actions** を選択してください。`main` へのpush、またはActionsからの手動実行で、付属の `.github/workflows/pages.yml` が `public/` を公開します。

## ローカルで確認

任意の静的Webサーバーで `public/` を配信してください。例：リポジトリのルートで `python3 -m http.server 8000 --directory public` を実行し、ブラウザで `http://localhost:8000` を開きます。
