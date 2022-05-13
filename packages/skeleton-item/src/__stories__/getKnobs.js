import { text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
};

const knobLabels = {
  marginBottom: "Margin Bottom",
  maxWidth: "Max Width",
  height: "Height",
};

export default function getKnobs(props) {
  const { marginBottom, maxWidth, height, ...otherProps } = props;

  return {
    ...otherProps,
    marginBottom: text(
      knobLabels.marginBottom,
      marginBottom,
      knobGroupIds.basic
    ),
    maxWidth: text(knobLabels.maxWidth, maxWidth, knobGroupIds.basic),
    height: text(knobLabels.height, height, knobGroupIds.basic),
  };
}
