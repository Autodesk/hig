import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  value: "Value",
  disabled: "Disabled",
  onChange: "onChange",
  onFocus: "onFocus",
  onBlur: "onBlur",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  type: "Type"
};

const typeOptions = {
  line: "Line",
  box: "Box",
  plain: "Plain"
};

export default function getKnobs(props) {
  const { value, type, disabled, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onChange: action(knobLabels.onChange),
    onFocus: action(knobLabels.onFocus),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic),
    value: text(knobLabels.value, value, knobGroupIds.basic)
  };
}
