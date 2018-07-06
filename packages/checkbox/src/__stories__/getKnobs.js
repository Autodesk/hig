import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  disabled: "Disabled",
  indeterminate: "Indeterminate",
  label: "Label",
  name: "Name",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  required: "Required",
  value: "Value"
};

export default function getKnobs(props) {
  const {
    disabled,
    indeterminate,
    label,
    name,
    required,
    value,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    indeterminate: boolean(
      knobLabels.indeterminate,
      indeterminate,
      knobGroupIds.basic
    ),
    label: text(knobLabels.label, label, knobGroupIds.basic),
    name: text(knobLabels.name, name, knobGroupIds.form),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    value: text(knobLabels.value, value, knobGroupIds.form)
  };
}
