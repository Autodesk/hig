import { action } from "@storybook/addon-actions";
import { boolean, object, select, text } from "@storybook/addon-knobs/react";
import { controlledObject } from "@hig/storybook/utils";

const knobGroupIds = {
  basic: "Basic",
  advanced: "Advanced",
};

const knobLabels = {
  variant: "Variant",
  placeholder: "Placeholder",
  disabled: "Disabled",
  error: "Error",
  required: "Required",
  multiple: "Multiple",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  options: "Options",
  value: "Value",
};

const variantOptions = {
  line: "Line",
  box: "Box",
};

export default function getKnobs(props) {
  const {
    placeholder = "",
    disabled = false,
    error = false,
    required = "",
    multiple = false,
    options = [],
    value,
    variant,
    ...otherProps
  } = props;

  /**
   * We're using `text` instead of `object` so that we can provide `undefined`
   * when an empty string is given.
   */

  return {
    ...otherProps,
    variant: select(
      knobLabels.variant,
      variantOptions,
      variant,
      knobGroupIds.basic
    ),
    value: controlledObject(knobLabels.value, value, knobGroupIds.advanced),
    placeholder: text(knobLabels.placeholder, placeholder, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    error: boolean(knobLabels.error, error, knobGroupIds.basic),
    required: text(knobLabels.required, required, knobGroupIds.basic),
    multiple: boolean(knobLabels.multiple, multiple, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    options: object(knobLabels.options, options, knobGroupIds.basic),
  };
}
