import { select, text } from "@storybook/addon-knobs/react";
import { action } from "@storybook/addon-actions";
import { controlledBool, makeSelectOptions } from "@hig/storybook/utils";

import { indicators, indicatorPositions } from "../constants";

const indicatorOptions = makeSelectOptions(indicators);
const indicatorPositionOptions = makeSelectOptions(indicatorPositions);

const knobGroupIds = { basic: "Basic" };

const knobLabels = {
  label: "Label",
  indicator: "Indicator",
  indicatorPosition: "Indicator position",
  collapsed: "Collapsed (controlled)",
  onClick: "onClick",
};

export default function getKnobs(props) {
  const { label, indicator, indicatorPosition, collapsed, ...otherProps } =
    props;

  return {
    ...otherProps,
    label: text(knobLabels.label, label, knobGroupIds.basic),
    collapsed: controlledBool(
      knobLabels.collapsed,
      collapsed,
      knobGroupIds.basic
    ),
    indicator: select(
      knobLabels.indicator,
      indicatorOptions,
      indicator,
      knobGroupIds.basic
    ),
    indicatorPosition: select(
      knobLabels.indicatorPosition,
      indicatorPositionOptions,
      indicatorPosition,
      knobGroupIds.basic
    ),
    onClick: action(knobLabels.onClick),
  };
}
