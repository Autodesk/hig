import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import SideNavSkeleton from "../SideNavSkeleton";
import infoOptions from "./infoOptions";

storiesOf("GlobalNav|SideNav/SideNavSkeleton", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTables: [SideNavSkeleton],
    propTablesExclude: [KnobbedThemeProvider],
  })(() => (
    <KnobbedThemeProvider>
      <SideNavSkeleton />
    </KnobbedThemeProvider>
  ))
);
