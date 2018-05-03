import React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";

import Timestamp from "../Timestamp";

const now = new Date();

storiesOf("Timestamp", module).add(
  "default",
  withInfo({
    propTables: [Timestamp]
  })(() => <Timestamp timestamp={text("Timestamp", now.toISOString())} />)
);
