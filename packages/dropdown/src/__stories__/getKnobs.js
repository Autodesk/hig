import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  label: "Label",
  instructions: "Instructions",
  placeholder: "Placeholder",
  open: "Open",
  disabled: "Disabled",
  required: "Required",
  onBlur: "onBlur",
  onChange: "onChange",
  onClickOutside: "onClickOutside",
  onFocus: "onFocus",
  onKeypress: "onKeypress",
  onTargetClick: "onTargetClick",
  selectedOptionLabel: "Selected Option Label"
};

export default function getKnobs(props) {
  const {
    label,
    instructions,
    placeholder,
    open,
    disabled,
    required,
    selectedOptionLabel,
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
    open: boolean(knobLabels.open, open, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onClickOutside: action(knobLabels.onClickOutside),
    onFocus: action(knobLabels.onFocus),
    onKeypress: action(knobLabels.onKeypress),
    onTargetClick: action(knobLabels.onTargetClick),
    selectedOptionLabel: text(
      knobLabels.selectedOptionLabel,
      selectedOptionLabel,
      knobGroupIds.basic
    )
  };
}
