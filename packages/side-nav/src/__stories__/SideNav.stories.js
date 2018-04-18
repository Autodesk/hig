import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import { ThemeContext, HIGLightTheme, HIGDarkBlueTheme } from "@hig/themes";
import CollapseButton from "../CollapseButton";
import Submodule from "../Submodule";

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

storiesOf("SideNav/_Submodule", module).add(
  "default",
  withInfo()(() => {
    const theme = select("Theme", themeOptions, "hig-light");
    return (
      <ThemeContext.Provider value={themes[theme]}>
        <Submodule
          active={boolean("Active", true)}
          onClick={action("onClick")}
          onHover={action("onHover")}
          title={text("Title", "Submodule")}
          link={text("Link", "https://www.autodesk.com")}
          target={select("Link Target", ["_self", "_blank", "_parent", "_top"])}
        />
      </ThemeContext.Provider>
    )
  })
);
