// webpack.config.js

// 公式ドキュメントにも有るように、Node.jsにあるパスモジュールを読み込んでいる
// must be an absolute path (use the Node.js path module)
// https://webpack.js.org/configuration/#options
const path = require('path')

// resolve()は、絶対パスを生成するメソッド
// webpack.config.jsファイルが存在している現在のディレクトリ名と、distディレクトリを連結している
const outputPath = path.resolve(__dirname, 'dist')
console.log(outputPath)

// モジュールにオブジェクトを設定する
module.exports = {
    
    // エントリーポイントの設定：モジュールをバンドルするための対象物を設定している
    entry: './src/index.js',
    output: {
        // 出力するファイル名を設定
        filename: 'main.js',
        path: outputPath
    },
    devServer: {
        contentBase: outputPath
    }
}