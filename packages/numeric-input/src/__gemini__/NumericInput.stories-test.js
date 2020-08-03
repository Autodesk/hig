import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeContext from "@hig/theme-context";
import lightGrayHighTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import lightGrayMediumTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkGrayHighTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";
import darkGrayMediumTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import darkBlueHighTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkBlueMediumTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";

import NumericInput from "../NumericInput";

const availableVariants = ["line", "box"];

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
    <div style={{ display: "block" }}>
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
          paddingBottom: "10px",
          paddingTop: "10px",
          display: "flex"
        };

        return <div style={style}>{children}</div>;
      }}
    </ThemeContext.Consumer>
  );
}

function NumericInputVariantRepeater() {
  return (
    <div style={{ display: "flex" }}>
      {availableVariants.map(variant => (
        <div key={variant}>
          <div style={{ paddingBottom: "10px" }}>
            <NumericInput variant={variant} disabled={false} />
          </div>
          <div>
            <NumericInput variant={variant} disabled />
          </div>
        </div>
      ))}
    </div>
  );
}

const numericInputVariants = (
  <div>
    <ThemeRepeater>
      <Surface>
        <NumericInputVariantRepeater />
      </Surface>
    </ThemeRepeater>
  </div>
);

storiesOf("NumericInput", module).add("all variations", () => (
  <div>{numericInputVariants}</div>
));
