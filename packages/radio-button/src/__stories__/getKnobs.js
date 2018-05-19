import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  checked: "Checked",
  defaultChecked: "Initially checked",
  disabled: "Disabled",
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
    checked,
    defaultChecked,
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
    checked: boolean(knobLabels.checked, checked, knobGroupIds.basic),
    defaultChecked: boolean(
      knobLabels.defaultChecked,
      defaultChecked,
      knobGroupIds.basic
    ),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    label: text(knobLabels.label, label, knobGroupIds.basic),
    name: text(knobLabels.name, name, knobGroupIds.form),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    value: text(knobLabels.value, value, knobGroupIds.form)
  };
}
