# 英単語クイズカード

日本語の意味と音声だけを見て、英単語とカタカナ読みを思い出すリスニング対応のクイズカードアプリです。

## 使い方

```bash
cd /Users/ruka/Documents/english-vocab-quiz
python3 -m http.server 8080
```

ブラウザで `http://localhost:8080` を開いてください。

## スマホで使う（GitHub + Vercel）

このアプリはビルド不要の静的サイトなので、GitHub に push するだけで Vercel から公開できます。

### 1. GitHub にリポジトリを作成

GitHub で新しいリポジトリ（例: `english-vocab-quiz`）を作成します。

### 2. 初回 push

```bash
cd /Users/ruka/Documents/english-vocab-quiz
git remote add origin https://github.com/<あなたのユーザー名>/english-vocab-quiz.git
git push -u origin main
```

### 3. Vercel に接続

1. [vercel.com](https://vercel.com) にログイン
2. **Add New → Project**
3. 上記 GitHub リポジトリを Import
4. 設定はそのままで OK（Framework: Other / Build Command: なし / Output: ルート）
5. **Deploy**

以降は `main` に push するたびに自動で再デプロイされます。スマホのブラウザで表示された URL をホーム画面に追加すると、アプリのように使えます。

### CLI から直接デプロイする場合

```bash
vercel login
cd /Users/ruka/Documents/english-vocab-quiz
vercel --prod
```

## 機能

- 初期表示は「日本語の意味」と「音声再生ボタン」のみ
- 「答えを見る」またはカードタップで英単語・カタカナを表示
- Web Speech API による英語発音
- 「前へ」「次へ」で 110 語を切り替え
- 答え表示時に「使い方パターン・会話例」も同時展開
- **検索・ジャンプ**: 英語・日本語・#番号で検索し、該当単語へ移動（`/` で検索フォーカス）
- **出題対象フィルター**: すべて / 未学習 / 苦手のみ / 覚えた除外 / ★お気に入り
- **出題モード**: 意味→英語 / リスニング / 英語→意味 / 会話例
- カテゴリフィルター（すべて / AI / 日常 / 授業）
- シャッフル切り替え（現在のカテゴリ内でランダム順）
- 学習履歴の保存（localStorage に自動保存・再開）
- **バックアップ / 復元**: 学習履歴を JSON でエクスポート・インポート
- 復習リスト（「復習リストへ」で追加、「覚えていた」で解除）
- **お気に入り**: ☆ボタンで登録、出題対象フィルターで絞り込み
- **コピー**: 答え表示後、全文または各パターンをクリップボードへコピー
- **学習統計**: 今日の学習数・連続日数（🔥）・カテゴリ別「覚えた」進捗グラフ
- 自動で次へ（評価後に次のカードへ自動移動）
- **スワイプ**: スマホでカードを左右スワイプして前後移動
- キーボードショートカット
  - `←` `→` 前後の単語
  - `/` 検索フォーカス
  - `Space` 答えを見る
  - `S` 音声再生
  - `1` / `Y` 覚えていた
  - `2` / `N` 復習リストへ
