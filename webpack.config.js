module.exports = {
    entry: "./src/",
    target: "node",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.node$/,
                loader: "node-loader"
            }
        ]
    },
    resolve: {
        extensions: [".js", ".json", ".node"]
    },
    devtool: "source-map"
};
