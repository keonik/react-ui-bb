const path = require('path');
module.exports = {
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  title: 'React UI Building Blocks',
  styleguideDir: 'public',
  theme: 'styleguide.theme.ts',
  styles: 'styleguide.styles.ts',
  moduleAliases: {
    'react-ui-bb': path.resolve(__dirname, 'src'),
  },
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
};
