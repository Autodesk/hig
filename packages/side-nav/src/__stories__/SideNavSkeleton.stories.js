import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import SideNavSkeleton from "../SideNavSkeleton";

storiesOf("SideNav/SideNavSkeleton", module).add(
  "default",
  withInfo({
    propTablesExclude: [KnobbedThemeProvider]
  })(() => (
    <KnobbedThemeProvider>
      <SideNavSkeleton />
    </KnobbedThemeProvider>
  ))
);
