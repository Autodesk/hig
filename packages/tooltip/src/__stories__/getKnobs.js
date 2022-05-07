import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs/react";
import {
  controlledBool,
  controlledNumber,
  makeSelectOptions,
} from "@hig/storybook/utils";

import { anchorPoints } from "@hig/flyout";

const anchorPointOptions = makeSelectOptions(anchorPoints);

const knobGroupIds = {
  basic: "Basic",
};

const knobLabels = {
  anchorPoint: "Anchor Point",
  maxHeight: "Max Height",
  onClickOutside: "onClickOutside",
  onScroll: "onScroll",
  open: "Open",
  openOnHover: "openOnHover",
};

export default function getKnobs(props) {
  const {
    anchorPoint = anchorPoints.TOP_CENTER,
    maxHeight,
    open,
    openOnHover,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    anchorPoint: select(
      knobLabels.anchorPoint,
      anchorPointOptions,
      anchorPoint,
      knobGroupIds.basic
    ),
    maxHeight: controlledNumber(
      knobLabels.maxHeight,
      maxHeight,
      knobGroupIds.basic
    ),
    onClickOutside: action(knobLabels.onClickOutside),
    onScroll: action(knobLabels.onScroll),
    open: controlledBool(knobLabels.open, open, knobGroupIds.basic),
    openOnHover: boolean(
      knobLabels.openOnHover,
      openOnHover,
      knobGroupIds.basic
    ),
  };
}
