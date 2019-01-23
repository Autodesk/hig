import React from "react";
import { Pointer } from "@hig/flyout";

const SIZE = 12;

/* eslint-disable-next-line no-unused-vars */
function stylesheetOverride(stylesheet, props, themeData) {
  return {
    ...stylesheet,
    pointerBorder: { fill: themeData["tooltip.backgroundColor"] },
    pointerBody: { fill: themeData["tooltip.backgroundColor"] }
  };
}

export default function PointerPresenter() {
  return <Pointer size={SIZE} stylesheet={stylesheetOverride} />;
}
