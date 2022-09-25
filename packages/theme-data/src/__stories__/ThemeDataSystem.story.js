import React from "react";
import ThemeContext from "@hig/theme-context";

import stories from "./storiesSchema";
import Role from "./components/Role";
import lightGrayTheme from "../colorSchemes/lightGray/unresolvedRoles";
import darkBlueTheme from "../colorSchemes/darkBlue/unresolvedRoles";
import darkGrayTheme from "../colorSchemes/darkGray/unresolvedRoles";
import basics from "../basics";

const themeConfigs = {
  "hig-light-gray": lightGrayTheme,
  "hig-dark-blue": darkBlueTheme,
  "hig-dark-gray": darkGrayTheme,
};

export default {
  title: "Theme data/Tokens/System",
  argTypes: {
    schema: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    previewTabs: {
      "storybook/docs/panel": {
        hidden: true,
      },
    },
  },
};

const Template = (args) => (
  <ThemeContext.Consumer>
    {({ resolvedRoles, metadata }) => (
      <div>
        {Object.keys(stories.system[args.schema]).map((role) => (
          <Role
            key={role}
            role={role}
            schema={stories.system[args.schema][role]}
            theme={resolvedRoles}
            themeConfig={themeConfigs[metadata.colorSchemeId]}
            basics={basics}
          />
        ))}
      </div>
    )}
  </ThemeContext.Consumer>
);

export const Default = Template.bind({});

Default.args = { schema: "colorScheme" };
Default.storyName = "Color scheme";

export const Density = Template.bind({});

Density.args = { schema: "density" };
