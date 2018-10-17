import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RichText from "@hig/rich-text";
import KnobbedThemeProvider, {
  THEMES
} from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { ThemeContext } from "@hig/themes-poc";
import "@hig/rich-text/build/index.css";

import overallReadme from "../../README.md";
import stories from "./stories";
import Role from "./components/Role";
import Header from "./components/Header";
import lightGrayTheme from "../themes/lightGrayTheme";
import darkBlueTheme from "../themes/darkBlueTheme";
import webLightTheme from "../themes/webLightTheme";
import basics from "../basics";

const themeConfigs = {
  "hig-light": webLightTheme.unresolvedRoles,
  "hig-light-gray": lightGrayTheme.unresolvedRoles,
  "hig-dark-blue": darkBlueTheme.unresolvedRoles
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
          {({ resolvedRoles, id }) => (
            <div>
              <Header title={description} />
              {Object.keys(schema).map(role => (
                <Role
                  key={role}
                  role={role}
                  schema={schema[role]}
                  theme={resolvedRoles}
                  themeConfig={themeConfigs[id]}
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
