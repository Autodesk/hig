import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  form: "Form Attributes",
};

const knobLabels = {
  disabled: "Disabled",
  onChange: "onChange",
};

export default function getKnobs(props) {
  const { disabled, theme, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    onChange: action(knobLabels.onChange),
  };
}
