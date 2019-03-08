const path = require('path')
const fs = require('fs')

const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const yaml = require('js-yaml')

const webpackConfig = require('./webpack.config.js')

const app = express()
const port = process.env.PORT || 3000

app.listen(port, () => { console.log(`App is listening on port ${port}`) })
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})
const compiler = webpack(webpackConfig)
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
}))
app.use(require('webpack-hot-middleware')(compiler))

try {
    const config = yaml.safeLoad(fs.readFileSync('secrets.yml', 'utf8'))
    const indentedJson = JSON.stringify(config, null, 4)
    console.log(chalk.blue(indentedJson))
} catch (e) {
    console.log(chalk.red(e))
}

app.use(express.static(path.resolve(__dirname, 'dist')))
