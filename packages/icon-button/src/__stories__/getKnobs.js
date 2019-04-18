import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";

const knobGroupIds = {
  basic: "Basic",
  icon: "Icon to Render"
};

const knobLabels = {
  disabled: "Disabled",
  link: "Link",
  onBlur: "onBlur",
  onClick: "onClick",
  onFocus: "onFocus",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  title: "Title"
};

export default function getKnobs(props) {
  const { disabled, link, name, svg, title, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.disabled),
    link: text(knobLabels.link, link, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onClick: action(knobLabels.onClick),
    onFocus: action(knobLabels.onFocus),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    title: text(knobLabels.title, title, knobGroupIds.basic)
  };
}
