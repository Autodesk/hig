import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, object, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import Timestamp from "../Timestamp";
import infoOptions from "./infoOptions";

const now = new Date();
const timeObject = {
  ago: "ago",
  second: "second",
  minute: "minute",
  hour: "hour",
  day: "day",
  week: "week",
  month: "month",
  year: "year"
};

storiesOf("Timestamp", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider]
  })(() => (
    <KnobbedThemeProvider>
      <Timestamp
        timeDescriptors={object("Time Descriptors", timeObject)}
        plural={boolean("Plural", true)}
        timestamp={text("Timestamp", now.toISOString())}
        wordSpace={boolean("Word Space", true)}
      />
    </KnobbedThemeProvider>
  ))
);
