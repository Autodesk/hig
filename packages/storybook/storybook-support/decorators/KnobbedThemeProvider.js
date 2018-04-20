import React from "react";
import { select } from "@storybook/addon-knobs/react";
import { ThemeContext, HIGLightTheme, HIGDarkBlueTheme, MatrixTheme } from "@hig/themes";

const themeOptions = {
  "hig-light": "HIG Light",
  "hig-dark-blue": "HIG Dark Blue",
  "matrix": "BIM360 Matrix",
}

const themes = {
  "hig-light": HIGLightTheme,
  "hig-dark-blue": HIGDarkBlueTheme,
  "matrix": MatrixTheme,
}

const KnobbedThemeProvider = story => {
  const knobGroup = "Theme";
  const theme = select("Theme", themeOptions, "hig-light", knobGroup);
  return (
    <ThemeContext.Provider value={themes[theme]}>
      {story()}
    </ThemeContext.Provider>
  )
}

export default KnobbedThemeProvider;
