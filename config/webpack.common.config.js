const path = require('path');

const _DEV_ = process.env.NODE_ENV !== 'production';

const config = {
    mode: _DEV_ ? 'development' : 'production',
    devtool: _DEV_ ? 'source-map' : 'eval',
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        compilerOptions: {
                            noEmit: false
                        }
                    }
                }
            ]
        }],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
};

module.exports = config;
