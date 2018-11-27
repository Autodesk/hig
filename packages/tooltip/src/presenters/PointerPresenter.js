import React from "react";
import { Pointer } from "@hig/flyout";

/** hig-gray-60 */
const COLOR = "#393939";
const SIZE = 12;

function stylesheetOverride() {
  return {
    ".hig__flyout-v1__pointer-border": {
      fill: COLOR
    },
    ".hig__flyout-v1__pointer-background": {
      fill: COLOR
    }
  };
}

export default function PointerPresenter() {
  return <Pointer size={SIZE} customStyles={stylesheetOverride} />;
}
