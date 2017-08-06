var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //自動生成HTML
const CleanWebpackPlugin = require('clean-webpack-plugin'); //清理 /dist 文件夹
const ExtractTextPlugin = require("extract-text-webpack-plugin");//分離檔案出來
const webpack = require('webpack');//使用webpack


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
                // use: [
                //     'style-loader',
                //     'css-loader',
                //     'sass-loader'
                // ]
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:['css-loader','sass-loader']
                })
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
        // contentBase: './dist'
        hot: true,
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'webpack project'
        }),//預設index.html
        new HtmlWebpackPlugin({
            filename: 'test.html',
            template: 'src/kirin.html'
        }),//使用範本test.html
        new webpack.HotModuleReplacementPlugin(), // 启用 HMR
        new ExtractTextPlugin("styles.css") //分離CSS
    ]
}