import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Button from "@hig/button";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("Tooltip", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo({
      ...infoOptions,
      propTablesExclude: [Button]
    })(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});
