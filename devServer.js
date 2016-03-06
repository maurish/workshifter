import path from 'path'
import url from 'url'
import express from 'express'
import webpack from 'webpack'
import proxy from 'express-http-proxy'

import config from './webpack.config'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res, next) => {
    res.sendFile(path.join(__dirname, '/web/index.html'));
})


app.listen(8888, 'localhost', err => {
    if (err) {
        console.log(err)
        return
    }

    console.log('Listening at http://localhost:8888')
})

