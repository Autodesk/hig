import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import infoOptions from "./infoOptions";
import renderStory from "./renderStory";
import stories from "./stories";

const storybook = storiesOf("Forms|TextArea", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo(infoOptions)(() => {
      const props = getProps();
      return renderStory(props);
    })
  );
});
