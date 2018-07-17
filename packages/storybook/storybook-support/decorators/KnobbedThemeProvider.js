import React from "react";
import PropTypes from "prop-types";
import { select } from "@storybook/addon-knobs/react";
import {
  ThemeContext,
  HIGLightTheme,
  HIGLightGrayTheme,
  HIGDarkBlueTheme,
  MatrixTheme
} from "@hig/themes";

const themes = {
  "hig-light": HIGLightTheme,
  "hig-light-gray": HIGLightGrayTheme,
  "hig-dark-blue": HIGDarkBlueTheme,
  matrix: MatrixTheme
};

const DEFAULT_THEME_ID = "hig-light";

const THEME_IDS = {
  WEB_LIGHT: "hig-light",
  LIGHT_GRAY: "hig-light-gray",
  DARK_BLUE: "hig-dark-blue",
  MATRIX: "matrix"
};

function themeOptions(themeIds) {
  return themeIds.reduce((acc, themeId) => {
    const theme = themes[themeId];
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
            backgroundColor: themeData["COLOR_SCHEME.SURFACE_LEVEL_1_COLOR"],
            padding: themeData["DENSITY.SPACINGS.XL"],
            margin: `-${themeData["DENSITY.SPACINGS.XL"]}`,
            borderRadius: themeData["BASICS.BORDER_RADII.M"],
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
    "Theme",
    themeOptions(supportedThemes),
    DEFAULT_THEME_ID,
    knobGroup
  );
  const theme = themes[themeId];

  return (
    <ThemeContext.Provider value={theme}>
      <Surface>{children}</Surface>
    </ThemeContext.Provider>
  );
};

KnobbedThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  supportedThemes: PropTypes.arrayOf(PropTypes.oneOf(Object.values(THEME_IDS)))
};

KnobbedThemeProvider.defaultProps = {
  supportedThemes: [DEFAULT_THEME_ID]
};

export default KnobbedThemeProvider;
export { THEME_IDS as THEMES };
