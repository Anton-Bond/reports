const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const loaderUtils = require('loader-utils');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const getCSSModuleActualName = (context, localIdentName, localName, options) => {
    // Use the filename or folder name, based on some uses the index.js / index.module.(css|scss|sass) project style
    const fileNameOrFolder = context.resourcePath.match(
        /index\.module\.(css|scss|sass)$/
    )
        ? '[folder]'
        : '[name]';
    // Create a hash based on a the file location and class name. Will be unique across a project, and close to globally unique.
    const hash = loaderUtils.getHashDigest(
        path.posix.relative(context.rootContext, context.resourcePath) + localName,
        'md5',
        'base64',
        5
    );
    // Use loaderUtils to find the file or folder name
    const className = loaderUtils.interpolateName(
        context,
        `${fileNameOrFolder}_${localName}__${hash}`,
        options
    );
    // remove the .module that appears in every classname when based on the file.
    return className.replace('.module_', '_');
};

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'index.js',
    },
    module: {
        rules: [
            { parser: { System: false } },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                getLocalIdent: getCSSModuleActualName
                            }
                        }
                    },
                    {
                        loader: 'fast-sass-loader',
                        options: {
                            outputStyle: 'compressed',
                            includePaths: [path.resolve(__dirname, 'node_modules')]
                        }
                    }
                ],
                include: /\.module\.scss$/
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'fast-sass-loader',
                        options: {
                            outputStyle: 'compressed',
                            includePaths: [path.resolve(__dirname, 'node_modules')]
                        }
                    }
                ],
                exclude: /\.module\.scss$/
            },
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'perspectives'),
                    /\.test\.js$/
                ],
                loader: 'babel-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: 'html-loader'
            }
        ]
    },
    resolve: {
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    plugins: [
        // A webpack plugin to remove/clean the output folder before building
        new CleanWebpackPlugin(),
        new Dotenv({ systemvars: true }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
    ],
    devServer: {
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        port: 8080,
        hot: true,
        historyApiFallback: true
    },
    externals: []
};
