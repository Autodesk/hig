import { action } from "@storybook/addon-actions";
import { boolean, object, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  label: "Label",
  instructions: "Instructions",
  placeholder: "Placeholder",
  disabled: "Disabled",
  required: "Required",
  multiple: "Multiple",
  onBlur: "onBlur",
  onChange: "onChange",
  onClickOutside: "onClickOutside",
  onFocus: "onFocus",
  options: "Options"
};

export default function getKnobs(props) {
  const {
    label,
    instructions,
    placeholder,
    disabled,
    required,
    multiple,
    options,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    label: text(knobLabels.label, label, knobGroupIds.basic),
    instructions: text(
      knobLabels.instructions,
      instructions,
      knobGroupIds.basic
    ),
    placeholder: text(knobLabels.placeholder, placeholder, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    multiple: boolean(knobLabels.multiple, multiple, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onClickOutside: action(knobLabels.onClickOutside),
    onFocus: action(knobLabels.onFocus),
    options: object(knobLabels.options, options, knobGroupIds.basic)
  };
}
