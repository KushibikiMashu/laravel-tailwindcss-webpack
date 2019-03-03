# Laravel - Tailwind CSS - webpack	
Build assets without using laravel-mix.	

 ## Installation	

 ```	
$ composer install	
$ npm install	
```	

 ## Build a CSS file with tailwind CSS	

 Run `$ npx webpack --mode development`. Webpack will produce `public/css/styles.bundle.css`. This file injects Tailwind CSS's base styles.	

 ```	
                Asset      Size      Chunks             Chunk Names	
css/styles.bundle.css  1.09 MiB  css/styles  [emitted]  css/styles	
```	

 ## webpack.config.js	

 ```js	
const path = require("path")	
const MiniCssExtractPlugin = require('mini-css-extract-plugin')	
 module.exports = {	
  entry: {	
    "css/styles": path.resolve(__dirname, './resources/css/styles.css')	
  },	
  output: {	
      path: path.resolve(__dirname, 'public'),	
      filename: '[name].bundle.js'	
  },	
  devtool: 'inline-source-map',	
  module: {	
    rules: [	
      {	
        test: /\.css$/,	
        exclude: /node_modules/,	
        use: [	
          {	
            loader: MiniCssExtractPlugin.loader,	
          },	
          {	
            loader: 'css-loader',	
            options: {	
              importLoaders: 1,	
            }	
          },	
          {	
            loader: 'postcss-loader'	
          }	
        ]	
      }	
    ]	
  },	
  plugins: [	
    new MiniCssExtractPlugin({	
      filename: '[name].bundle.css'	
    }),	
  ]	
};	
```
