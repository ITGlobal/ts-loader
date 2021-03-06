module.exports = {
    entry: './index.vue',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.vue']
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.ts$/, loader: 'ts-loader' }
        ]
    },
    vue: {
      loaders: {
        js: 'ts-loader'
      }
    },
    ts: {
      appendTsSuffixTo: [/\.vue$/]
    }
}

// for test harness purposes only, you would not need this in a normal project
module.exports.resolveLoader = { alias: { 'ts-loader': require('path').join(__dirname, "../../index.js") } }
