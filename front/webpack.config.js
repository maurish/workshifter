import path from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'


export default {
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
            title: 'Dashboard',
            template: 'web/index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: process.env.NODE_ENV === 'development',
            __DEVTOOLS__: true
        })
    ]
}
