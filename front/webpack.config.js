
module.exports = {
    entry: './src/scripts/index.jsx',
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
    }
}
