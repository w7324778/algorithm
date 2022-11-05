const path = require('path')
const webpack = require('webpack')
const webpackConfig = require('./webpack.common.js')
const { distPath } = require('./paths')
const { merge } = require('webpack-merge')
//用来分析包大小
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//分离CSS
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//压缩css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
//无损压缩图片
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
module.exports = merge(webpackConfig, {
    mode: 'production',
    //生成的时候我们可以快速定位线上问题
    devtool: "source-map",
    output: {
        filename: 'bundle.[contenthash:8].js',
        path: path.resolve(distPath),
        assetModuleFilename: "img/[name].[hash:6].[ext]",
        clean: true
    },
    // module: {
    //     rules: [

    //         {
    //             test: /\.(css|scss|sass)$/,
    //             use: [
    //                 MiniCssExtractPlugin.loader,  // 注意，这里不再用 style-loader
    //                 "css-loader",
    //                 {
    //                     loader: "postcss-loader",
    //                     options: {
    //                         postcssOptions: {
    //                             plugins: ["autoprefixer"],
    //                         },
    //                     },
    //                 }, "sass-loader"
    //             ],
    //         },
    //         {
    //             test: /\.(png|jpe?g|gif|svg)$/,
    //             type: "asset",
    //             generator: {
    //                 //文件生成目录
    //                 filename: 'img/[name].[hash:6][ext]'
    //             },
    //             parser: {
    //                 dataUrlCondition: {
    //                     //最大限制，小于限制转换Base64
    //                     maxSize: 200 * 1024
    //                 }
    //             }
    //         }

    //     ]
    // },
    // optimization: {
    //     //https://www.czweb.com.cn/senior/reduceVolume.html#%E6%80%8E%E4%B9%88%E7%94%A8-2
    //     minimizer: [`...`, new CssMinimizerPlugin(),],
    //     //分割代码，可以将代码分割成块减少代码体积
    //     splitChunks: {
    //         chunks: "all",
    //         name: "vendor",
    //         cacheGroups: {
    //             "echarts.vendor": {
    //                 name: "echarts.vendor",
    //                 priority: 40,
    //                 test: /[\\/]node_modules[\\/](echarts|zrender)[\\/]/,
    //                 chunks: "all",
    //             },
    //             lodash: {
    //                 name: "lodash",
    //                 chunks: "async",
    //                 test: /[\\/]node_modules[\\/]lodash[\\/]/,
    //                 priority: 40,
    //             },
    //             "async-common": {
    //                 chunks: "async",
    //                 minChunks: 2,
    //                 name: "async-commons",
    //                 priority: 30,
    //             },
    //             commons: {
    //                 name: "commons",
    //                 chunks: "all",
    //                 minChunks: 2,
    //                 priority: 20,
    //             },
    //         },
    //     },
    //     // 压缩图片
    // },

    // plugins: [
    //     new webpack.DefinePlugin({
    //         ENV: JSON.stringify('production')
    //     }),
    //     new MiniCssExtractPlugin({
    //         filename: 'css/main.[contenthash:8].css'
    //     })
    //     // new BundleAnalyzerPlugin()
    // ]
})