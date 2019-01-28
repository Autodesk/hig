import { action } from "@storybook/addon-actions";
import { select, text } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { targets } from "../targets";
import { types } from "../types";

const targetOptions = makeSelectOptions(targets);
const typeOptions = makeSelectOptions(types);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  children: "Children",
  link: "Link",
  onClick: "onClick",
  target: "Target"
};

export default function getKnobs(props) {
  const { children, link, onClick, target, type, ...otherProps } = props;

  return {
    ...otherProps,
    children: text(knobLabels.children, children, knobGroupIds.basic),
    link: text(knobLabels.link, link, knobGroupIds.basic),
    onClick: action(knobLabels.onClick),
    target: select(
      knobLabels.target,
      targetOptions,
      target,
      knobGroupIds.basic
    )
  };
}
