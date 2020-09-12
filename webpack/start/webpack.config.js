const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


const isDev = process.env.NODE_ENV === 'development'
console.log('IS dev:', isDev)

const isProd = !isDev

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin()
    ]
  }

  return config
}


const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`


const cssLoaders = extra => {
  const loaders = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: isDev,
          reloadAll: true
        },
      },
      'css-loader'
    ]

    if (extra) {
      loaders.push(extra)
    }

    return loaders
  }




const babelOptions = preset => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties']
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}




const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions()
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}





module.exports = {
  // вказуємо з якою папкою має працювати програма
  //тому при вказуванні шляху до файлів не вказуємо src
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  // entry: './src/index.js',
  entry: {
    // main: './src/index.js',
    // analytics: './src/analytics.js'
    // main: './index.js',
    // main: ['@babel/polyfill', './index.js'],
    main: ['@babel/polyfill', './index.jsx'],
    analytics: './analytics.js'
  },
  output: {
    // filename:'bundle.js',
    // filename:'[name].bundle.js',
    // filename:'[name].[contenthash].js',
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.css', '.json', '.png', '.xml', '.csv', 'ico'],  //вказуємо формати щоб при import в файлі index.js їх можна було не вказувати
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),  //можемо приписувати шлях, щоб в коді не писати довгі шляхи
      '@': path.resolve(__dirname, 'src'),
    }
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'  //дозволяє підключати один раз а не для кожного файлу окремо (jquery,..)
  //   }
  // },
  optimization: optimization(),
  devServer: {
    port: 4200,
    hot: isDev
  },
  devtool: isDev ? 'source-map' : '',
  plugins: [
    new HTMLWebpackPlugin({
      // title: 'Webpack kim',
      // template: './src/index.html'
      template: './index.html',
      minify: {
        collapseWhitespace: isProd
      }
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        }
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        // use: [{
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {
        //     hmr: isDev,
        //     reloadAll: true
        //   },
        // }, 'css-loader']
        use: cssLoaders()

      },
      {
        test: /\.less$/,
        // use: ['style-loader', 'css-loader']
        // use: [{
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {
        //     hmr: isDev,
        //     reloadAll: true
        //   },
        // },
        // 'css-loader',
        // 'less-loader'
        // ]
        use: cssLoaders('less-loader')
      },
      {
        test: /\.s[ac]ss$/,
        // use: ['style-loader', 'css-loader']
        // use: [{
        //   loader: MiniCssExtractPlugin.loader,
        //   options: {
        //     hmr: isDev,
        //     reloadAll: true
        //   },
        // },
        // 'css-loader',
        // 'sass-loader'
        // ]
        use: cssLoaders('sass-loader')

      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/,
        use: ['csv-loader']
      },
      // {
      //   test: /\.m?js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //       plugins: ['@babel/helper-create-class-features-plugin']
      //     }
      //   }
      // }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //       // plugins: ['@babel/helper-create-class-features-plugin'],
      //       plugins: ['@babel/plugin-proposal-class-properties']
      //     }
      //   }
      // }
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   loader: {
      //     loader: 'babel-loader',
      //     options: babelOptions()
      //   }
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: isLoaders()
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: 'babel-loader',
          options: babelOptions('@babel/preset-react')
        }
      }
    ]
  }
}
