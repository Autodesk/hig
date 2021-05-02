import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = { basic: "Basic" };
const knobLabels = {
  checkmark: "Checkmark",
  multiple: "Multiple",
  onChange: "onChange"
};

export default function getKnobs(props) {
  const { checkmark, multiple, ...otherProps } = props;

  return {
    ...otherProps,
    multiple: boolean(knobLabels.multiple, multiple, knobGroupIds.basic),
    onChange: action(knobLabels.onChange)
  };
}
