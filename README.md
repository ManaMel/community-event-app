# 📅 イベント一覧アプリ

地域コミュニティイベントを「探す・お気に入り登録する・参加する」ことができるシンプルなSPA（Single Page Application）です。
Reactを用いてフロントエンドのみで構築しています。

---

## 🚀 デモ概要

* イベント一覧表示
* カテゴリー絞り込み
* お気に入り登録
* 詳細ページ表示
* 参加申し込み（アラート）

---

## 🛠 使用技術

### フロントエンド

* React (Vite)
* React Router DOM
* Tailwind CSS

### 開発環境

* Node.js
* npm

---

## 📦 セットアップ手順

```bash
# リポジトリをクローン
git clone https://github.com/ManaMel/community-event-app.git

# ディレクトリに移動
cd your-repo-name

# パッケージインストール
npm install

# 開発サーバー起動
npm run dev
```

ブラウザで以下にアクセス👇

```
http://localhost:5173
```

---

## 🧩 実装機能

### ① イベント一覧表示

* ダミーデータ（JSON）を元に一覧表示
* カードUIで視認性を向上

---

### ② カテゴリー絞り込み

* 「祭り」「スポーツ」などでフィルタリング
* `useState` と `filter` を使用

---

### ③ お気に入り機能

* イベントごとに登録 / 解除
* お気に入りのみ表示可能
* ID配列で状態管理

---

### ④ 詳細ページ

* React Routerを使用した画面遷移
* URL：`/events/:id`

---

### ⑤ 参加申し込み

* ボタン押下でアラート表示
* `onClick`イベントの基本実装

---

### ⑥ UI / デザイン

* Tailwind CSSでモダンUI構築
* カードデザイン（影・ホバー）
* レスポンシブ対応

---

## 🗂 ディレクトリ構成（抜粋）

```
src/
├── components/
│   ├── EventList.jsx
│   └── EventDetail.jsx
├── data/
│   └── events.js
├── App.jsx
└── main.jsx
```

---

## 🔄 動作確認方法

1. 一覧ページが表示されることを確認
2. カテゴリボタンで絞り込みできるか確認
3. 「お気に入り」登録・解除ができるか確認
4. 「お気に入り」タブで表示切替確認
5. イベントクリックで詳細ページに遷移するか確認
6. 「参加申し込み」ボタンでアラートが出るか確認

---

## 💡 今後の改善案

* Rails APIとの連携（バックエンド化）
* お気に入りの永続化（LocalStorage / DB）
* ログイン機能の追加
* イベント作成機能
* UIのさらなる改善（アイコン・アニメーション）

---

## 🙌 学習ポイント

* Reactの基本構成（コンポーネント設計）
* useStateによる状態管理
* React RouterによるSPA構築
* 配列操作（map / filter）
* Tailwind CSSによるUI設計

---

## 📄 ライセンス

MIT License
