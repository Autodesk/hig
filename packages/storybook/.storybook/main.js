module.exports = {
  "stories": [
    "../../../packages/**/*.new-stories.mdx",
    "../../../packages/**/*.new-stories.[tj]s"
  ],
  "addons": [
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true }
    },
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],
  "core": {
    builder: 'webpack5',
  },
  "framework": "@storybook/react",
  "webpackFinal": async (config, { configType }) => { 
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
    const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
    fileLoaderRule.exclude = /\.svg$/;  

    config.module.rules.push({
      test: /\.svg$/,
      enforce: 'pre',
      loader: require.resolve('@svgr/webpack'),
    });

    return config;
  },
}
