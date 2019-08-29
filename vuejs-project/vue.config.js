module.exports = {
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules|vue\/src/,
                    loader: "ts-loader",
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            ]
        }
    },

    //=>ทำเพื่อลดการ pre loader
    chainWebpack: config => {
        config.plugins.delete('prefetch')
    }
}