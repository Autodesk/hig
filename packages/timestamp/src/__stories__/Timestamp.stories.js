import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Timestamp from "../Timestamp";
import infoOptions from "./infoOptions";

const now = new Date();

storiesOf("Timestamp", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <Timestamp timestamp={text("Timestamp", now.toISOString())} />
  ))
);
