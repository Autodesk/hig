import React from "react";
import { Pointer } from "@hig/flyout";

/** hig-gray-60 */
const COLOR = "#393939";
const SIZE = 12;

export default function PointerPresenter() {
  return <Pointer size={SIZE} backgroundColor={COLOR} borderColor={COLOR} />;
}
