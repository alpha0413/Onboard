## **1. HTML/CSSとは**

HTMLとCSSは、Webページを作成する際に一緒に使用される2つの異なる言語です。

HTMLは、Webページの構造を記述するための言語で、Webページのコンテンツを配置し、見出し、段落、リンクなどの要素を定義します。一方、CSSは、Webページのスタイルを定義するための言語で、文字の色やサイズ、背景色、配置などの視覚的な要素を制御します。

つまり、HTMLはWebページの「骨組み」を作成し、CSSはその「外観」を整える役割を担っています。

以下の動画 (1:38-2:20) ではそれぞれの役割を建物に例えて説明しています。

HTMLとCSSの違い (1:38-2:20)

動画に出てくるように、HTMLでは全体の構造や各部分への意味付けが重要となっています。CSSは（願わくばうまく）構造化されたHTMLに装飾を加えます。

HTMLは、Hypertext Markup Language、CSSは、Cascading Style Sheetsの略です。

## **2. 学習**

### **2.1 HTMLの基本**

以下のレッスンを実施し，次のチェック項目を確認してください。

[マークアップ言語シリーズ: Lesson 1 HTMLの基本Zenn](https://zenn.dev/arisa_dev/books/markup-lesson1)[練習問題（Chapter 08）](https://zenn.dev/arisa_dev/books/markup-lesson1/viewer/chapter7)は15分時間を測ってやってみてください。（今できなくても構いません。時間がきたら答えを見ていいので，次できるようにしましょう！）

- Block要素とInline要素はどう違うのでしょうか。
- Developerツール（[参考](https://zenn.dev/arisa_dev/books/markup-lesson2/viewer/chapter9)）を使って[あるポートフォリオサイト](https://portfolio.learnhtmlcss.online/)のHTML構造を見てみましょう。HTML構造とサイトの構造はどう対応しているでしょうか。

### **2.2 CSSの基本**

以下のレッスンを実施し、次のチェック項目を確認してください。なお、CSSの構文: 子孫セレクタ（Chapter 7）は飛ばして構いません。

[マークアップ言語シリーズ: Lesson 2 CSSの基本Zenn](https://zenn.dev/arisa_dev/books/markup-lesson2)[練習問題（Chapter 14）](https://zenn.dev/arisa_dev/books/markup-lesson2/viewer/chapter13)15分時間を測ってやってみてください。（今できなくても構いません。時間がきたら答えを見ていいので，次できるようにしましょう！）

- Class属性とId属性はどう使い分けますか。

### **2.3 並列、Flexbox**

次のレッスンを実施してください。なお、練習問題（Chapter 14）は飛ばして構いません。

[マークアップ言語シリーズ: Lesson 4 並列、FlexboxZenn](https://zenn.dev/arisa_dev/books/markup-lesson4)

## **3. 発展的なCSS**

### **3.1 関数**

CSSでは関数を利用し計算や条件を指定することができます。以下によく使うCSS関数をいくつか挙げたいと思います。

### **calc()**

calc()関数では加減乗除 (+, -, *, /) が使用できます。入れ子構造の計算も可能です。

コピー

```
.example{
  width: calc(100% - 30px);
}
```

### **rgba()**

rgba()関数では色に加え透明度も指定できます。要素に単に `opacity: 0.5` などと透過率を指定するとその要素内の文字なども半透明になる一方、背景だけの透過率を下げたい場合は以下のように `background` プロパティにrgba()関数を適用させることでそれを実現できます。

コピー

```
.example{
  background: rgba(255, 255, 255, 0.5);  /* rgba(赤, 緑, 青, 透過度)で指定 */
}
```

### **var()**

CSSでは変数を宣言することができ、宣言した変数の値はvar()関数を用いて参照することができます。これは１つの成果物で何度も使用するような色の指定などに役立ちます。

コピー

```
/* 変数の宣言 */
--bg: #191970;

.example{
  background-color: var(--bg);
}
```

他にもCSS関数はたくさんあります。その他のCSS関数については以下を参照してみてください。

[CSS 関数記法 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Functions)

### **3.2 レスポンシブデザイン**

レスポンシブデザインとは、webサイトの表示を閲覧ユーザーのデバイスの画面サイズに応じて最適化するデザインのことを指します。例えば以下の東大のHPは、画面サイズを変えて表示すると画面の横幅が一定以下の長さになったとき画面のレイアウトが大幅に変わり、レスポンシブなデザインとなっていることが確認できます。

[](https://utokyotechclub.gitbook.io/~gitbook/image?url=https%3A%2F%2F686112546-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F15Gri4KP0qK959o0eDJi%252Fuploads%252FfQdKt1qTkIAJJpYi8psx%252FtodaiHP_responsive.gif%3Falt%3Dmedia%26token%3De547d626-6efc-4f28-ad3b-40f5068536bb&width=768&dpr=4&quality=100&sign=7e447106&sv=2)

このようにレスポンシブデザインは pc/タブレット/スマートフォンそれぞれのサイズに合ったレイアウトのwebサイトを、1ページのHTMLを管理するだけで表示できるメリットがあります。

レスポンシブデザインを実現する代表的な方法としてメディアクエリを用いてブレークポイント（レイアウトが変更されるポイント）を設定し、それぞれの条件についてスタイリングを適応する方法があります。例えば以下のCSSでは、Web ページが画面メディアとして表示され、かつビューポート幅が800ピクセル以上の場合に `.container` セレクターにCSSが適応されます。

コピー

```
@media screen and (min-width: 800px) {
  .container {
    margin: 1em 2em;
  }
}
```

さらにメディアクエリについて学びたい方はこちらを参考にしてみてください。

[メディアクエリー - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/Media_Queries)

他にも、より簡単にレスポンシブなレイアウトを行う手段として段組レイアウト、フレックスボックス、グリッドなどがあります。これらについては以下を参考にしてみてください。

[段組みの基本概念 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Columns/Basic_Concepts_of_Multicol)

[フレックスボックスの基本概念 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)

[グリッドレイアウトの基本概念 - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)

### **3.3 Sass / SCSS**

CSSの人気なメタ言語として Sass (Syntactically Awesome Style Sheets)、あるいはSCSS (Saasy CSS) というものがあります。Sass は1つ目の例のようにインデント構文を指す一方、SCSS は2つ目の例のようにSaasをCSSのようなブロック書式で書くものです。

```
nav
  ul
    margin: 0
    padding: 0
    list-style: none

  li
    display: inline-block

  a
    display: block
    padding: 6px 12px
    text-decoration: none
```

```
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}
```

Sass/SCSSの利点としては

- ネストが使えて構造が把握しやすく可読性が高い
- ファイルを分割できる
- コードを継承で使いまわせる
- Mixinという記法でコードを再利用できる
- JavaScriptのように関数が使える

などが挙げられます。Sass/SCSSについて詳しく知りたい方は、以下の公式ドキュメントを参考にしてみてください。

[Sass: Documentation](https://sass-lang.com/documentation/)

[](https://sass-lang.com/favicon.ico)

## **4. 課題**

[](https://utokyotechclub.gitbook.io/~gitbook/image?url=https%3A%2F%2F686112546-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252F15Gri4KP0qK959o0eDJi%252Fuploads%252FjkLO7BCjS5NdwJtSYNEe%252F%25E7%2594%25BB%25E9%259D%25A2%25E5%258F%258E%25E9%258C%25B2_2022-07-30_18_06_08_AdobeExpress%2520%281%29.gif%3Falt%3Dmedia%26token%3D15b9e605-0052-46bd-9ea3-29d8818bf2b3&width=768&dpr=4&quality=100&sign=975164d1&sv=2)

> Q1. 半径100pxの赤い円をHTMLページのど真ん中に配置してください。ただし、画面の横幅を変えてもど真ん中に位置し続けるようにすること。
> 
> 
> Q2. また、他にとり得る実装方法を列挙し、なぜそれらではなく現状の方法を採用したのか理由を付記してください。
> 

提出方法は以下の通りです。

mainブランチから「html」という名前のブランチを作成し、htmlブランチに移動してください。以下コマンドの例になります。

```
git switch main
git checkout -b html
```

次に「html」というディレクトリを作成してください。その中に必要なファイルを作成してください。

以降の課題においても共通することですが、レビューに出す前に必ず、提出する課題が**提示されている要件を満たしていること**を自分のpcで確かめてください。

完成したらリモートブランチにpushしてください。以下コマンドの例になります。

```
git add .
git commit -m 【コミットメッセージ】
git push --set-upstream html
```

GitHub上でhtmlブランチからmainブランチに対してのPRを作成してください。

- PRにQ2の答えを記入してください。
- PR作成後、メンタリンググループのSlackチャンネルでレビューを依頼してください。

ただし、htmlは以下の雛形を参考にしてください。

index.html

```
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UTTC HTML & CSS 課題</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- ここに解答を書く -->
</body>
</html>
```