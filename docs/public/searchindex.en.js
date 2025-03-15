var relearn_searchindex = [
  {
    "breadcrumb": "R Wiki by hiroakif93",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Basics",
    "uri": "/basic/index.html"
  },
  {
    "breadcrumb": "R Wiki by hiroakif93 \u003e  Basics",
    "content": "オブジェクト オブジェクトとは 直感的な理解は、\\ データ構造や処理結果を保存\\ したもの. 以下では、Rが扱うデータ構造 = 型とクラスについて説明する.\n–\nRで扱える型 文字型/character型 文字列を扱うための型. 文字を、シングルクォート（’）またはダブルクォート（\"）で囲むことで表現. 数字も、クォートで囲むと文字型として扱われる. 例：‘a’, ‘A’, ‘-’, ‘#’, ‘1’\n数値型/numeric型, 整数型/integer型 数値を扱うための型。四則演算などが可能です.整数型は、小数点以下がない数値を扱うための型. 例：1, 2.0, 3.1415, 4, 5, 1+1, 4-1, 2*3, 4/2\n“1”+“1\"は、１が文字列型になるため、計算できない. 論理型 論理型は、真偽値を扱うための型です。TRUEまたはFALSEの値を持ちます。\n論理型は整数値でも表すことができ、TRUEは1、FALSEは0として扱われます。\n–\nRのクラス ベクトル/vector\n行列/matrix, array\nデータフレーム/data.frame\nlist",
    "description": "オブジェクト オブジェクトとは 直感的な理解は、\\ データ構造や処理結果を保存\\ したもの. 以下では、Rが扱うデータ構造 = 型とクラスについて説明する.\n–\nRで扱える型 文字型/character型 文字列を扱うための型. 文字を、シングルクォート（’）またはダブルクォート（\"）で囲むことで表現. 数字も、クォートで囲むと文字型として扱われる. 例：‘a’, ‘A’, ‘-’, ‘#’, ‘1’\n数値型/numeric型, 整数型/integer型 数値を扱うための型。四則演算などが可能です.整数型は、小数点以下がない数値を扱うための型. 例：1, 2.0, 3.1415, 4, 5, 1+1, 4-1, 2*3, 4/2\n“1”+“1\"は、１が文字列型になるため、計算できない. 論理型 論理型は、真偽値を扱うための型です。TRUEまたはFALSEの値を持ちます。\n論理型は整数値でも表すことができ、TRUEは1、FALSEは0として扱われます。\n–\nRのクラス ベクトル/vector\n行列/matrix, array\nデータフレーム/data.frame\nlist",
    "tags": [],
    "title": "Object",
    "uri": "/basic/object/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "R Wiki by hiroakif93",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "R Wiki by hiroakif93 \u003e  Basics",
    "content": "代入 オブジェクトに値を代入するには、\\ \u003c-\\ または\\ =\\ を使う. ::\n# 数値型を代入 x \u003c- 10 # xに10を代入 print(x) # xを表示 y = 20 # yに20を代入 print(y) # yを表示 # 数値型のオブジェクトを使った計算結果を代入 z \u003c- x+y # xとyを足した値をzに代入 print(z) # zを表示 オブジェクトからの値の取り出し方 オブジェクトからの値の取り出しかたには、オブジェクトのクラスによって異なる.\nスカラー（ベクトルの長さが1のもの）のオブジェクトの場合、x自体が値を持つ. ::\nx \u003c- 10 x ベクトルのオブジェクトの場合、x[1]のように、カギ括弧内で取り出したい位置（インデックス）を指定して取り出す. ベクトルに名前がついている時は、x[名前]と指定して値を取り出すことも可能. ::\nx \u003c- c(1, 2, 3, 4, 5) # ベクトルを作成 names(x) \u003c- c(“a”, “b”, “c”, “d”, “e”) # ベクトルに名前をつける x[1] # 1番目の要素を取り出す x[2] # 2番目の要素を取り出す x[3] # 3番目の要素を取り出す\nx[“a”] # 名前がaの要素を取り出す\n行列・データフレームのオブジェクトの場合、x[1, 1]のように、カギ括弧内で取り出したい位置（インデックス）を指定して取り出す. カギ括弧内の前の数字は行のインデックス、後ろの数字は列のインデックスを表す. 行名、列名がついている場合は、x[“行名”, “列名”]と指定して値を取り出すことも可能. ::\nx \u003c- matrix(1:9, nrow=3, ncol=3) # 3x3の行列を作成 x[1, 1] # 1行1列目の要素を取り出す x[1, 2] # 2行2列目の要素を取り出す x[2, 3] # 3行3列目の要素を取り出す x[1, ] # 1行目の全ての要素を取り出す x[ , 2] # 2列目の全ての要素を取り出す\ny \u003c- data.frame(x=1:3, y=4:6) # データフレームを作成 y[1, 1] # 1行1列目の要素を取り出す y[1, 2] # 1行2列目の要素を取り出す x[1, ] # 1行目の全ての要素を取り出す x[ , 2] # 2列目の全ての要素を取り出す",
    "description": "代入 オブジェクトに値を代入するには、\\ \u003c-\\ または\\ =\\ を使う. ::\n# 数値型を代入 x \u003c- 10 # xに10を代入 print(x) # xを表示 y = 20 # yに20を代入 print(y) # yを表示 # 数値型のオブジェクトを使った計算結果を代入 z \u003c- x+y # xとyを足した値をzに代入 print(z) # zを表示 オブジェクトからの値の取り出し方 オブジェクトからの値の取り出しかたには、オブジェクトのクラスによって異なる.\nスカラー（ベクトルの長さが1のもの）のオブジェクトの場合、x自体が値を持つ. ::\nx \u003c- 10 x ベクトルのオブジェクトの場合、x[1]のように、カギ括弧内で取り出したい位置（インデックス）を指定して取り出す. ベクトルに名前がついている時は、x[名前]と指定して値を取り出すことも可能. ::\nx \u003c- c(1, 2, 3, 4, 5) # ベクトルを作成 names(x) \u003c- c(“a”, “b”, “c”, “d”, “e”) # ベクトルに名前をつける x[1] # 1番目の要素を取り出す x[2] # 2番目の要素を取り出す x[3] # 3番目の要素を取り出す",
    "tags": [],
    "title": "Rの記法",
    "uri": "/basic/grammer/index.html"
  },
  {
    "breadcrumb": "R Wiki by hiroakif93 \u003e  Basics",
    "content": "ディレクトリに関する操作 setwd 作業ディレクトリ(working directory)の変更::\n# Windowsの例. ””内は、自分のフォルダを指定 setwd(\"C:/Users/username/Documents\") # Macの例. ””内は、自分のフォルダを指定 setqwd(\"/Users/username/Documents\") getwd 現在の作業ディレクトリ(working directory)の確認::\ngetwd() ファイルに関する操作 read.table ファイルの読み込み. 区切り文字を指定することができる::\n# sep=\"\"で指定した文字を区切りにして、列に分割して読み込む df = read.table(\"data.txt\", sep=\"\\t\", header=TRUE) # CSVファイルの読み込み df = read.table(\"data.csv\", sep=\",\", header=TRUE) read.csv read.tableのWrapper関数. デフォルトの指定文字がスペースではなくカンマ(,)::\ndf = read.csv(\"data.csv\", sep=\",\", header=TRUE)",
    "description": "ディレクトリに関する操作 setwd 作業ディレクトリ(working directory)の変更::\n# Windowsの例. ””内は、自分のフォルダを指定 setwd(\"C:/Users/username/Documents\") # Macの例. ””内は、自分のフォルダを指定 setqwd(\"/Users/username/Documents\") getwd 現在の作業ディレクトリ(working directory)の確認::\ngetwd() ファイルに関する操作 read.table ファイルの読み込み. 区切り文字を指定することができる::\n# sep=\"\"で指定した文字を区切りにして、列に分割して読み込む df = read.table(\"data.txt\", sep=\"\\t\", header=TRUE) # CSVファイルの読み込み df = read.table(\"data.csv\", sep=\",\", header=TRUE) read.csv read.tableのWrapper関数. デフォルトの指定文字がスペースではなくカンマ(,)::\ndf = read.csv(\"data.csv\", sep=\",\", header=TRUE)",
    "tags": [],
    "title": "ファイル/ディレクトリの操作",
    "uri": "/basic/file_operaion/index.html"
  },
  {
    "breadcrumb": "R Wiki by hiroakif93",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "R Wiki by hiroakif93",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
