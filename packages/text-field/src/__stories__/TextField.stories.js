import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TextField from "../index";
import infoOptions from "./infoOptions";

storiesOf("TextField", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <TextField
      label="Tab title"
      placeholder="Foo"
      required="This field is required."
    />
  ))
);
