import { color, select } from "@storybook/addon-knobs/react";
import { availableSizes, availableSurfaces } from "../constants";

const knobGroupIds = {
  basic: "Basic",
};

export default function getKnobs(props) {
  return {
    ...props,
    size: select("Size", availableSizes, "m", knobGroupIds.basic),
    surface: select(
      "Surface",
      availableSurfaces,
      undefined,
      knobGroupIds.basic
    ),
    mask: color("Mask", undefined, knobGroupIds.basic),
  };
}
