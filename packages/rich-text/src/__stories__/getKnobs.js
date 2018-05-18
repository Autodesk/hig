import { object, select } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";
import { sizes } from "../sizes";

const sizeOptions = makeSelectOptions(sizes);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  dangerouslySetInnerHTML: "Inner HTML",
  size: "Size"
};

export default function getKnobs(props) {
  const { dangerouslySetInnerHTML, size, ...otherProps } = props;

  return {
    ...otherProps,
    dangerouslySetInnerHTML: object(
      knobLabels.dangerouslySetInnerHTML,
      dangerouslySetInnerHTML,
      knobGroupIds.basic
    ),
    size: select(knobLabels.size, sizeOptions, size, knobGroupIds.basic)
  };
}
