import { select, text } from "@storybook/addon-knobs/react";

import { AVAILABLE_SIZES } from "../availableSizes";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  size: "Size",
  spacing: "Spacing",
  display: "Display"
};

export default function getKnobs(props) {
  const { size, spacing, ...otherProps } = props;

  return {
    ...otherProps,
    size: text(knobLabels.size, size, knobGroupIds.basic),
    spacing: select(knobLabels.spacing, AVAILABLE_SIZES, "m")
  };
}
