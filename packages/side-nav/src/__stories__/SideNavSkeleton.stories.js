import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { select } from "@storybook/addon-knobs/react";
import { ThemeContext, HIGLightTheme, HIGDarkBlueTheme } from "@hig/themes";
import SideNavSkeleton from "../SideNavSkeleton";

const themeOptions = {
  "hig-light": "HIG Light",
  "hig-dark-blue": "HIG Dark Blue",
}

const themes = {
  "hig-light": HIGLightTheme,
  "hig-dark-blue": HIGDarkBlueTheme,
}

storiesOf("SideNav/SideNavSkeleton", module).add(
  "default",
  withInfo()(() => {
    const theme = select("Theme", themeOptions, "hig-light");
    return (
      <ThemeContext.Provider value={themes[theme]}>
        <SideNavSkeleton />
      </ThemeContext.Provider>
    );
  })
);
