import React from "react";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import infoOptions from "./infoOptions";
import Role from "./components/Role";
import theme from "../themes/lightGrayThemeConfig/theme";
import themeConfig from "../themes/lightGrayThemeConfig/themeConfig";
import schema from "../theme-schema";

const storybook = storiesOf("Theme data", module);

storybook.add(
  "Basics",
  withInfo(infoOptions)(() =>
    Object.keys(schema).map(role => (
      <Role
        role={role}
        schema={schema[role]}
        theme={theme}
        themeConfig={themeConfig}
      />
    ))
  )
);
