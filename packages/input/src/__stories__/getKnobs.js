import { text, select, boolean } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  value: "Value",
  disabled: "Disabled",
  theme: "Theme"
};

const themeOptions = {
  "hig-light-gray": "Light Gray",
  "hig-dark-blue": "Dark Blue"
};

export default function getKnobs(props) {
  const { value, disabled, ...otherProps } = props;

  return {
    ...otherProps,
    value: text(knobLabels.value, value, knobGroupIds.basic),
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    theme: select(
      knobLabels.theme,
      themeOptions,
      Object.keys(themeOptions)[0],
      knobGroupIds.basic
    )
  };
}
