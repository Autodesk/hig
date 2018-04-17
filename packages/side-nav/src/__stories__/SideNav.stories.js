import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs/react";
import { ThemeContext, HIGLightTheme, HIGDarkBlueTheme } from "@hig/themes";
import CollapseButton from "../CollapseButton";

const themeOptions = {
  "hig-light": "HIG Light",
  "hig-dark-blue": "HIG Dark Blue",
}

const themes = {
  "hig-light": HIGLightTheme,
  "hig-dark-blue": HIGDarkBlueTheme,
}

storiesOf("SideNav/_CollapseButton", module).add(
  "default",
  withInfo()(() => {
    const theme = select("Theme", themeOptions, "hig-light");
    return (
      <ThemeContext.Provider value={themes[theme]}>
        <CollapseButton
          onClick={action("onClick")}
          minimized={boolean("Minimized", false)}
        />
      </ThemeContext.Provider>
    );
  })
);
