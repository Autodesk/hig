module.exports = {
  "stories": [
    "../../../packages/**/*.new-stories.mdx",
    "../../../packages/**/*.new-stories.[tj]s"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true }
    },
    "@react-theming/storybook-addon"
  ],
  "framework": "@storybook/react"
}
