import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("Button", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider]
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});
