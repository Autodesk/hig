import React from "react";
import { storiesOf } from "@storybook/react";
import { Location24 } from "@hig/icons";

import TextField from "../index";

const defaultProps = {
  label: "Username",
  placeholder: "email@example.com",
  instructions: "This is typically your email address.",
  required: "Required",
  showClearButton: true
};

storiesOf("TextField", module)
  .add("basic", () => <TextField {...defaultProps} />)
  .add("disabled", () => <TextField {...defaultProps} disabled />)
  .add("with preceding icon", () => (
    <TextField {...defaultProps} icon={<Location24 />} />
  ))
  .add("with error message", () => (
    <TextField
      {...defaultProps}
      errors="This username has already been taken."
    />
  ))
  .add("with errors replacing instructions", () => (
    <TextField
      {...defaultProps}
      errors="This username has already been taken."
      hideInstructionsOnErrors
    />
  ));
