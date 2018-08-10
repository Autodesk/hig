import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  disabled: "Disabled",
  label: "Label",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus"
};

export default function getKnobs(props) {
  const { disabled = false, label = "", ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    label: text(knobLabels.label, label, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus)
  };
}
