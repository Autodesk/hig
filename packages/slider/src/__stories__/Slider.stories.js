import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Slider from "../index";
import infoOptions from "./infoOptions";

storiesOf("Slider", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <Slider
      label="What is your age?"
      instructions="You must be 21 or older."
      required="Age is required."
      minValue={21}
      maxValue={99}
      step={1}
    />
  ))
);
