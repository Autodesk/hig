import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import ProgressRing from "../index";
import infoOptions from "./infoOptions";

storiesOf("ProgressRing", module)
  .add("indeterminate", withInfo(infoOptions)(() => <ProgressRing />))
  .add(
    "determinate",
    withInfo(infoOptions)(() => <ProgressRing percentComplete={33} />)
  );
