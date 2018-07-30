import React from "react";
import { storiesOf } from "@storybook/react";

import ExampleSideNav from "../__stories__/ExampleSideNav";

storiesOf("SideNav", module).add("default", () => (
  <ExampleSideNav />
));
