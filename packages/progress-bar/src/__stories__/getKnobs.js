import { text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  percentComplete: "Percentage Complete"
};

export default function getKnobs(props) {
  const { percentComplete, ...otherProps } = props;

  return {
    ...otherProps,
    percentComplete: text(
      knobLabels.percentComplete,
      percentComplete,
      knobGroupIds.basic
    )
  };
}
