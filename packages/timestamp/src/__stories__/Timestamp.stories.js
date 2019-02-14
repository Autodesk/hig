import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import Timestamp from "../Timestamp";
import infoOptions from "./infoOptions";

const now = new Date();

storiesOf("Timestamp", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider]
  })(() => (
    <KnobbedThemeProvider>
      <Timestamp timestamp={text("Timestamp", now.toISOString())} />
    </KnobbedThemeProvider>
  ))
);
