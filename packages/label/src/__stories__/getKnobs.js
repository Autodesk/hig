import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  children: "Children",
  onClick: "onClick"
};

export default function getKnobs(props) {
  const { children, ...otherProps } = props;

  return {
    ...otherProps,
    children: text(knobLabels.children, children, knobGroupIds.basic),
    onClick: action(knobLabels.onClick, knobGroupIds.basic)
  };
}
