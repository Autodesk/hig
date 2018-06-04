import React from "react";
import { storiesOf } from "@storybook/react";
import ProgressBar from "../index";

storiesOf("ProgressBar", module)
  .add("determinate", () => <ProgressBar percentComplete={33} />)
  .add("indeterminate", () => <ProgressBar />);
