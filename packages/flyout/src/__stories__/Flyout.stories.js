import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import Button from "@hig/button";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("Flyout", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [Button, KnobbedThemeProvider],
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});
