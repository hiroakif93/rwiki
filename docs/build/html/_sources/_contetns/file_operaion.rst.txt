
######################
ファイル/ディレクトリの操作
######################

ディレクトリに関する操作
================

`setwd`
+++++++++++++++

作業ディレクトリ(working directory)の変更::
    
    # Windowsの例. ””内は、自分のフォルダを指定
    setwd("C:/Users/username/Documents")    

    # Macの例. ””内は、自分のフォルダを指定
    setqwd("/Users/username/Documents")

`getwd`
+++++++++++++++

現在の作業ディレクトリ(working directory)の確認::
    
    getwd()    


ファイルに関する操作
================

read.table
+++++++++++++++

ファイルの読み込み.
区切り文字を指定することができる::
    
    # sep=""で指定した文字を区切りにして、列に分割して読み込む
    df = read.table("data.txt", sep="\t", header=TRUE)

    # CSVファイルの読み込み
    df = read.table("data.csv", sep=",", header=TRUE)

read.csv
+++++++++++++++

read.tableのWrapper関数.
デフォルトの指定文字がスペースではなくカンマ(,)::

    df = read.csv("data.csv", sep=",", header=TRUE)
