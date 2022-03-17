const path = require("path");

module.exports = storybookBaseConfig => {
  // Ensure Babel transpiles story source in adjacent packages
  const babelRule = storybookBaseConfig.module.rules[0];
  babelRule.include = [path.resolve(__dirname, "../../../../packages")];

  storybookBaseConfig.module.rules.push(
    {
      test: /\.(scss|css)$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },
    {
      test: /\.json$/,
      use: ["json-loader"]
    },
    {
      test: /\.svg$/,
      issuer: /\.js$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader"
        }
      ]
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
    }
  );
  storybookBaseConfig.resolve.modules.push(
    path.resolve(__dirname, "../../../../packages")
  );
  return storybookBaseConfig;
};
