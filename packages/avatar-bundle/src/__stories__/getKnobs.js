import { boolean, color, select } from "@storybook/addon-knobs/react";

import { sizes } from "@hig/avatar";
import { makeSelectOptions } from "@hig/storybook/utils";

import { spacings } from "../spacings";

const sizeOptions = makeSelectOptions(sizes);
const spacingOptions = makeSelectOptions(spacings);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  size: "Size",
  spacing: "Spacing",
  border: "Border",
  showOverflow: "Show overflow number",
  showBorder: "Add color border"
};

export default function getKnobs(props) {
  const { size, spacing, ...otherProps } = props;

  const knobProps = {
    ...otherProps,
    size: select(knobLabels.size, sizeOptions, size, knobGroupIds.basic),
    spacing: select(
      knobLabels.spacing,
      spacingOptions,
      spacing,
      knobGroupIds.basic
    ),
    showOverflowCount: boolean(
      knobLabels.showOverflow,
      true,
      knobGroupIds.basic
    )
  };

  const showBorder = boolean(knobLabels.showBorder, false, knobGroupIds.basic);

  if (showBorder) {
    knobProps.borderColor = color(
      knobLabels.border,
      "#808080",
      knobGroupIds.basic
    );
  }

  return knobProps;
}
