import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { sizes } from "../sizes";

const sizeOptions = makeSelectOptions(sizes);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  name: "Name",
  size: "Size",
  image: "Image",
  onImageError: "onImageError"
};

export default function getKnobs(props) {
  const { name, size, image, ...otherProps } = props;

  return {
    ...otherProps,
    name: text(knobLabels.name, name, knobGroupIds.basic),
    size: select(knobLabels.size, sizeOptions, size, knobGroupIds.basic),
    image: text(knobLabels.image, image, knobGroupIds.basic),
    onImageError: action(knobLabels.onImageError)
  };
}
