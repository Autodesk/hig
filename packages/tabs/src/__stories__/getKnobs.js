import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { alignments } from "../alignments";

const alignmentOptions = makeSelectOptions(alignments);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  align: "Alignment",
  onTabChange: "onTabChange"
};

export default function getKnobs(props) {
  const { align, onTabChange, ...otherProps } = props;

  return {
    ...otherProps,
    align: select(
      knobLabels.align,
      alignmentOptions,
      align,
      knobGroupIds.basic
    ),
    onTabChange: action(knobLabels.onTabChange)
  };
}
