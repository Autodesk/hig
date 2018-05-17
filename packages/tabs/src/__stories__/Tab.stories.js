import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Tabs, Tab } from "../index";
import infoOptions from "./infoOptions";

storiesOf("Tabs", module).add(
  "default",
  withInfo({
    ...infoOptions,
    propTables: [Tabs, Tab]
  })(() => (
    <Tabs align="center">
      <Tab label="Details">Details content</Tab>
      <Tab label="Activities">Activities content</Tab>
      <Tab label="Inspector">Inspector content</Tab>
    </Tabs>
  ))
);
