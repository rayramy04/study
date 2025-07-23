# コマンドライン基礎 - 最初に覚える5つのコマンド

## はじめに
コマンドラインとは、キーボードで文字を入力してコンピュータを操作する方法です。
黒い画面に白い文字が表示される、あの画面のことです。

## ターミナルの開き方

### Mac
1. キーボードで **Command + Space** を同時に押す
2. 「Terminal」または「ターミナル」と入力
3. Enterキーを押す

### Windows
1. キーボードで **Windowsキー + R** を同時に押す
2. 「cmd」と入力
3. Enterキーを押す

開くと、こんな感じの画面が出てきます：
```
username@computer:~$
```
この `$` の後ろに、コマンドを入力していきます。

## 必須コマンド5つ - これだけ覚えればOK

### 1. pwd - 現在地を確認する
**意味**: Print Working Directory（今いる場所を表示）

**使い方**:
```bash
$ pwd
```
Enterキーを押すと...
```bash
/Users/username/Desktop
```
このように、今あなたがいるフォルダの場所（パス）が表示されます。

**なぜ必要？**
- 迷子にならないため
- 今どこで作業しているか確認するため

### 2. ls - ファイルとフォルダを見る
**意味**: List（一覧表示）

**使い方**:
```bash
$ ls
```
Enterキーを押すと...
```bash
Documents  Downloads  Pictures  report.txt
```
今いるフォルダの中身が表示されます。

**便利な使い方**:
```bash
$ ls -l    # 詳しい情報も見る（サイズ、作成日時など）
```

**なぜ必要？**
- どんなファイルがあるか確認するため
- 次に開きたいフォルダを探すため

### 3. cd - フォルダを移動する
**意味**: Change Directory（ディレクトリを変更）

**基本的な使い方**:
```bash
$ cd Documents    # Documentsフォルダに入る
```

**特別な使い方**:
```bash
$ cd ..          # 一つ上の階層に戻る（親フォルダへ）
$ cd ~           # ホーム（最初の場所）に戻る
```

**実際の流れ**:
```bash
$ pwd                    # 今どこ？
/Users/username
$ cd Desktop            # デスクトップに移動
$ pwd                    # 確認
/Users/username/Desktop
$ cd ..                 # 一つ戻る
$ pwd                    # 確認
/Users/username
```

**なぜ必要？**
- 作業したいフォルダに移動するため
- ファイルを整理整頓するため

### 4. mkdir - 新しいフォルダを作る
**意味**: Make Directory（ディレクトリを作成）

**使い方**:
```bash
$ mkdir my_project    # my_projectという名前のフォルダを作成
```

**実際の流れ**:
```bash
$ ls                  # 今何がある？
Documents  Downloads
$ mkdir my_project    # 新しいフォルダを作る
$ ls                  # 確認
Documents  Downloads  my_project
$ cd my_project       # 作ったフォルダに入る
```

**スペースを含む名前の場合**:
```bash
$ mkdir "My Project"    # ダブルクォートで囲む
```

**なぜ必要？**
- プロジェクトごとにフォルダを分けるため
- ファイルを整理するため

### 5. touch - 新しいファイルを作る
**意味**: ファイルに「触る」（作成する）

**使い方**:
```bash
$ touch index.html    # index.htmlという空のファイルを作成
```

**複数ファイルを一度に作る**:
```bash
$ touch style.css script.js README.md
```

**実際の流れ**:
```bash
$ ls                    # 今は空
$ touch index.html      # ファイルを作る
$ ls                    # 確認
index.html
$ touch style.css       # もう一つ作る
$ ls                    # 確認
index.html  style.css
```

**なぜ必要？**
- プログラムファイルを作るため
- メモファイルを作るため

## よく使う操作パターン

### パターン1: 新しいプロジェクトを始める
```bash
$ cd Desktop              # デスクトップに移動
$ mkdir my_website        # プロジェクトフォルダを作る
$ cd my_website          # そのフォルダに入る
$ touch index.html        # HTMLファイルを作る
$ ls                     # 確認
index.html
```

### パターン2: 迷子になったとき
```bash
$ pwd                    # 今どこにいるか確認
$ cd ~                   # ホームに戻る
$ cd Desktop             # デスクトップに移動
```

## 便利な機能

### 1. Tabキーで自動補完
長い名前を全部入力しなくてOK！

例：`Documents`と入力したい場合
```bash
$ cd Doc[Tabキーを押す]
```
自動的に `cd Documents` になります。

### 2. ↑キーで履歴
前に使ったコマンドをもう一度使いたいとき、**↑キー**を押すと前のコマンドが出てきます。

### 3. Ctrl + C で中止
間違えたり、止めたいときは **Ctrl + C** を押します。

## 練習してみよう

### ステップ1: 基本操作
1. ターミナルを開く
2. `pwd` で現在地を確認
3. `ls` で中身を見る

### ステップ2: フォルダ作成と移動
1. `mkdir practice` でフォルダを作る
2. `ls` で確認
3. `cd practice` で移動
4. `pwd` で現在地を確認

### ステップ3: ファイル作成
1. `touch test.txt` でファイルを作る
2. `ls` で確認
3. `touch file1.txt file2.txt` で複数作る
4. `ls` で確認

### ステップ4: 戻る練習
1. `cd ..` で一つ上に戻る
2. `pwd` で確認
3. `cd ~` でホームに戻る

## 覚えるコツ
- **pwd** = 「今どこ？」と聞く
- **ls** = 「何がある？」と聞く
- **cd** = 「移動する」
- **mkdir** = 「フォルダ作る」
- **touch** = 「ファイル作る」

この5つのコマンドだけで、基本的なファイル操作はすべてできます！
毎日少しずつ使って、手に覚えさせましょう。