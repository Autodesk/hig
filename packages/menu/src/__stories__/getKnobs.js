import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

import Menu from "../index";

const knobGroupIds = { basic: "Basic" };
const knobLabels = {
  checkmark: "Checkmark",
  multiple: "Multiple",
  onChange: "onChange"
};

export default function getKnobs(props, component) {
  const { checkmark, multiple, ...otherProps } = props;
  const conditionalKnobs =
    component === Menu
      ? {
          checkmark: boolean(
            knobLabels.checkmark,
            checkmark,
            knobGroupIds.basic
          )
        }
      : {};

  return {
    ...otherProps,
    ...conditionalKnobs,
    multiple: boolean(knobLabels.multiple, multiple, knobGroupIds.basic),
    onChange: action(knobLabels.onChange)
  };
}
