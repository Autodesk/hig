import React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import ProgressRing from "../index";
import availableSizes from "../availableSizes";

import infoOptions from "./infoOptions";

const storybook = storiesOf("ProgressRing", module);

storybook.add(
  "determinate",
  withInfo(infoOptions)(() => (
    <ProgressRing
      percentComplete={text("Percent Complete", 33)}
      size={select("size", availableSizes, "m")}
    />
  ))
);
storybook.add(
  "indeterminate",
  withInfo(infoOptions)(() => (
    <ProgressRing size={select("size", availableSizes, "m")} />
  ))
);
