import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import infoOptions from "./infoOptions";
import stories from "./stories";
import Role from "./components/Role";
import theme from "../themes/lightGrayThemeConfig/theme";
import themeConfig from "../themes/lightGrayThemeConfig/themeConfig";
import basics from "../basics";

const storybook = storiesOf("Theme data", module);

storybook.add("Readme", withInfo(infoOptions)(() => null));

stories.forEach(({ description, schema }) => {
  storybook.add(description, () => (
    <div>
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
  ));
});
