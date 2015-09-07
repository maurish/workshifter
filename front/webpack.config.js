
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname,
        publicPath: '/build/',
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
        extensions: ['.jsx', '', '.js']
    }
}
