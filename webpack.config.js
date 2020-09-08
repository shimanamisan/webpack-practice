// webpack.config.js

// 公式ドキュメントにも有るように、Node.jsにあるパスモジュールを読み込んでいる
// must be an absolute path (use the Node.js path module)
// https://webpack.js.org/configuration/#options
const path = require("path");

// resolve()は、絶対パスを生成するメソッド
// webpack.config.jsファイルが存在している現在のディレクトリ名と、distディレクトリを連結して絶対パスに変換している
const outputPath = path.resolve(__dirname, "dist");
console.log("これがoutputPathです：" + outputPath);

// モジュールにオブジェクトを設定する
module.exports = {
  // エントリーポイントの設定：モジュールをバンドルするための対象物を設定している
  entry: "./src/index.js",
  output: {
    // 出力するファイル名を設定
    filename: "main.js",
    // 絶対パスを指定
    path: outputPath,
  },
  // loaderを登録していく
  module: {
    // ruleは配列で登録する
    rules: [
      {
        // 読み込んだローダーをどういったファイルを登録するのか、正規表現で記述する
        test: /\.css$/, // .cssというファイルに使用するローダーと関連付ける
        // 読み込むローダーを指定
        use: ["style-loader", "css-loader"],
      },
      {
        // 読み込んだローダーをどういったファイルを登録するのか、正規表現で記述する
        test: /\.scss$/, // .cssというファイルに使用するローダーと関連付ける
        // sass-loader:scssファイルを読み込むローダー
        // ローダーは配列内の最後の要素から順番に読み込まれる
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // 拡張子の大文字も許容するように最後尾に i を加える
        // jpegとjpgの様にeがあるかないかを許容するのに、jpe?gという形式にする
        test: /\.(jpe?g|png|svg|gif|ico)$/i,
        loader: "url-loader",
        options: {
          // 指定のサイズを超過すると、画像が[name]で指定されたファイルに書き換わり独立する
          limit: 2048,
          name: "./opimage/[name].[ext]",
        },
      },
    ],
  },
  devServer: {
    contentBase: outputPath,
  },
};
