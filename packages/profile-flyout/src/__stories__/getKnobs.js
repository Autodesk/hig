import { select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { sizes } from "../sizes";

const sizeOptions = makeSelectOptions(sizes);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  email: "Email Address",
  avatarImage: "Image URL",
  avatarName: "Name",
  size: "Size"
};

export default function getKnobs(props) {
  const { email, avatarImage, avatarName, size, ...otherProps } = props;

  return {
    ...otherProps,
    email: text(knobLabels.email, email, knobGroupIds.basic),
    avatarImage: text(knobLabels.avatarImage, avatarImage, knobGroupIds.basic),
    avatarName: text(knobLabels.avatarName, avatarName, knobGroupIds.basic),
    size: select(knobLabels.size, sizeOptions, size, knobGroupIds.basic)
  };
}
