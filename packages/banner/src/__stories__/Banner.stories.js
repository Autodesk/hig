import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs/react";

import { Button } from "hig-react";
import Banner from "../Banner";

function getBannerKnobs(props) {
  const {
    type,
    placement,
    label,
    message,
    dismissButtonTitle,
    onDismiss,
    ...otherProps
  } = props;

  return {
    type: select("Type", Banner.AVAILABLE_TYPES, type),
    placement: select("Placement", Banner.AVAILABLE_PLACEMENTS, placement),
    label: text("Label", label),
    message: text("Message", message),
    dismissButtonTitle: text("Dismiss title", dismissButtonTitle),
    onDismiss: action("Banner dismissed", onDismiss),
    labelId: "unique-id",
    isVisible: true,
    ...otherProps
  };
}

function BannerDemo({ children, ...props }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <Banner {...getBannerKnobs(props)}>{children}</Banner>
    </div>
  );
}

function BannerStory({ props }) {
  return <BannerDemo {...props} />;
}

const bannerStories = storiesOf("Banner", module);

const stories = [
  {
    description: "default",
    props: {}
  },
  {
    description: "verbose, with interactions",
    props: {
      type: Banner.types.WARNING,
      label: "PROCESS COMPLETE",
      // eslint-disable-next-line max-len
      message:
        "Changes have been made to you document. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      /** @todo Cleanup/refactor */
      children: ({ isWrappingActions }) => (
        <Banner.Interactions isWrappingActions={isWrappingActions}>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text("Resolve text", "Accept Changes")}
            />
          </Banner.Action>
          <Banner.Action>
            <Button
              type="secondary"
              size="small"
              width={isWrappingActions ? "grow" : "shrink"}
              title={text("Reject text", "Reject Changes")}
            />
          </Banner.Action>
        </Banner.Interactions>
      )
    }
  }
];

stories.forEach(({ description, props }) => {
  bannerStories.add(description, () => <BannerStory props={props} />);
});
