import { select, text } from "@storybook/addon-knobs/react";

import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_FONT_WEIGHTS,
  AVAILABLE_VARIANTS
} from "../_constants";

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  children: "Children",
  align: "Alignment",
  fontWeight: "Font Weight",
  variant: "Variant"
};

export default function getKnobs(props) {
  const { children, align, fontWeight, variant, ...otherProps } = props;

  return {
    ...otherProps,
    children: text(knobLabels.children, children, knobGroupIds.basic),
    align: select(
      knobLabels.align,
      AVAILABLE_ALIGNMENTS,
      align,
      knobGroupIds.basic
    ),
    fontWeight: select(
      knobLabels.fontWeight,
      AVAILABLE_FONT_WEIGHTS,
      fontWeight,
      knobGroupIds.basic
    ),
    variant: select(
      knobLabels.variant,
      AVAILABLE_VARIANTS,
      variant,
      knobGroupIds.basic
    )
  };
}
