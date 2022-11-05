const path = require('path')
const chalk = require('chalk')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { srcPath, distPath } = require('./paths')
//打包进度条
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
//https://blog.csdn.net/weixin_41876574/article/details/115363610
module.exports = {
    entry: path.join(srcPath, 'index'),
    module: {
        rules: [
            {

                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-env'],
                    }
                },
                //指定编译的路径，只编译该路径下的文件
                include: srcPath,
            },

        ]
    },
    //配置别名
    resolve: {
        extensions: [".js", ".jsx", ".json", ".vue", "ts"], //省略文件后缀
        alias: { //配置别名
            "@": path.resolve(srcPath),
        },
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(srcPath, 'index.html'),
            filename: 'index.html',
        }),
        // 进度条
        new ProgressBarPlugin({
            format: `  :msg [:bar] ${chalk.green.bold(":percent")} (:elapsed s)`,
        }),
    ]
}
