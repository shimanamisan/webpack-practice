
# 目次
1. [環境構築](#環境構築)
2. [webpackのインストール](#webpackのインストール)

# 環境構築
### githubでリポジトリを作成したらローカルにクローンファイルをダウンロードする
- 任意ディレクトリで下記のコマンドを実行
- 今回は`D:\webpack\`を実行環境とした
```shell
git clone https://github.com/shimanamisan/webpack-practice.git

# webpack-practiceディレクトリができるので移動
cd webpack-practice
```

```shell
# 現在のブランチを確認
git branch
* master # 現在はmasterブランチという意味
```

```shell
# webpack-sub-branchというブランチを切った
git checkout -b webpack-sub-branch

# 現在のブランチを確認
git branch
  master
* webpack-sub-branch # ブランチが移動していることが分かる
```