import React from "react";
import { storiesOf } from "@storybook/react";

import Toast from "../index";

storiesOf("Toast", module).add("default", () => (
  <Toast status="primary" showStatusIcon>
    <strong>Object Name</strong> has new info about it.
  </Toast>
));
