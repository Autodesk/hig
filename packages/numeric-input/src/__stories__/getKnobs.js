import { action } from "@storybook/addon-actions";
import { boolean, select, number } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  disabled: "Disabled",
  defaultValue: "Default Value",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  step: "Step",
  value: "Value",
  variant: "Variant"
};

const variantOptions = {
  line: "Line",
  box: "Box",
  plain: "Plain"
};

export default function getKnobs(props) {
  const { value, defaultValue, variant, disabled, step, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    defaultValue: number(
      knobLabels.defaultValue,
      defaultValue,
      knobGroupIds.basic
    ),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    step: number(knobLabels.step, step, knobGroupIds.basic),
    variant: select(
      knobLabels.variant,
      variantOptions,
      variant,
      knobGroupIds.basic
    ),
    value: number(knobLabels.value, value, knobGroupIds.basic)
  };
}
