import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ProgressBar from "../index";
import infoOptions from "./infoOptions";

storiesOf("ProgressBar", module)
  .add("indeterminate", withInfo(infoOptions)(() => <ProgressBar />))
  .add(
    "determinate",
    withInfo(infoOptions)(() => <ProgressBar percentComplete={33} />)
  );
