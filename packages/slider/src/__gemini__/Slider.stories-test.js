import React from "react";
import { storiesOf } from "@storybook/react";

import Slider from "../index";

const defaultProps = {
  label: "What is your age?",
  instructions: "You must be 21 or older.",
  required: "Age is required.",
  min: 21,
  max: 99,
  step: 1
};

storiesOf("Slider", module)
  .add("basic", () => <Slider {...defaultProps} />)
  .add("disabled", () => <Slider {...defaultProps} disabled />);
