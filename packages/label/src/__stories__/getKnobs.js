import { action } from "@storybook/addon-actions";
import { text, select } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  children: "Children",
  onClick: "onClick",
  theme: "Theme"
};

const themeOptions = {
  "hig-light-gray": "Light Gray",
  "hig-dark-blue": "Dark Blue"
};

export default function getKnobs(props) {
  const { children, ...otherProps } = props;

  return {
    ...otherProps,
    children: text(knobLabels.children, children, knobGroupIds.basic),
    onClick: action(knobLabels.onClick, knobGroupIds.basic),
    theme: select(
      knobLabels.theme,
      themeOptions,
      Object.keys(themeOptions)[0],
      knobGroupIds.basic
    )
  };
}
