import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Label from "@hig/label";
import Spacer from "@hig/spacer";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("Forms|RadioButton", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider, Label, Spacer]
    })(() => {
      const props = getProps();

      return <KnobbedThemeProvider>{renderStory(props)}</KnobbedThemeProvider>;
    })
  );
});
