import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { ThemeContext, HIGLightTheme, HIGDarkBlueTheme } from "@hig/themes";

import SkeletonItem from "../SkeletonItem";

const themeOptions = {
  "hig-light": "HIG Light",
  "hig-dark-blue": "HIG Dark Blue"
};

const themes = {
  "hig-light": HIGLightTheme,
  "hig-dark-blue": HIGDarkBlueTheme
};

storiesOf("SkeletonItem", module).add(
  "default",
  withInfo()(() => {
    const theme = select("Theme", themeOptions, "hig-light");
    return (
      <ThemeContext.Provider value={themes[theme]}>
        <div>
          <SkeletonItem
            maxWidth={text("Max Width", "400px")}
            marginBottom={text("Margin Bottom", "24px")}
          />
          <SkeletonItem maxWidth="240px" marginBottom="24px" />
        </div>
      </ThemeContext.Provider>
    );
  })
);
