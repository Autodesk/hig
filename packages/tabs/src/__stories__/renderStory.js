import React from "react";

import Tabs from "../index";
import getKnobs from "./getKnobs";

export default function renderStory(props) {
  const { children, ...otherProps } = getKnobs(props);

  return <Tabs {...otherProps}>{children}</Tabs>;
}
