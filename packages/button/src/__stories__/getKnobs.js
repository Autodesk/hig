import { action } from "@storybook/addon-actions";
import { boolean, select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { sizes, targets, types, widths } from "../constants";

const sizeOptions = makeSelectOptions(sizes);
const targetOptions = makeSelectOptions(targets);
const typeOptions = makeSelectOptions(types);
const widthOptions = makeSelectOptions(widths);

const knobGroupIds = {
  basic: "Basic",
  linkOptions: "Link Options"
};

const knobLabels = {
  disabled: "Disabled",
  link: "Link",
  onBlur: "onBlur",
  onClick: "onClick",
  onFocus: "onFocus",
  onHover: "onHover",
  onMouseEnter: "onMouseEnter",
  onMouseLeave: "onMouseLeave",
  size: "Size",
  target: "Target",
  title: "Title",
  type: "Variant",
  width: "Width"
};

export default function getKnobs(props) {
  const {
    disabled,
    link,
    size,
    target,
    title,
    type,
    width,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    disabled: boolean(knobLabels.disabled, disabled, knobGroupIds.basic),
    link: text(knobLabels.link, link, knobGroupIds.linkOptions),
    onBlur: action(knobLabels.onBlur),
    onClick: action(knobLabels.onClick),
    onFocus: action(knobLabels.onFocus),
    onHover: action(knobLabels.onHover),
    onMouseEnter: action(knobLabels.onMouseEnter),
    onMouseLeave: action(knobLabels.onMouseLeave),
    size: select(knobLabels.size, sizeOptions, size, knobGroupIds.basic),
    target: select(
      knobLabels.target,
      targetOptions,
      target,
      knobGroupIds.linkOptions
    ),
    title: text(knobLabels.title, title, knobGroupIds.basic),
    type: select(knobLabels.type, typeOptions, type, knobGroupIds.basic),
    width: select(knobLabels.width, widthOptions, width, knobGroupIds.basic)
  };
}
