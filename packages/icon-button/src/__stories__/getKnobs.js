import { action } from "@storybook/addon-actions";
import { boolean, text } from "@storybook/addon-knobs/react";

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
  onMouseDown: "onMouseDown",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  onMouseUp: "onMouseUp",
  title: "Title"
};

export default function getKnobs(props) {
  const { disabled, link, title, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.disabled),
    link: text(knobLabels.link, link, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onClick: action(knobLabels.onClick),
    onFocus: action(knobLabels.onFocus),
    onMouseDown: action(knobLabels.onMouseDown),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    onMouseUp: action(knobLabels.onMouseUp),
    title: text(knobLabels.title, title, knobGroupIds.basic)
  };
}
