const commonConfig = require('./webpack.common.config');
const path = require('path');

const config = {
    entry: {
        'index': './src/backend/index.ts',
    },
    devtool: false,
    target: 'node',
    node: {
        __dirname: true
    },
    output: {
        path: path.resolve(__dirname, '../app/backend'),
        filename: '[name].js',
    },
};
const t = Object.assign({}, commonConfig, config);

module.exports = t;
