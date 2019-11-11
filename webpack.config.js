module.exports = {
    mode: 'development',
    //コードを見やすく最後にプロダクションにする


    entry: './src/index.js',
    // インポートするファイル(まとめたやつ)
    // を書く(相対パス)

    output: {
        path: __dirname + '/dist',
        // 絶対パスで書かないとだめ

        filename: 'main.js'
    },

    devServer: {
        contentBase: 'dist',
        open: true
    },

    module: {
        rules: [
            {
                test: /\.scss/,
                use: [ //例外的に下から読み込まれる
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            }
        ]
    }
}