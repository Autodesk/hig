import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import ProgressRing from "../index";
import availableSizes from "../availableSizes";

import infoOptions from "./infoOptions";

const storybook = storiesOf("ProgressRing", module);

storybook.add(
  "determinate",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider]
  })(() => (
    <KnobbedThemeProvider>
      <ProgressRing
        percentComplete={text("Percent Complete", "33")}
        size={select("size", availableSizes, "m")}
      />
    </KnobbedThemeProvider>
  ))
);
storybook.add(
  "indeterminate",
  withInfo(infoOptions)(() => (
    <KnobbedThemeProvider>
      <ProgressRing size={select("size", availableSizes, "m")} />
    </KnobbedThemeProvider>
  ))
);
