import React from "react";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import Banner, { AVAILABLE_TYPES as BANNER_TYPES } from "@hig/banner";
import readme from "../../README.md";
import ThemeContext from "../ThemeContext";

const themeContextStories = storiesOf("Theming|ThemeContext", module);

themeContextStories.add(
  "themable",
  withInfo({
    propTables: [ThemeContext.Provider, ThemeContext.Consumer],
    propTablesExclude: [Banner],
    text: <div dangerouslySetInnerHTML={{ __html: readme }} />
  })(() => (
    <KnobbedThemeProvider supportedThemes={[THEMES.WEB_LIGHT, THEMES.MATRIX]}>
      <ThemeContext.Consumer>
        {({ themeName }) => (
          <div>
            {BANNER_TYPES.map(type => (
              <div style={{ marginBottom: "20px" }} key={type}>
                <Banner
                  type={type}
                >{`This ${type} message presented in ${themeName} theme`}</Banner>
              </div>
            ))}
          </div>
        )}
      </ThemeContext.Consumer>
    </KnobbedThemeProvider>
  ))
);
