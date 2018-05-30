import React from "react";
import { storiesOf } from "@storybook/react";

import TopNav from "../index";

const storybook = storiesOf("TopNav", module);

storybook.add("default", () => (
  <TopNav logo="LOGO" leftActions="LEFT ACTIONS" rightActions="RIGHT ACTIONS" />
));
