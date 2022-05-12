import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
};

const knobLabels = {
  children: "Children",
  disabled: "Disabled",
  onClick: "onClick",
};

export default function getKnobs(props) {
  const { children, disabled = false, ...otherProps } = props;

  return {
    ...otherProps,
    children: text(knobLabels.children, children, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    onClick: action(knobLabels.onClick, knobGroupIds.basic),
  };
}
