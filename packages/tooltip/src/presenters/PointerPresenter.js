import React from "react";
import { Pointer } from "@hig/flyout";

/** hig-gray-60 */
const COLOR = "#393939";
const SIZE = 12;

/* eslint-disable-next-line no-unused-vars */
function stylesheetOverride(stylesheet, props, themeData) {
  return {
    ...stylesheet,
    pointerBorder: { fill: COLOR },
    pointerBody: { fill: COLOR }
  };
}

export default function PointerPresenter() {
  return <Pointer size={SIZE} stylesheet={stylesheetOverride} />;
}
