module.exports = {
  webpackConfig: {
    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" }
      ]
    }
  },
  title: "React UI Building Blocks",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "react-sample-components-library": path.resolve(__dirname, "src")
  }
};
