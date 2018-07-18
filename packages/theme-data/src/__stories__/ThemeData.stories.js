import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RichText from "@hig/rich-text";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { ThemeContext } from "@hig/themes";

import overallReadme from "../../README.md";
import stories from "./stories";
import Role from "./components/Role";
import Header from "./components/Header";
import { config as lightGrayThemeConfig } from "../themes/lightGrayTheme";
import { config as darkBlueThemeConfig } from "../themes/darkBlueTheme";
import { config as webLightThemeConfig } from "../themes/webLightTheme";
import basics from "../basics";

const themeConfigs = {
  "hig-light": webLightThemeConfig,
  "hig-light-gray": lightGrayThemeConfig,
  "hig-dark-blue": darkBlueThemeConfig
};

const storybook = storiesOf("Theming|Theme data", module);

storybook.add(
  "Readme",
  withInfo({
    propTables: [],
    source: false,
    text: <RichText dangerouslySetInnerHTML={{ __html: overallReadme }} />
  })(() => null)
);

stories.forEach(({ description, schema, readme }) => {
  storybook.add(
    description,
    withInfo({
      propTablesExclude: [Role, Header, KnobbedThemeProvider],
      source: false,
      text: readme ? (
        <RichText dangerouslySetInnerHTML={{ __html: readme }} />
      ) : null
    })(() => (
      <KnobbedThemeProvider
        supportedThemes={[
          THEMES.LIGHT_GRAY,
          THEMES.WEB_LIGHT,
          THEMES.DARK_BLUE
        ]}
      >
        <ThemeContext.Consumer>
          {({ themeData, themeId }) => (
            <div>
              <Header title={description} />
              {Object.keys(schema).map(role => (
                <Role
                  role={role}
                  schema={schema[role]}
                  theme={themeData}
                  themeConfig={themeConfigs[themeId]}
                  basics={basics}
                />
              ))}
            </div>
          )}
        </ThemeContext.Consumer>
      </KnobbedThemeProvider>
    ))
  );
});
