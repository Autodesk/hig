import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text, select, boolean } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import { makeSelectOptions } from "@hig/storybook/utils";

import { Button } from "hig-react";
import Banner from "../Banner";

const typeOptions = makeSelectOptions(Banner.types);
const placementOptions = makeSelectOptions(Banner.placements);

const knobGroupIds = {
  basic: "Basic",
  animation: "Animation",
  a11y: "Accessibility",
  actions: "Actions"
};

const knobLabels = {
  type: "Style",
  children: "Message",
  placement: "Placement",
  isVisible: "Visible",
  label: "Label",
  dismissButtonTitle: "Dismiss title",
  onDismiss: "Banner dismissed"
};

function getBannerKnobs(props) {
  const {
    type,
    placement,
    children,
    isVisible = true,
    label,
    dismissButtonTitle,
    onDismiss,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic),
    children: text(knobLabels.children, children, knobGroupIds.basic),
    placement: select(
      knobLabels.placement,
      placementOptions,
      placement,
      knobGroupIds.animation
    ),
    isVisible: boolean(knobLabels.isVisible, isVisible, knobGroupIds.animation),
    label: text(knobLabels.label, label, knobLabels.a11y),
    dismissButtonTitle: text(
      knobLabels.dismissButtonTitle,
      dismissButtonTitle,
      knobGroupIds.a11y
    ),
    onDismiss: action(knobLabels.onDismiss, onDismiss, knobGroupIds.actions)
  };
}

const bannerStories = storiesOf("Banner", module);

bannerStories.add("default", withInfo({
  propTables: [Banner]
})(() => {
  const { children, ...otherProps } = getBannerKnobs({});
  return (<Banner {...otherProps}>{children}</Banner>)
}));

bannerStories.add("verbose, with interactions", withInfo({
  propTables: [Banner]
})(() => {
  const props = {
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
  const { children, ...otherProps } = getBannerKnobs(props);
  return (<Banner {...otherProps}>{children}</Banner>)
}));
