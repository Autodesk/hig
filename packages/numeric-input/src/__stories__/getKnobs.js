import { action } from "@storybook/addon-actions";
import { boolean, select, number } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  value: "Value",
  initialValue: "Initial Value",
  disabled: "Disabled",
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
  const { value, initialValue, variant, disabled, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
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
    initialValue: number(
      knobLabels.initialValue,
      initialValue,
      knobGroupIds.basic
    ),
    value: number(knobLabels.value, value, knobGroupIds.basic)
  };
}
