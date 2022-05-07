import { object } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
};

const knobLabels = {
  dangerouslySetInnerHTML: "Inner HTML",
};

export default function getKnobs(props) {
  const { dangerouslySetInnerHTML, ...otherProps } = props;

  return {
    ...otherProps,
    dangerouslySetInnerHTML: object(
      knobLabels.dangerouslySetInnerHTML,
      dangerouslySetInnerHTML,
      knobGroupIds.basic
    ),
  };
}
