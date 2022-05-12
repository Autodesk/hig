import React from "react";
import { storiesOf } from "@storybook/react";
import { boolean, object, select, text } from "@storybook/addon-knobs/react";
import { withInfo } from "@storybook/addon-info";
import KnobbedThemeProvider from "@hig/storybook/storybook-support/decorators/KnobbedThemeProvider";

import Timestamp from "../Timestamp";
import { availableSequences } from "../constants";
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
  year: "year",
};

storiesOf("Timestamp", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTablesExclude: [KnobbedThemeProvider],
  })(() => (
    <KnobbedThemeProvider>
      <Timestamp
        plural={boolean("Plural", true)}
        timeDescriptors={object("Time Descriptors", timeObject)}
        timestamp={text("Timestamp", now.toISOString())}
        timestampSequence={select(
          "Timestamp Sequence",
          availableSequences,
          availableSequences.ABC
        )}
        wordSpace={boolean("Word Space", true)}
      />
    </KnobbedThemeProvider>
  ))
);
