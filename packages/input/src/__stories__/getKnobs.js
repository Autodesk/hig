import { action } from "@storybook/addon-actions";
import { text, boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  value: "Value",
  disabled: "Disabled",
  onChange: "onChange"
};

export default function getKnobs(props) {
  const { value, disabled, ...otherProps } = props;

  return {
    ...otherProps,
    onChange: action(knobLabels.onChange),
    value: text(knobLabels.value, value, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic)
  };
}
