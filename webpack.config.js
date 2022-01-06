// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');

const isProduction = process.env.NODE_ENV == 'production';


const stylesHandler = 'style-loader';



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [stylesHandler,'css-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
    resolve: {
        fallback: {
            "url": false,
            "buffer": false,
            "util": false,
            "path": false,
            "zlib": false,
            "querystring": false,
            "crypto": false,
            "stream": false,
            "http": false,
            "fs": false
            // "path": require.resolve("path-browserify"),
            // "zlib": require.resolve("browserify-zlib"),
            // "querystring": require.resolve("querystring-es3"),
            // "crypto": require.resolve("crypto-browserify"),
            // "stream": require.resolve("stream-browserify"),
            // "http": require.resolve("stream-http")
        }
    }
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};