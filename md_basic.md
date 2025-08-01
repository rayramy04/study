# Markdown（マークダウン）基礎ガイド

## Markdownとは？

Markdownは、**プレーンテキストで文書を装飾できる記法**です。
- 2004年に作られた軽量マークアップ言語
- `.md` または `.markdown` という拡張子を使う
- HTMLに変換されることを前提に設計されている

## なぜMarkdownが必要なの？

### 1. **読みやすい・書きやすい**
```markdown
# 見出し
**太字**や*斜体*が簡単に書ける
```
↑ テキストエディタでも何を表現したいか分かる

### 2. **どこでも使える**
- GitHub、GitLab（プログラマー必須）
- Notion、Slack（ビジネスツール）
- ブログ、ドキュメント作成
- テキストファイルなので軽い

### 3. **バージョン管理しやすい**
- Gitで差分が見やすい
- Word等と違い、テキストベースで管理可能

## READMEファイルについて

**README.md** は、プロジェクトの「取扱説明書」です。

### なぜREADMEが重要？
- GitHubでリポジトリを開くと**最初に表示される**
- プロジェクトの第一印象を決める
- 使い方が分からないと誰も使ってくれない

### READMEに書くべきこと
```markdown
# プロジェクト名
簡単な説明

## 機能
- 機能1
- 機能2

## インストール方法
```bash
npm install
```

## 使い方
```python
import myproject
myproject.run()
```

## ライセンス
MIT License
```

---

## Markdown 最小限の記法

### 見出し
```
# 大見出し
## 中見出し
### 小見出し
```

### 文字装飾
```
**太字**
*斜体*
`コード`
~~取り消し線~~
```

### リスト
```
- 項目1
- 項目2

1. 番号1
2. 番号2
```

### リンク・画像
```
[リンク文字](URL)
![画像説明](画像URL)
```

### コード
````
`一行コード`

```python
# 複数行コード
print("Hello")
```
````

### 引用
```
> 引用文
```

### 表
```
| 項目 | 説明 |
|------|------|
| Git  | バージョン管理 |
| MD   | マークダウン |
```

### 水平線
```
---
```

## よく使うREADMEテンプレート

```markdown
# プロジェクト名

一行でプロジェクトを説明

## 必要なもの
- Python 3.8以上
- pip

## セットアップ
```bash
git clone https://github.com/username/project.git
cd project
pip install -r requirements.txt
```

## 実行方法
```bash
python main.py
```

## 作者
あなたの名前

## ライセンス
このプロジェクトはMITライセンスです。
```

## 練習しよう

1. このフォルダに `README.md` を作成
2. プロジェクトの説明を書く
3. 学習した内容をリストにする
4. 参考リンクを追加する

Markdownを使えるようになると、ドキュメント作成が楽しくなります！