import { text, select } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  size: "Size",
  spacing: "Spacing"
};

const spacingOptions = {
  XXS: "xxs",
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
  XXL: "xxl"
};

export default function getKnobs(props) {
  const { size, spacing, ...otherProps } = props;

  return {
    ...otherProps,
    size: text(knobLabels.size, size, knobGroupIds.basic),
    spacing: select(
      knobLabels.spacing,
      spacingOptions,
      spacing,
      knobGroupIds.basic
    )
  };
}
