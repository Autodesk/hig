import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  value: "Value",
  disabled: "Disabled",
  error: "Error",
  onChange: "onChange",
  onFocus: "onFocus",
  onBlur: "onBlur",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  variant: "variant"
};

const variantOptions = {
  line: "Line",
  box: "Box",
  plain: "Plain"
};

export default function getKnobs(props) {
  const { value, variant, disabled, error, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    error: boolean(knobLabels.error, error, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    variant: select(
      knobLabels.variant,
      variantOptions,
      variant,
      knobGroupIds.basic
    ),
    value: text(knobLabels.value, value, knobGroupIds.basic)
  };
}
