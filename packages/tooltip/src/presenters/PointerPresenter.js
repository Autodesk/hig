import React from "react";
import { Pointer } from "@hig/flyout";

/** hig-gray-60 */
const COLOR = "#393939";
const SIZE = 12;

function stylesheetOverride() {
  return {
    "polygon:first-child": {
      fill: COLOR
    },
    "polygon:last-child": {
      fill: COLOR
    }
  };
}

export default function PointerPresenter() {
  return <Pointer size={SIZE} customStyles={stylesheetOverride} />;
}
