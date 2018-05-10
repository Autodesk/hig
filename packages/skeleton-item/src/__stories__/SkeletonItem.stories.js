import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import SkeletonItem from "../SkeletonItem";
import infoOptions from "./infoOptions";

storiesOf("SkeletonItem", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider]
  })(() => (
    <KnobbedThemeProvider>
      <div>
        <SkeletonItem
          maxWidth={text("Max Width", "400px")}
          marginBottom={text("Margin Bottom", "24px")}
        />
        <SkeletonItem maxWidth="240px" marginBottom="24px" />
      </div>
    </KnobbedThemeProvider>
  ))
);
