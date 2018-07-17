import { text, boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  value: "Value",
  disabled: "Disabled",
  theme: "Theme"
};

export default function getKnobs(props) {
  const { value, disabled, ...otherProps } = props;

  return {
    ...otherProps,
    value: text(knobLabels.value, value, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic)
  };
}
