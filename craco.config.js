// craco.config.js
const CracoEslintWebpackPlugin = require('craco-eslint-webpack-plugin');


module.exports = {
  plugins: [{
    plugin: CracoEslintWebpackPlugin,
    options: {
      // See the options description below
      skipPreflightCheck: true,
      eslintOptions: {
        files: 'src/**/*.{js,jsx,ts,tsx}',
        lintDirtyModulesOnly: true,
     } },  
  style: {
      postcssOptions: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
      },
  }]}