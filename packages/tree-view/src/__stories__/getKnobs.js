import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = { basic: "Basic" };
const knobLabels = {
  guidelines: "Guidelines",
};

export default function getKnobs(props) {
  const { guidelines, ...otherProps } = props;

  return {
    ...otherProps,
    guidelines: boolean(knobLabels.guidelines, guidelines, knobGroupIds.basic),
    onChange: action(knobLabels.onChange)
  };
}
