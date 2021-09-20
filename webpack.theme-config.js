const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  entry: {
    'design-tokens': './source/00-config/config.design-tokens.yml',
  }
});
