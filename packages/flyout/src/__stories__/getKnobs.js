import { action } from "@storybook/addon-actions";
import { boolean, number, select } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { anchorPoints } from "../anchorPoints";

const anchorPointOptions = makeSelectOptions(anchorPoints);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  anchorPoint: "Anchor Point",
  maxHeight: "Max Height",
  onClickOutside: "onClickOutside",
  onScroll: "onScroll",
  open: "Open"
};

export default function getKnobs(props) {
  const { anchorPoint, maxHeight, open, ...otherProps } = props;

  return {
    ...otherProps,
    anchorPoint: select(
      knobLabels.anchorPoint,
      anchorPointOptions,
      anchorPoint,
      knobGroupIds.basic
    ),
    maxHeight: number(knobLabels.maxHeight, maxHeight, {}, knobGroupIds.basic),
    onClickOutside: action(knobLabels.onClickOutside),
    onScroll: action(knobLabels.onScroll),
    open: boolean(knobLabels.open, open, knobGroupIds.basic)
  };
}
