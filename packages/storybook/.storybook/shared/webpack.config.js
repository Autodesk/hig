const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(html|svg)$/,
        issuer: /\.js$/,
        use: "raw-loader",
      },
      {
        test: /\.svg$/,
        issuer: /\.scss$/,
        use: "svg-url-loader",
      }
    ]
  },
  resolve: {
    alias: {
      /**
       * @TODO: move storybook inside of packages to benefit from symlinked node_modules
       * Alternatively, auto-generate the aliases by iterating through packages and resolve [package_name]
       * to [package]/src/indexj.s
       */
      "hig-react": path.resolve(
        __dirname,
        "../../packages/react/src/hig-react.js"
      ),
      "hig-vanilla/lib/hig.css$": path.resolve(
        __dirname,
        "../../packages/vanilla/lib/hig.css"
      ),
      "hig-vanilla": path.resolve(
        __dirname,
        "../../packages/vanilla/src/index.js"
      ),
      "interface.json": path.resolve(
        __dirname,
        "../../packages/interface/interface.json"
      ),
      "_core.js": path.resolve(
        __dirname,
        "../../packages/vanilla/src/helpers/js/_core.js"
      ),
    },
    modules: [
      path.resolve(__dirname, "../../packages/vanilla/src"),
      "node_modules"
    ]
  }
};
