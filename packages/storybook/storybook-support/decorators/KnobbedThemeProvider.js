import React from "react";
import PropTypes from "prop-types";
import { select } from "@storybook/addon-knobs/react";
import {
  ThemeContext,
  HIGLightTheme,
  HIGLightGrayTheme,
  HIGDarkBlueTheme,
  HIGLightHighDensityTheme,
  HIGLightGrayHighDensityTheme,
  HIGDarkBlueHighDensityTheme,
  MatrixTheme
} from "@hig/themes";

const densityThemes = {
  "high-density": {
    "hig-light": HIGLightHighDensityTheme,
    "hig-light-gray": HIGLightGrayHighDensityTheme,
    "hig-dark-blue": HIGDarkBlueHighDensityTheme,
    matrix: MatrixTheme
  },
  "medium-density": {
    "hig-light": HIGLightTheme,
    "hig-light-gray": HIGLightGrayTheme,
    "hig-dark-blue": HIGDarkBlueTheme,
    matrix: MatrixTheme
  }
};

const densityOptions = {
  "high-density": "High",
  "medium-density": "Medium"
};

const DEFAULT_THEME_ID = "hig-light";
const DEFAULT_DENSITY = "medium-density";

const COLOR_THEME_IDS = {
  WEB_LIGHT: "hig-light",
  LIGHT_GRAY: "hig-light-gray",
  DARK_BLUE: "hig-dark-blue",
  MATRIX: "matrix"
};

function themeOptions(themeIds) {
  return themeIds.reduce((acc, themeId) => {
    const theme = densityThemes["medium-density"][themeId];
    return {
      ...acc,
      [theme.themeId]: theme.themeName
    };
  }, {});
}

function Surface({ children }) {
  return (
    <ThemeContext.Consumer>
      {({ themeData }) => (
        <div
          style={{
            backgroundColor: themeData["colorScheme.surfaceLevel1Color"],
            padding: themeData["density.spacings.XL"],
            margin: `-${themeData["density.spacings.XL"]}`,
            borderRadius: themeData["basics.borderRadii.M"],
            transiton: "all 0.3s",
            minHeight: "20vh"
          }}
        >
          {children}
        </div>
      )}
    </ThemeContext.Consumer>
  );
}

Surface.propTypes = {
  children: PropTypes.node
};

const KnobbedThemeProvider = ({ children, supportedThemes }) => {
  const knobGroup = "Theme";
  const themeId = select(
    "Color scheme",
    themeOptions(supportedThemes),
    DEFAULT_THEME_ID,
    knobGroup
  );
  const densityId = select(
    "Density",
    densityOptions,
    DEFAULT_DENSITY,
    knobGroup
  );
  const theme = densityThemes[densityId][themeId];

  return (
    <ThemeContext.Provider value={theme}>
      <Surface>{children}</Surface>
    </ThemeContext.Provider>
  );
};

KnobbedThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  supportedThemes: PropTypes.arrayOf(
    PropTypes.oneOf(Object.values(COLOR_THEME_IDS))
  )
};

KnobbedThemeProvider.defaultProps = {
  supportedThemes: [DEFAULT_THEME_ID],
  supportedDensities: [DEFAULT_DENSITY]
};

export default KnobbedThemeProvider;
export { COLOR_THEME_IDS as THEMES };
