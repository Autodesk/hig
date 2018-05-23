import React from "react";
import { storiesOf } from "@storybook/react";

import TextField from "../index";

const defaultProps = {
  label: "Username",
  placeholder: "email@example.com",
  instructions: "This is typically your email address.",
  required: "Required"
};

storiesOf("TextField", module)
  .add("basic", () => <TextField {...defaultProps} />)
  .add("disabled", () => <TextField {...defaultProps} disabled />);
