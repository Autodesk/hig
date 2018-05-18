import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { names } from "@hig/icons";
import { types } from "../types";

const iconNameOptions = makeSelectOptions(names);
const typeOptions = makeSelectOptions(types);

const knobGroupIds = {
  basic: "Basic",
  icon: "Icon to Render"
};

const knobLabels = {
  disabled: "Disabled",
  link: "Link",
  name: "Icon name",
  onBlur: "onBlur",
  onClick: "onClick",
  onFocus: "onFocus",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  svg: "SVG string",
  title: "Title",
  type: "Type"
};

export default function getKnobs(props) {
  const { disabled, link, name, svg, title, type, ...otherProps } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.disabled),
    link: text(knobLabels.link, link, knobGroupIds.basic),
    name: select(knobLabels.name, iconNameOptions, name, knobGroupIds.icon),
    onBlur: action(knobLabels.onBlur),
    onClick: action(knobLabels.onClick),
    onFocus: action(knobLabels.onFocus),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    svg: text(knobLabels.svg, svg, knobGroupIds.icon),
    title: text(knobLabels.title, title, knobGroupIds.basic),
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic)
  };
}
