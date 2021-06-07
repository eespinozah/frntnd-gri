const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const workboxPlugin = require('workbox-webpack-plugin');

const config = {
  entry: [
    'babel-polyfill',
    path.join(__dirname, 'src', 'main.js')
  ],
  output: {
    path: path.join(__dirname, 'dist', 'build'),
    publicPath: '/',
    filename: 'build/[name].bundle.js',
    chunkFilename: 'build/[id].chunk.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        }
      }
      ,
      {
        test: /\.(s?)css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'assets'
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '@data': path.join(__dirname, 'data'),
      '@services': path.join(__dirname, 'src', 'services'),
      vue$: 'vue/dist/vue.runtime.esm.js',
      'mrisk-framework-vue': '@m-risk/mrisk-framework-vue',
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all'
    }
  }
};

module.exports = (env, argv) => {
  const isDev = argv.mode === 'development';

  const plugins = [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      favicon: path.join(__dirname, 'public', 'favicon.ico'),
      template: path.join(__dirname, 'public', 'index.html'),
      chunksSortMode: 'dependency'
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, 'Dockerfile'),
        to:   path.join(__dirname, 'dist')
      },
      {
        from: path.join(__dirname, 'locale'),
        to:   path.join(__dirname, 'dist', 'build', 'locale')
      },
      {
        from: path.join(__dirname, 'src', 'assets', 'standards'),
        to:   path.join(__dirname, 'dist', 'build', 'assets', 'standards')
      }
    ])
  ];

  // Development
  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  // Production
  if (!isDev) {
    plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      })
    );

    plugins.push(
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: isDev
      })
    );

    plugins.push(
      new webpack.optimize.AggressiveMergingPlugin()
    );

    plugins.push(
      new CompressionPlugin()
    );

    plugins.push(
      new workboxPlugin.GenerateSW({
        swDest: path.join('sw.js'),
        clientsClaim: true,
        skipWaiting: true,
      })
    );
  }

  config.plugins = plugins;
  config.watch = isDev;
  config.devtool = isDev ? 'source-map' : false;

  return config;
}
