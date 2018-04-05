import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs/react";

import { Button } from "hig-react";
import Banner from "../Banner";

function getBannerKnobs(props) {
  const {
    type,
    children,
    label,
    dismissButtonTitle,
    onDismiss,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    type: select("Type", Banner.AVAILABLE_TYPES, type),
    children: text("Message", children),
    label: text("Label", label),
    dismissButtonTitle: text("Dismiss title", dismissButtonTitle),
    onDismiss: action("Banner dismissed", onDismiss)
  };
}

function BannerDemo(props) {
  const { children, ...otherProps } = getBannerKnobs(props);

  return (
    <div style={{ marginBottom: "15px" }}>
      <Banner {...otherProps}>{children}</Banner>
    </div>
  );
}

function BannerStory({ props }) {
  return <BannerDemo {...props} />;
}

const stories = [
  {
    description: "default",
    props: {}
  },
  {
    description: "verbose, with interactions",
    props: {
      type: Banner.types.WARNING,
      children:
        // eslint-disable-next-line max-len
        "PROCESS COMPLETE: Changes have been made to you document. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      /** @todo Cleanup/refactor */
      actions: ({ isWrappingActions }) => (
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

const bannerStories = storiesOf("Banner", module);

stories.forEach(({ description, props }) => {
  bannerStories.add(description, () => <BannerStory props={props} />);
});
