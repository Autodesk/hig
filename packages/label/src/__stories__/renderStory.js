import React from "react";
import { HIGLightGrayTheme, HIGDarkBlueTheme, ThemeContext } from "@hig/themes";
import DefaultExport from "../index";
import getKnobs from "./getKnobs";

const themes = {
  "hig-light-gray": HIGLightGrayTheme,
  "hig-dark-blue": HIGDarkBlueTheme
};

export default function renderStory(props) {
  const { children, theme, ...otherProps } = getKnobs(props);

  return (
    <ThemeContext.Provider value={themes[theme]}>
      <DefaultExport {...otherProps}>{children}</DefaultExport>
    </ThemeContext.Provider>
  );
}
