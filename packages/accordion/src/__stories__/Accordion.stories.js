import React from "react";
import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Typography from "@hig/typography";
import infoOptions from "./infoOptions";
import renderStory from "./renderStory";

const storybook = storiesOf("Accordion", module);

storybook.add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider, Typography],
  })(() =>
    renderStory({
      label: "Foo",
      collapsed: undefined,
      children: <Typography>Bar</Typography>,
    })
  )
);
