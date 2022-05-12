import { action } from "@storybook/addon-actions";
import { boolean, number, select, text } from "@storybook/addon-knobs/react";
import { controlledText, makeSelectOptions } from "@hig/storybook/utils";

import { sliderTypes } from "../constants";

const typeOptions = makeSelectOptions(sliderTypes);

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes",
};

const knobLabels = {
  defaultValue: "Initial Value",
  disabled: "Disabled",
  max: "Maximum",
  min: "Minimum",
  onBlur: "onBlur",
  onChange: "onChange",
  onFocus: "onFocus",
  onInput: "onInput",
  step: "Step",
  value: "Value",
  variant: "Variant",
};

export default function getKnobs(props) {
  const {
    defaultValue,
    disabled,
    max,
    min,
    step,
    value,
    variant,
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
    max: number(knobLabels.max, max, knobGroupIds.basic),
    min: number(knobLabels.min, min, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    onInput: action(knobLabels.onInput),
    step: number(knobLabels.step, step, knobGroupIds.basic),
    value: controlledText(knobLabels.value, value, knobGroupIds.form),
    variant: select(
      knobLabels.variant,
      typeOptions,
      variant,
      knobGroupIds.basic
    ),
  };
}
