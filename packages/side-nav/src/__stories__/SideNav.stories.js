import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import SideNav from "../index";
import ExampleSideNav from "./ExampleSideNav";
import infoOptions from "./infoOptions";

storiesOf("GlobalNav|SideNav", module).add(
  "with icons",
  withInfo({
    ...infoOptions,
    source: true,
    propTables: [
      SideNav.CollapseButton,
      SideNav.Group,
      SideNav.Link,
      SideNav.Module,
      SideNav.Submodule,
    ],
    propTablesExclude: [KnobbedThemeProvider],
  })(() => <KnobbedThemeProvider>{ExampleSideNav()}</KnobbedThemeProvider>)
);
