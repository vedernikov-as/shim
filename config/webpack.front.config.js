const commonConfig = require("./webpack.common.config");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const _DEV_ = process.env.NODE_ENV !== "production";

const config = {
    entry: {
        index: "./src/front/index.tsx",
    },
    output: {
        path: path.resolve(__dirname, "../app/front"),
        filename: "[name].js",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/backend/index.html",
        }),
    ],

};
commonConfig.module.rules.push({
    test: /\.less$/,
    exclude: /node_modules/,
    rules: [
        {
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: {
                        localIdentName: !_DEV_ ? "[name]-[local]-[hash:base64:4]" : undefined,
                        modules: true,
                    },
                },
                "less-loader",
            ],
        },
    ],
});
const t = Object.assign({}, commonConfig, config);
module.exports = t;
