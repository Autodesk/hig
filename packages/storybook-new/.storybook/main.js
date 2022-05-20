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
  ],
  "framework": "@storybook/react"
}
