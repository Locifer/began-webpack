var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自動生成HTML
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理 /dist 文件夹

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(css|scss|sass)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            }
        ]
    },
    devServer:{
        contentBase: './dist'
        // hot: true,
        // contentBase: path.resolve(__dirname, 'dist'),
        // publicPath: '/'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'webpack project'
        })
    ]
}