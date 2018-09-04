import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import Banner, { AVAILABLE_TYPES as BANNER_TYPES } from "@hig/banner";
import readme from "../../README.md";
import ThemeContext from "../ThemeContext";
import HIGLightTheme from "../themes/HIGLightTheme";
import MatrixTheme from "../themes/MatrixTheme";

const themeOptions = {
  "hig-light": "HIG Light",
  matrix: "BIM360 Matrix"
};

const themes = {
  "hig-light": HIGLightTheme,
  matrix: MatrixTheme
};

const themeContextStories = storiesOf("Theming|ThemeContext", module);

themeContextStories.add(
  "themable",
  withInfo({
    propTables: [ThemeContext.Provider, ThemeContext.Consumer],
    propTablesExclude: [Banner],
    /* eslint-disable-next-line react/no-danger */
    text: <div dangerouslySetInnerHTML={{ __html: readme }} />
  })(() => {
    const theme = select("Theme", themeOptions, "hig-light");
    return (
      <ThemeContext.Provider value={themes[theme]}>
        <div>
          {BANNER_TYPES.map(type => (
            <div style={{ marginBottom: "20px" }}>
              <Banner type={type}>{`This ${type} message presented in ${
                themeOptions[theme]
              } theme`}</Banner>
            </div>
          ))}
        </div>
      </ThemeContext.Provider>
    );
  })
);
