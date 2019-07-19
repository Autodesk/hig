import { action } from "@storybook/addon-actions";
import { boolean, select } from "@storybook/addon-knobs/react";
import { makeSelectOptions } from "@hig/storybook/utils";

import { alignments, variants, orientations } from "../constants";

const alignmentOptions = makeSelectOptions(alignments);
const variantOptions = makeSelectOptions(variants);
const orientationOptions = makeSelectOptions(orientations);

const knobGroupIds = {
  basic: "Basic"
};

const knobLabels = {
  align: "Alignment",
  variant: "Variant",
  orientation: "Orientation",
  showTabDivider: "Show tab divider",
  onTabChange: "onTabChange",
  onTabClose: "onTabClose"
};

export default function getKnobs(props) {
  const {
    align,
    variant,
    orientation,
    showDivider,
    onTabChange,
    ...otherProps
  } = props;

  return {
    ...otherProps,
    align: select(
      knobLabels.align,
      alignmentOptions,
      align,
      knobGroupIds.basic
    ),
    variant: select(
      knobLabels.variant,
      variantOptions,
      variant,
      knobGroupIds.basic
    ),
    orientation: select(
      knobLabels.orientation,
      orientationOptions,
      orientation,
      knobGroupIds.basic
    ),
    showTabDivider: boolean(
      knobLabels.showTabDivider,
      showDivider,
      knobGroupIds.basic
    ),
    onTabChange: action(knobLabels.onTabChange),
    onTabClose: action(knobLabels.onTabClose)
  };
}
