import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { anchorPoints } from "../anchorPoints";

const anchorPointOptions = makeSelectOptions(anchorPoints);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  anchorPoint: "Anchor Point",
  content: "Content",
  onClickOutside: "onClickOutside",
  open: "Open"
};

export default function getKnobs(props) {
  const { anchorPoint, content, open, ...otherProps } = props;

  return {
    ...otherProps,
    anchorPoint: select(
      knobLabels.anchorPoint,
      anchorPointOptions,
      anchorPoint,
      knobGroupIds.basic
    ),
    title: text(knobLabels.content, content, knobGroupIds.basic),
    onClickOutside: action(knobLabels.onClickOutside),
    onScroll: action(knobLabels.onScroll),
    open: boolean(knobLabels.open, open, knobGroupIds.basic)
  };
}
