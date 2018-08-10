import { action } from "@storybook/addon-actions";
import { text, boolean, select } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  value: "Value",
  disabled: "Disabled",
  onChange: "onChange",
  onInput: "onInput",
  onKeypress: "onKeypress",
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
    onChange: action(knobLabels.onChange),
    onInput: action(knobLabels.onInput),
    onKeypress: action(knobLabels.onKeypress),
    value: text(knobLabels.value, value, knobGroupIds.basic),
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic)
  };
}
