import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeContext from "@hig/theme-context";

import lightGrayHighTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import lightGrayMediumTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkGrayHighTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";
import darkGrayMediumTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import darkBlueHighTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkBlueMediumTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";

import Toggle from "../Toggle";

const themes = [
  lightGrayHighTheme,
  lightGrayMediumTheme,
  darkGrayHighTheme,
  darkGrayMediumTheme,
  darkBlueHighTheme,
  darkBlueMediumTheme
];

function ThemeRepeater({ children }) {
  return (
    <div style={{ display: "flex" }}>
      {themes.map(theme => (
        <ThemeContext.Provider key={theme.metadata.id} value={theme}>
          <div>{children}</div>
        </ThemeContext.Provider>
      ))}
    </div>
  );
}

function Surface({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ resolvedRoles }) => {
        const style = {
          backgroundColor: resolvedRoles["colorScheme.surface.level100"],
          marginBottom: resolvedRoles["density.spacings.large"],
          height: "50px"
        };

        return <div style={style}>{children}</div>;
      }}
    </ThemeContext.Consumer>
  );
}

function ToggleVariantRepeater() {
  return (
    <div>
      <Toggle defaultOn />
      <Toggle />
    </div>
  );
}

const toggleVariants = (
  <ThemeRepeater>
    <Surface>
      <ToggleVariantRepeater />
    </Surface>
  </ThemeRepeater>
);

storiesOf("Toggle", module).add("all variations", () => (
  <div>{toggleVariants}</div>
));
