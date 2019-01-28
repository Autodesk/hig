import React from "react";

import DefaultExport from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return <DefaultExport {...otherProps}>{children}</DefaultExport>;
}
