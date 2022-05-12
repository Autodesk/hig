import React from "react";
import { storiesOf } from "@storybook/react";

import TextArea from "../index";

const defaultProps = {
  label: "Comments",
  placeholder: "Enter your comments here.",
  required: "This field is required.",
};

storiesOf("TextArea", module).add("default", () => (
  <TextArea {...defaultProps} />
));
