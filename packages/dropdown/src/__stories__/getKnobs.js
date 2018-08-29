import { action } from "@storybook/addon-actions";
import { boolean, object, text } from "@storybook/addon-knobs/react";
import { controlledObject } from "@hig/storybook/utils";

const knobGroupIds = {
  basic: "Basic",
  advanced: "Advanced"
};

const knobLabels = {
  label: "Label",
  hasTextEntry: "Has Text Entry",
  instructions: "Instructions",
  placeholder: "Placeholder",
  disabled: "Disabled",
  required: "Required",
  multiple: "Multiple",
  onBlur: "onBlur",
  onChange: "onChange",
  onClickOutside: "onClickOutside",
  onFocus: "onFocus",
  onTextEntryChange: "onTextEntryChange",
  options: "Options",
  value: "Value"
};

export default function getKnobs(props) {
  const {
    label = "",
    hasTextEntry = false,
    instructions = "",
    placeholder = "",
    disabled = false,
    required = "",
    multiple = false,
    options = [],
    value,
    ...otherProps
  } = props;

  /**
   * We're using `text` instead of `object` so that we can provide `undefined`
   * when an empty string is given.
   */

  return {
    ...otherProps,
    value: controlledObject(knobLabels.value, value, knobGroupIds.advanced),
    label: text(knobLabels.label, label, knobGroupIds.basic),
    instructions: text(
      knobLabels.instructions,
      instructions,
      knobGroupIds.basic
    ),
    placeholder: text(knobLabels.placeholder, placeholder, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    hasTextEntry: boolean(
      knobLabels.hasTextEntry,
      hasTextEntry,
      knobGroupIds.basic
    ),
    multiple: boolean(knobLabels.multiple, multiple, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onClickOutside: action(knobLabels.onClickOutside),
    onFocus: action(knobLabels.onFocus),
    onTextEntryChange: action(knobLabels.onTextEntryChange),
    options: object(knobLabels.options, options, knobGroupIds.basic)
  };
}
