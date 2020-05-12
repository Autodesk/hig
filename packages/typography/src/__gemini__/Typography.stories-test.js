import React from "react";
import { storiesOf } from "@storybook/react";
import ThemeContext from "@hig/theme-context";

import lightGrayHighTheme from "@hig/theme-data/build/json/lightGrayHighDensityTheme/theme.json";
import lightGrayMediumTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";
import darkGrayHighTheme from "@hig/theme-data/build/json/darkGrayHighDensityTheme/theme.json";
import darkGrayMediumTheme from "@hig/theme-data/build/json/darkGrayMediumDensityTheme/theme.json";
import darkBlueHighTheme from "@hig/theme-data/build/json/darkBlueHighDensityTheme/theme.json";
import darkBlueMediumTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import webLightHighTheme from "@hig/theme-data/build/json/webLightHighDensityTheme/theme.json";
import webLightMediumTheme from "@hig/theme-data/build/json/webLightMediumDensityTheme/theme.json";

import Typography, {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_FONT_WEIGHTS,
  AVAILABLE_VARIANTS
} from "../index";

const themes = [
  lightGrayHighTheme,
  lightGrayMediumTheme,
  darkGrayHighTheme,
  darkGrayMediumTheme,
  darkBlueHighTheme,
  darkBlueMediumTheme,
  webLightHighTheme,
  webLightMediumTheme
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
          marginBottom: resolvedRoles["density.spacings.large"]
        };

        return <div style={style}>{children}</div>;
      }}
    </ThemeContext.Consumer>
  );
}

function TypographyVariantRepeater({ children }) {
  return (
    <div>
      {AVAILABLE_VARIANTS.map(variant =>
        AVAILABLE_FONT_WEIGHTS.map(fontWeight =>
          AVAILABLE_ALIGNMENTS.map(alignment => (
            <Typography
              variant={variant}
              fontWeight={fontWeight}
              align={alignment}
            >
              {children}
            </Typography>
          ))
        )
      )}
    </div>
  );
}

const typographyVariants = (
  <ThemeRepeater>
    <Surface>
      <TypographyVariantRepeater>Render nicely</TypographyVariantRepeater>
    </Surface>
  </ThemeRepeater>
);

storiesOf("Typography", module).add("all variations", () => (
  <div>{typographyVariants}</div>
));
