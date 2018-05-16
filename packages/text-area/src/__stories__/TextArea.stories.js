import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import TextArea from "../index";
import infoOptions from "./infoOptions";

storiesOf("TextArea", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <TextArea
      label="Tab title"
      placeholder="Foo"
      required="This field is required."
    />
  ))
);
