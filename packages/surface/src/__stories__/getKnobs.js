import { select, text } from "@storybook/addon-knobs/react";

import {
  AVAILABLE_LEVELS,
  AVAILABLE_SPACINGS,
  AVAILABLE_SHADOWS,
  AVAILABLE_BORDER_RADII
} from "../constants";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  level: "Level",
  horizontalPadding: "Horizontal padding",
  verticalPadding: "Vertical padding",
  shadow: "Shadow",
  borderRadius: "Border radius",
  tagName: "Tag name"
};

export default function getKnobs(props) {
  return {
    ...props,
    level: select(knobLabels.level, AVAILABLE_LEVELS, 100, knobGroupIds.basic),
    horizontalPadding: select(
      knobLabels.horizontalPadding,
      AVAILABLE_SPACINGS,
      "m",
      knobGroupIds.basic
    ),
    verticalPadding: select(
      knobLabels.verticalPadding,
      AVAILABLE_SPACINGS,
      "m",
      knobGroupIds.basic
    ),
    shadow: select(
      knobLabels.shadow,
      AVAILABLE_SHADOWS,
      "low",
      knobGroupIds.basic
    ),
    borderRadius: select(
      knobLabels.borderRadius,
      AVAILABLE_BORDER_RADII,
      "l",
      knobGroupIds.basic
    ),
    tagName: text(knobLabels.tagName, "div", knobGroupIds.basic)
  };
}
