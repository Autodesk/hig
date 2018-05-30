import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  defaultValue: "Initial Value",
  disabled: "Disabled",
  instructions: "Instructions",
  label: "Label",
  name: "Name",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  onInput: "onInput",
  placeholder: "Placeholder",
  required: "Required",
  value: "Value"
};

export default function getKnobs(props) {
  const {
    defaultValue,
    disabled,
    instructions,
    label,
    name,
    onBlur,
    onChange,
    onFocus,
    onInput,
    placeholder,
    required,
    value,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    defaultValue: text(
      knobLabels.defaultValue,
      defaultValue,
      knobGroupIds.basic
    ),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    instructions: text(
      knobLabels.instructions,
      instructions,
      knobGroupIds.basic
    ),
    label: text(knobLabels.label, label, knobGroupIds.form),
    name: text(knobLabels.name, name, knobGroupIds.form),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    onInput: action(knobLabels.onInput),
    placeholder: text(knobLabels.placeholder, placeholder, knobGroupIds.basic),
    required: boolean(knobLabels.required, required, knobGroupIds.basic),
    value: text(knobLabels.value, value, knobGroupIds.form)
  };
}
