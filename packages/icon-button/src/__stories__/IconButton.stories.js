import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Spacer from "@hig/spacer";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("IconButton", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider, Spacer]
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});
