import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import RichText from "@hig/rich-text";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";
import ControlledTabs from "./controlledStory";

const storybook = storiesOf("Tabs", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider, RichText]
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});

storybook.add(
  "controlled tabs",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider, RichText, ControlledTabs]
  })(() => (
    <KnobbedThemeProvider>
      <ControlledTabs />
    </KnobbedThemeProvider>
  ))
);
