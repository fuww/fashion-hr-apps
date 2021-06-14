import webpack from 'webpack';
import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default {
  entry: {
    "dfp-account": "./src/js/dfp-account.js",
    "employer-branding": "./src/js/employer-branding.js",
    "bundle-mdc": "./src/js/mdc/app.js",
    "mdc-tabs": "./src/js/mdc/mdc-tabs.js",
    "mdc-accordion": "./src/js/mdc/mdc-accordion.js",
    "mdc-drawer": "./src/js/mdc/mdc-drawer.js",
    "fu-ripple-effect": "./src/js/fu-ripple-effect.js",
    "hr-appstore": "./src/js/hr-appstore.js",
    "jobs-landing": "./src/js/jobs-landing.js",
    main: "./src/js/main.js",
    "new-relic-static": "./src/js/new-relic-static.js",
    "visual-landing": "./src/js/visual-landing.js",
    fonts: "./src/js/fonts.js",
    "bootstrap-transition": "./node_modules/bootstrap-transition",
    bootstrap: "./src/js/vendor/bootstrap.js",
    button: "./src/js/vendor/button.js",
    carousel: "./src/js/vendor/carousel.js",
    checkbox: "./src/js/vendor/checkbox.js",
    "data-table": "./src/js/vendor/data-table.js",
    "jquery.dfp": "./src/js/vendor/jquery.dfp.js",
    jquery: "./src/js/vendor/jquery.js",
    layout: "./src/js/vendor/layout.js",
    mdlComponentHandler: "./src/js/vendor/mdlComponentHandler.js",
    menu: "./src/js/vendor/menu.js",
    ripple: "./src/js/vendor/ripple.js",
    tabs: "./src/js/vendor/tabs.js",
    textfield: "./src/js/vendor/textfield.js",
    "bootstrap-transition": "bootstrap-transition",
    //HUGO pipes could not process this file, so this goes through webpack
    // bundle: "themes/material-components-web/assets/styles/app.scss"
  },
  output: {
    path: path.join(__dirname, "static/landing/scripts/")
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].scss"
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  module: {
    rules: [
      {
        test: /\.((eot)|(woff)|(woff2)|(ttf))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=[hash].[ext]',
        options: {
          name: '[path]/[name].[ext]',
        },
      },
      {
        test: /^\.\/js\/.*\.js?$/,
        use: ["babel-loader"]
      },
      {
        test: /\.scss$/,
        use: ['style-loader',
          { loader: MiniCssExtractPlugin.loader, },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: '../'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: { includePaths: ['./node_modules', '../node_modules', 'themes/material-components-web/node_modules'] }
          }]
      }
    ]
  }
};
