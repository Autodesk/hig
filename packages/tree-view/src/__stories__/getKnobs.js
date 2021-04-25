import { boolean, select } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { indicators } from "../constants";

const indicatorOptions = makeSelectOptions(indicators);

const knobGroupIds = { basic: "Basic" };
const knobLabels = {
  alternateBg: "Alternate Background",
  guidelines: "Guidelines",
  indicator: "Indicators"
};

export default function getKnobs(props) {
  const { alternateBg, guidelines, indicator, ...otherProps } = props;

  return {
    ...otherProps,
    alternateBg: boolean(
      knobLabels.alternateBg,
      alternateBg,
      knobGroupIds.basic
    ),
    guidelines: boolean(knobLabels.guidelines, guidelines, knobGroupIds.basic),
    indicator: select(
      knobLabels.indicator,
      indicatorOptions,
      indicator,
      knobGroupIds.basic
    )
  };
}
