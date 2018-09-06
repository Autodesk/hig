import { text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  size: "Size",
  spacing: "Spacing",
  display: "Display"
};

export default function getKnobs(props) {
  const { size, spacing, display, ...otherProps } = props;

  return {
    ...otherProps,
    size: text(knobLabels.size, size, knobGroupIds.basic),
    spacing: text(knobLabels.spacing, spacing, knobGroupIds.basic),
    display: text(knobLabels.display, display, knobGroupIds.basic)
  };
}
