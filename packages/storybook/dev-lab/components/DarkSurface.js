import React from "react";
import ThemeContext from "@hig/theme-context";
import HIGDarkBlueTheme from "@hig/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import Surface from "@hig/surface";

export default function DarkSurface(props) {
  return (
    <ThemeContext.Provider value={HIGDarkBlueTheme}>
      <Surface {...props} />
    </ThemeContext.Provider>
  );
};
