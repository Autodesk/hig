import React from "react";
import PropTypes from "prop-types";
import { select } from "@storybook/addon-knobs/react";
import {
  ThemeContext,
  HIGLightTheme,
  HIGDarkBlueTheme,
  MatrixTheme
} from "@hig/themes";

const themeOptions = {
  "hig-light": "HIG Light",
  "hig-dark-blue": "HIG Dark Blue",
  matrix: "BIM360 Matrix"
};

const themes = {
  "hig-light": HIGLightTheme,
  "hig-dark-blue": HIGDarkBlueTheme,
  matrix: MatrixTheme
};

const KnobbedThemeProvider = ({ children }) => {
  const knobGroup = "Theme";
  const theme = select("Theme", themeOptions, "hig-light", knobGroup);
  return (
    <ThemeContext.Provider value={themes[theme]}>
      {children}
    </ThemeContext.Provider>
  );
};

KnobbedThemeProvider.propTypes = {
  children: PropTypes.node
};

export default KnobbedThemeProvider;
