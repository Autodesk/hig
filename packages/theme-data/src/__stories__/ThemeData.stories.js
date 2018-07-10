import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RichText from "@hig/rich-text";

import overallReadme from "../../README.md";
import stories from "./stories";
import Role from "./components/Role";
import Header from "./components/Header";
import theme, { config as themeConfig } from "../themes/lightGrayTheme";
import basics from "../basics";

const storybook = storiesOf("Theme data", module);

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
      propTablesExclude: [Role, Header],
      source: false,
      text: readme ? (
        <RichText dangerouslySetInnerHTML={{ __html: readme }} />
      ) : null
    })(() => (
      <div>
        <Header title={description} />
        {Object.keys(schema).map(role => (
          <Role
            role={role}
            schema={schema[role]}
            theme={theme}
            themeConfig={themeConfig}
            basics={basics}
          />
        ))}
      </div>
    ))
  );
});
