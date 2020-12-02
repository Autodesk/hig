import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { sizes } from "../sizes";

const sizeOptions = makeSelectOptions(sizes);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  name: "Full Name",
  firstName: "First Name",
  lastName: "Last Name",
  size: "Size",
  image: "Image",
  onImageError: "onImageError"
};

export default function getKnobs(props) {
  const { name, firstName, lastName, size, image, ...otherProps } = props;

  return {
    ...otherProps,
    name: text(knobLabels.name, name, knobGroupIds.basic),
    firstName: text(knobLabels.firstName, firstName, knobGroupIds.basic),
    lastName: text(knobLabels.lastName, lastName, knobGroupIds.basic),
    size: select(knobLabels.size, sizeOptions, size, knobGroupIds.basic),
    image: text(knobLabels.image, image, knobGroupIds.basic),
    onImageError: action(knobLabels.onImageError)
  };
}
