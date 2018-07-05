import { action } from "@storybook/addon-actions";
import { boolean, number, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  defaultValue: "Initial Value",
  disabled: "Disabled",
  instructions: "Instructions",
  label: "Label",
  max: "Maximum",
  min: "Minimum",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  onInput: "onInput",
  required: "Required",
  step: "Step",
  value: "Value"
};

export default function getKnobs(props) {
  const {
    defaultValue,
    disabled,
    instructions,
    label,
    max,
    min,
    required,
    step,
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
    max: number(knobLabels.max, max, knobGroupIds.basic),
    min: number(knobLabels.min, min, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    onInput: action(knobLabels.onInput),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    step: number(knobLabels.step, step, knobGroupIds.basic),
    value: text(knobLabels.value, value, knobGroupIds.form)
  };
}
