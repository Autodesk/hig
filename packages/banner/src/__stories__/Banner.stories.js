import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import { selectLanguage } from "./getKnobs";
import infoOptions from "./infoOptions";
import renderBannerStory from "./renderBannerStory";
import stories from "./stories";

const storybook = storiesOf("Notifications|Banner", module);

stories.forEach(({ description, getProps }) => {
  storybook.add(
    description,
    withInfo(infoOptions)(() => {
      const language = selectLanguage();
      const props = getProps({ language });

      return renderBannerStory(props);
    })
  );
});
