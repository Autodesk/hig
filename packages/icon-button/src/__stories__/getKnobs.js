import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";

import { AVAILABLE_SURFACES, AVAILABLE_VARIANTS } from "../constants";

const surfaceLevelOptions = AVAILABLE_SURFACES;
const variantOptions = AVAILABLE_VARIANTS;

const knobGroupIds = {
  basic: "Basic",
  icon: "Icon to Render"
};

const knobLabels = {
  disabled: "Disabled",
  link: "Link",
  on: "On",
  onBlur: "onBlur",
  onClick: "onClick",
  onFocus: "onFocus",
  onMouseDown: "onMouseDown",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  onMouseUp: "onMouseUp",
  surface: "Surface",
  title: "Title",
  variant: "Variant"
};

export default function getKnobs(props) {
  const { disabled, link, on, surface, title, variant, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    link: text(knobLabels.link, link, knobGroupIds.basic),
    on: boolean(knobLabels.on, on, knobGroupIds.basic),
    onBlur: action(knobLabels.onBlur),
    onClick: action(knobLabels.onClick),
    onFocus: action(knobLabels.onFocus),
    onMouseDown: action(knobLabels.onMouseDown),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    onMouseUp: action(knobLabels.onMouseUp),
    surface: select(
      knobLabels.surface,
      surfaceLevelOptions,
      surface,
      knobGroupIds.basic
    ),
    variant: select(
      knobLabels.variant,
      variantOptions,
      variant,
      knobGroupIds.basic
    ),
    title: text(knobLabels.title, title, knobGroupIds.basic)
  };
}
