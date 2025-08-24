const path = require("path");
const { use } = require("react");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist"),
    publicPath: "dist/",
  },
  mode: "none",
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/, // Regex to match image files
        type: "asset", // Use asset/resource to handle images
        parser: {
          dataUrlCondition: {
            //condition on which webpack will know to use asset/resource or asset/inline
            maxSize: 3 * 1024, // if the file is less than 3kb, it will be asset/inline if greater than 3kb it will be asset/resource
          },
        },
      },
      {
        test: /\.txt/, // Regex to match text files
        type: "asset/source", // Use asset/source to handle text files, reads the file as a string.
      },
      {
        test: /\.css$/, // Regex to match CSS files
        use: ["style-loader", "css-loader"], // Use style-loader and css-loader to handle CSS files
      },
      {
        test: /\.scss$/, // Regex to match SCSS files
        use: ["style-loader", "css-loader", "sass-loader"], // Use style-loader, css-loader and sass-loader to handle SCSS files
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // Exclude node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader to transpile JavaScript files
          options: {
            presets: ["@babel/env"], // Use @babel/preset to transpile ES6+ to ES5
            plugins: ["@babel/plugin-proposal-class-properties"], // Use @babel/plugin-proposal-class-properties to transpile class properties
          },
        },
      },
    ],
  },
};
