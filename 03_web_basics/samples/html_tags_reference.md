# HTML基本タグ一覧 - 初心者向け

## 基本構造
```html
<!DOCTYPE html>          <!-- HTML5宣言 -->
<html lang="ja">         <!-- HTML文書の開始 -->
<head>                   <!-- ヘッダー情報（見えない部分） -->
    <meta charset="UTF-8">   <!-- 文字コード指定 -->
    <title>タイトル</title>    <!-- ブラウザのタブに表示 -->
</head>
<body>                   <!-- 本文（見える部分） -->
    <!-- ここに内容を書く -->
</body>
</html>
```

## よく使うタグ

### 文字関連
```html
<h1>大見出し</h1>              <!-- 一番大きい見出し -->
<h2>中見出し</h2>              <!-- 二番目の見出し -->
<p>段落の文章</p>              <!-- 段落 -->
<br>                          <!-- 改行 -->
<strong>重要な文字</strong>     <!-- 太字（重要） -->
<em>強調したい文字</em>         <!-- 斜体（強調） -->
```

### リンク
```html
<a href="URL">リンクテキスト</a>
<a href="https://google.com">Google</a>           <!-- 外部サイト -->
<a href="about.html">会社概要</a>                  <!-- 同じサイト内 -->
<a href="#top">ページトップへ</a>                   <!-- ページ内リンク -->
<a href="mailto:test@example.com">メール</a>      <!-- メールリンク -->
<a href="tel:09012345678">電話</a>               <!-- 電話リンク -->
<a href="URL" target="_blank">新しいタブで開く</a>  <!-- 新規タブ -->
```

### 画像
```html
<img src="画像のパス" alt="画像の説明">
<img src="cat.jpg" alt="猫の写真">                <!-- 同じフォルダ -->
<img src="images/dog.jpg" alt="犬の写真">         <!-- imagesフォルダ内 -->
<img src="../logo.png" alt="ロゴ">               <!-- 一つ上の階層 -->
<img src="cat.jpg" width="300" height="200">     <!-- サイズ指定 -->
```

### リスト
```html
<!-- 番号なしリスト -->
<ul>
    <li>項目1</li>
    <li>項目2</li>
    <li>項目3</li>
</ul>

<!-- 番号付きリスト -->
<ol>
    <li>手順1</li>
    <li>手順2</li>
    <li>手順3</li>
</ol>
```

### テーブル（表）
```html
<table>
    <tr>                    <!-- 行 -->
        <th>見出し1</th>    <!-- 見出しセル -->
        <th>見出し2</th>
    </tr>
    <tr>
        <td>データ1</td>    <!-- データセル -->
        <td>データ2</td>
    </tr>
</table>
```

### フォーム
```html
<form>
    <!-- テキスト入力 -->
    <input type="text" placeholder="名前">
    
    <!-- メール -->
    <input type="email" placeholder="メールアドレス">
    
    <!-- パスワード -->
    <input type="password" placeholder="パスワード">
    
    <!-- ラジオボタン（一つだけ選択） -->
    <input type="radio" name="gender" value="male">男性
    <input type="radio" name="gender" value="female">女性
    
    <!-- チェックボックス（複数選択可） -->
    <input type="checkbox" value="apple">りんご
    <input type="checkbox" value="orange">みかん
    
    <!-- テキストエリア（複数行） -->
    <textarea rows="5" cols="30"></textarea>
    
    <!-- セレクトボックス -->
    <select>
        <option>選択してください</option>
        <option>選択肢1</option>
        <option>選択肢2</option>
    </select>
    
    <!-- ボタン -->
    <button type="submit">送信</button>
    <button type="reset">リセット</button>
    <button type="button">普通のボタン</button>
</form>
```

### レイアウト用
```html
<div>ブロック要素（箱）</div>           <!-- 大きな箱 -->
<span>インライン要素（文字の装飾）</span> <!-- 文字の一部 -->
<header>ヘッダー部分</header>           <!-- ページ上部 -->
<nav>ナビゲーション</nav>              <!-- メニュー -->
<main>メインコンテンツ</main>           <!-- 主要部分 -->
<footer>フッター</footer>              <!-- ページ下部 -->
<section>セクション</section>           <!-- 章・節 -->
<article>記事</article>                <!-- 独立した記事 -->
```

### その他
```html
<hr>                              <!-- 横線 -->
<blockquote>引用文</blockquote>    <!-- 引用 -->
<code>プログラムコード</code>       <!-- コード -->
<pre>整形済みテキスト</pre>         <!-- そのまま表示 -->
<!-- コメント（表示されない） -->
```

## 属性の基本
```html
id="unique-name"        <!-- 一意の名前（1ページに1つ） -->
class="style-name"      <!-- スタイル用の名前（複数可） -->
style="color: red;"     <!-- 直接スタイル指定 -->
title="ツールチップ"     <!-- マウスを乗せると表示 -->
```

## よくある組み合わせ

### ナビゲーションメニュー
```html
<nav>
    <ul>
        <li><a href="index.html">ホーム</a></li>
        <li><a href="about.html">会社概要</a></li>
        <li><a href="contact.html">お問い合わせ</a></li>
    </ul>
</nav>
```

### 画像付きリンク
```html
<a href="detail.html">
    <img src="product.jpg" alt="商品画像">
</a>
```

### カード型レイアウト
```html
<div class="card">
    <img src="image.jpg" alt="画像">
    <h3>タイトル</h3>
    <p>説明文</p>
    <a href="more.html">詳細を見る</a>
</div>
```

## 覚えるコツ
1. **タグは必ず閉じる**：`<p>文章</p>`
2. **小文字で書く**：`<P>` ではなく `<p>`
3. **属性は引用符で囲む**：`href="URL"`
4. **画像にはalt属性**：アクセシビリティのため
5. **意味に合ったタグを使う**：見出しには`<h1>`、段落には`<p>`

これらの基本タグを覚えれば、簡単なWebページは作れるようになります！