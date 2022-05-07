import { text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
};

const knobLabels = {
  email: "Email Address",
  avatarImage: "Image URL",
  avatarName: "Name",
};

export default function getKnobs(props) {
  const { email, avatarImage, avatarName, ...otherProps } = props;

  return {
    ...otherProps,
    email: text(knobLabels.email, email, knobGroupIds.basic),
    avatarImage: text(knobLabels.avatarImage, avatarImage, knobGroupIds.basic),
    avatarName: text(knobLabels.avatarName, avatarName, knobGroupIds.basic),
  };
}
