import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes"
};

const knobLabels = {
  value: "Value",
  step: "Step",
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
  box: "Box"
};

export default function getKnobs(props) {
  const { disabled, variant, onBlur, onChange, onFocus, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    variant: select(
      knobLabels.variant,
      variantOptions,
      variant,
      knobGroupIds.basic
    ),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus)
  };
}
