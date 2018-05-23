import React from "react";
import { storiesOf } from "@storybook/react";

import TextField from "../index";

storiesOf("TextField", module).add("basic", () => (
  <TextField
    label="Username"
    placeholder="email@example.com"
    instructions="This is typically your email address."
    required="Required"
  />
));
