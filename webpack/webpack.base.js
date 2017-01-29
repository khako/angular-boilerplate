var path = require('path');
var autoprefixer = require('autoprefixer');

const config = {};

config.entry = {
  app: [path.resolve(__dirname, '../client/app/app.js')]
};

config.output = {
  path: path.resolve(__dirname, '../build'),
  publicPath: process.env.NODE_ENV === 'PROD' ? '/build/' : 'http://localhost:3333/',
  filename: process.env.NODE_ENV === 'PROD' ? '[name].[hash].js' : '[name].js',
  sourceMapFilename: process.env.NODE_ENV === 'PROD' ? '[name].[hash].js.map' : '[name].js.map',
  chunkFilename: '[id].chunk.js'
};

config.resolve = {
  extensions: ['', '.js', '.html', '.sass', '.scss', '.json'],
  fallback: [path.join(__dirname, '../node_modules')],
  alias: {
    'assets': path.join(__dirname, '../client/assets'),
    'style': path.join(__dirname, '../client/app/style'),
    'directives': path.join(__dirname, '../client/app/directives'),
    'datas': path.join(__dirname, '../datas/')
  }
};

config.module = {
  preLoaders: [
    { test: /\.js$/, loader: 'eslint', include: path.resolve(__dirname, '../client'),
      exclude: /node_modules/ }
  ],

  loaders: [
    { test: /\.html$/, loader: 'html' },

    { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },

    { test: /\.(png|jpg|jpeg|gif|ico)$/, loader: 'url?limit=10' },

    { test: /\.(woff2?|ttf|eot)$/, loader: 'url?limit=10000' },

    { test: /\.(svg|xml)$/, loader: 'file' },

    { test: /\.json$/, loader: 'json' }

  ]
};

config.babel = {
  presets: ['es2015'],
  plugins: ['transform-runtime']
};

config.eslint = {
  formatter: require('eslint-friendly-formatter')
};

config.postcss = function() {
  return [autoprefixer];
};

module.exports = config;
