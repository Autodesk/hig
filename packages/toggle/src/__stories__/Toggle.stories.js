import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import stories from "./stories";
import infoOptions from "./infoOptions";
import renderStory from "./renderStory";

const storybook = storiesOf("Forms|Toggle", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider],
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});
