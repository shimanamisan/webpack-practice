
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

# webpackのインストール
```shell
# 各種モジュールのバージョンを確認していく(2020/02/09現在)
npm info webpack

webpack@4.41.5 | MIT | deps: 23 | versions: 632
Packs CommonJs/AMD modules for the browser. Allows to split your codebase into multiple bundles, which can be loaded on demand. Support loaders to preprocess files, i.e. json, jsx, es7, css, less, ... and your custom stuff.
https://github.com/webpack/webpack

bin: webpack

dist
.tarball: https://registry.npmjs.org/webpack/-/webpack-4.41.5.tgz
.shasum: 3210f1886bce5310e62bb97204d18c263341b77c
.integrity: sha512-wp0Co4vpyumnp3KlkmpM5LWuzvZYayDwM2n17EHFr4qxBBbRokC7DJawPJC7TfSFZ9HZ6GsdH40EBj4UV0nmpw==
.unpackedSize: 1.5 MB

dependencies:
@webassemblyjs/ast: 1.8.5                   enhanced-resolve: ^4.1.0                    neo-async: ^2.6.1
@webassemblyjs/helper-module-context: 1.8.5 eslint-scope: ^4.0.3                        node-libs-browser: ^2.2.1
@webassemblyjs/wasm-edit: 1.8.5             json-parse-better-errors: ^1.0.2            schema-utils: ^1.0.0
@webassemblyjs/wasm-parser: 1.8.5           loader-runner: ^2.4.0                       tapable: ^1.1.3
acorn: ^6.2.1                               loader-utils: ^1.2.3                        terser-webpack-plugin: ^1.4.3
ajv-keywords: ^3.4.1                        memory-fs: ^0.4.1                           watchpack: ^1.6.0
ajv: ^6.10.2                                micromatch: ^3.1.10                         webpack-sources: ^1.4.1
chrome-trace-event: ^1.0.2                  mkdirp: ^0.5.1

maintainers:
- jhnns <mail@johannesewald.de>
- sokra <tobias.koppers@googlemail.com>
- thelarkinn <sean.larkin@cuw.edu>

dist-tags:
latest: 4.41.5       legacy: 1.15.0       next: 5.0.0-beta.13  webpack-2: 2.7.0     webpack-3: 3.12.0

published a month ago by sokra <tobias.koppers@googlemail.com>

# latest: 4.41.5 このバージョンが最新版。上の方のwebpack@4.41.5をコピー

npm install -D webpack@4.41.5


# webpack-cliをインストールする(コマンドラインでwebpackを使用できるようにするパッケージ)
npm info webpack-cli
# webpack-cli@3.3.10

npm install -D webpack-cli@3.3.10
```

# 現時点でのpackage.jsonの確認
```shell
D:\webpack\webpack-practice> cat package.json
{
  "name": "webpack-practice",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/shimanamisan/webpack-practice.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/shimanamisan/webpack-practice/issues"
  },
  "homepage": "https://github.com/shimanamisan/webpack-practice#readme",
  "devDependencies": {
    "webpack": "^4.41.5",
    "webpack-cli": "^3.3.10"
  }
}
```

# バンドル対象のファイルを作成
```shell
#
new-item index.html

#
mkdir src

#
new-item src/index.js
```

# ファイルを編集してく
```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>webpack practice</title>
</head>
<body>
  <h1>webpack practice</h1>
</body>
</html>
```

# ライブサーバーをインストールする
```shell
npm info live-server

npm install -D live-server@1.2.1
```

# ライブサーバを起動
```shell
.\node_modules\.bin\live-server
```

# 相対パスでなくともコマンドを探索して実行できる機能がある
```shell
# 以降はこれで実行していく
npx live-server
```

# lodashのCDNを読み込む
- [UNPKG](https://www.unpkg.com/)からCDNを読み込む
- URLの記述にルールがあるようだ → `unpkg.com/:package@:version/:file`
- https://www.unpkg.com/lodash と打ち込むと最新バージョンにリダイレクトされる。今回はミニファイされたファイルを使う
- こっちヘッドタグに読み込ませる：https://www.unpkg.com/lodash@4.17.15/lodash.min.js







