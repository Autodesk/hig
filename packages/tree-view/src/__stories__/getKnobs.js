import { action } from "@storybook/addon-actions";
import { boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = { basic: "Basic" };
const knobLabels = {
  alternateBg: "Alternate Background",
  guidelines: "Guidelines"
};

export default function getKnobs(props) {
  const { alternateBg, guidelines, ...otherProps } = props;

  return {
    ...otherProps,
    alternateBg: boolean(knobLabels.alternateBg, alternateBg, knobGroupIds.basic),
    guidelines: boolean(knobLabels.guidelines, guidelines, knobGroupIds.basic),
    onChange: action(knobLabels.onChange)
  };
}
