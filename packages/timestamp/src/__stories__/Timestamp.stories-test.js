import React from "react";
import { storiesOf } from "@storybook/react";

import Timestamp from "../Timestamp";

const now = new Date();
const threeMinutesAgo = new Date();
threeMinutesAgo.setMinutes(now.getMinutes() - 3);

storiesOf("Timestamp", module).add("default", () => (
  <Timestamp timestamp={threeMinutesAgo.toISOString()} />
));
