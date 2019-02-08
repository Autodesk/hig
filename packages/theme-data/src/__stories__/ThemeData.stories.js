import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RichText from "@hig/rich-text";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import { ThemeContext } from "@hig/theme-context";

import overallReadme from "../../README.md";
import stories from "./stories";
import Role from "./components/Role";
import Header from "./components/Header";
import lightGrayTheme from "../colorSchemes/lightGray/unresolvedRoles";
import darkBlueTheme from "../colorSchemes/darkBlue/unresolvedRoles";
import webLightTheme from "../colorSchemes/webLight/unresolvedRoles";
import basics from "../basics";

const themeConfigs = {
  "hig-light": webLightTheme,
  "hig-light-gray": lightGrayTheme,
  "hig-dark-blue": darkBlueTheme
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
      <KnobbedThemeProvider>
        <ThemeContext.Consumer>
          {({ resolvedRoles, metadata }) => (
            <div>
              <Header title={description} />
              {Object.keys(schema).map(role => (
                <Role
                  key={role}
                  role={role}
                  schema={schema[role]}
                  theme={resolvedRoles}
                  themeConfig={themeConfigs[metadata.colorSchemeId]}
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
