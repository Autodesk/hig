import React from "react";
import ThemeContext from "@weave-design/theme-context";
import HIGDarkBlueTheme from "@weave-design/theme-data/build/json/darkBlueMediumDensityTheme/theme.json";
import Surface from "@weave-design/surface";

export default function DarkSurface(props) {
  return (
    <ThemeContext.Provider value={HIGDarkBlueTheme}>
      <Surface {...props} />
    </ThemeContext.Provider>
  );
};
