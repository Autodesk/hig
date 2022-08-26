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
  title: "ThemeData/Tokens/Basics",
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
        {Object.keys(stories.basics[args.schema]).map((role) => (
          <Role
            key={role}
            role={role}
            schema={stories.basics[args.schema][role]}
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

Default.args = { schema: "borderRadii" };
Default.storyName = "Border Radii";

export const BorderWidths = Template.bind({});

BorderWidths.args = { schema: "borderWidths" };

export const Colors = Template.bind({});

Colors.args = { schema: "colors" };

export const FontFamilies = Template.bind({});

FontFamilies.args = { schema: "fontFamilies" };

export const FontSizes = Template.bind({});

FontSizes.args = { schema: "fontSizes" };

export const FontWeights = Template.bind({});

FontWeights.args = { schema: "fontWeights" };

export const LineHeights = Template.bind({});

LineHeights.args = { schema: "lineHeights" };

export const Shadows = Template.bind({});

Shadows.args = { schema: "shadows" };

export const Spacings = Template.bind({});

Spacings.args = { schema: "spacings" };
