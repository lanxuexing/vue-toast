var path = require('path');
module.exports = {
    entry: './src/lib/index.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'vue2toast.js',
        libraryTarget: 'umd',
        library: 'Vue2Toast'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!postcss-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/,
                query:{
                    presets:['env']
                }
            }
        ]
    }
}