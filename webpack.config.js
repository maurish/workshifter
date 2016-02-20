import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'


export default {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'script.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel'
            },
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'less'
                ]
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['.jsx', '', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'Workshifter',
            template: 'web/index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true, //process.env.NODE_ENV === 'development',
            __DEVTOOLS__: true
        })
    ]
}
