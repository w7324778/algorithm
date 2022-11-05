const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.common.js')
const { merge } = require('webpack-merge')
const { distPath, srcPath } = require('./paths')
//引入引入 DllReferencePlugin
module.exports = merge(webpackConfig, {
    mode: "development",
    devtool: "cheap-module-source-map",
    devServer: {
        port: 8080,//端口号
        open: true,//自动打开浏览器
        hot: true,
        //托管的静态资源文件
        //可通过数组的方式托管多个静态资源文件
        //*这里路径不对的话会找不到HTML文件
        static: {
            directory: path.join(srcPath),
        },
    }
})
