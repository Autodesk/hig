import React from "react";
import { storiesOf } from "@storybook/react";

import ThemeRepeater from "./components/ThemeRepeater";
import Slider from "../index";

const defaultProps = {
  min: 21,
  max: 99,
  step: 1,
};

const defaultSliders = (
  <ThemeRepeater>{() => <Slider {...defaultProps} />}</ThemeRepeater>
);

const disabledSliders = (
  <ThemeRepeater>{() => <Slider {...defaultProps} disabled />}</ThemeRepeater>
);

storiesOf("Slider", module)
  .add("default", () => defaultSliders)
  .add("disabled", () => disabledSliders);
