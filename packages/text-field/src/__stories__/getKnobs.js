import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  errorHandling: "Error Handling",
  form: "Form Attributes"
};

const knobLabels = {
  defaultValue: "Initial Value",
  disabled: "Disabled",
  errors: "Error Message",
  hideInstructionsOnErrors: "Hide Instructions for Errors",
  id: "ID",
  icon: "Icon Name",
  instructions: "Instructions",
  label: "Label",
  name: "Name",
  onBlur: "onBlur",
  onChange: "onChange",
  onClearButtonClick: "onClearButtonClick",
  onFocus: "onFocus",
  onInput: "onInput",
  placeholder: "Placeholder",
  required: "Required",
  showClearButton: "Show Clear Button",
  value: "Value"
};

export default function getKnobs(props) {
  const {
    defaultValue,
    disabled,
    errors,
    hideInstructionsOnErrors,
    icon,
    id,
    instructions,
    label,
    name,
    onBlur,
    onChange,
    onClearButtonClick,
    onFocus,
    onInput,
    placeholder,
    required,
    showClearButton,
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
    errors: text(knobLabels.errors, errors, knobGroupIds.errorHandling),
    hideInstructionsOnErrors: boolean(
      knobLabels.hideInstructionsOnErrors,
      hideInstructionsOnErrors,
      knobGroupIds.errorHandling
    ),
    icon: text(knobLabels.icon, icon, knobGroupIds.basic),
    id: text(knobLabels.id, id, knobGroupIds.form),
    instructions: text(
      knobLabels.instructions,
      instructions,
      knobGroupIds.basic
    ),
    label: text(knobLabels.label, label, knobGroupIds.form),
    name: text(knobLabels.name, name, knobGroupIds.form),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onClearButtonClick: action(knobLabels.onClearButtonClick),
    onFocus: action(knobLabels.onFocus),
    onInput: action(knobLabels.onInput),
    placeholder: text(knobLabels.placeholder, placeholder, knobGroupIds.basic),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    showClearButton: boolean(
      knobLabels.showClearButton,
      showClearButton,
      knobGroupIds.basic
    ),
    value: text(knobLabels.value, value, knobGroupIds.form)
  };
}
