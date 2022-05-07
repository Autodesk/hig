import { withInfo } from "@storybook/addon-info";
import { storiesOf } from "@storybook/react";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";
import Surface from "@hig/surface";
import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("TreeView", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [KnobbedThemeProvider, Surface],
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});
