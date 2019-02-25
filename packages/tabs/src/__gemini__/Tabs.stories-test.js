import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "@hig/typography";
import Tabs, { Tab } from "../index";

storiesOf("Tabs", module).add("default", () => (
  <Tabs align="center">
    <Tab label="Details" key="details">
      <Typography>Details content</Typography>
    </Tab>
    <Tab label="Activities" key="activities">
      <Typography>Activities content</Typography>
    </Tab>
    <Tab label="Inspector" key="inspector">
      <Typography>Inspector content</Typography>
    </Tab>
  </Tabs>
));
