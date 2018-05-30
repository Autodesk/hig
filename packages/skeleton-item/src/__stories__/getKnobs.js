import { text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  marginBottom: "Margin Bottom",
  maxWidth: "Max Width"
};

export default function getKnobs(props) {
  const { marginBottom, maxWidth, ...otherProps } = props;

  return {
    ...otherProps,
    marginBottom: text(
      knobLabels.marginBottom,
      marginBottom,
      knobGroupIds.basic
    ),
    maxWidth: text(knobLabels.maxWidth, maxWidth, knobGroupIds.basic)
  };
}
