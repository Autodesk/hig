import React from "react";
import { storiesOf } from "@storybook/react";
import Typography from "@hig/typography";
import Tabs, { Tab } from "../index";

storiesOf("Tabs", module)
  .add("default", () => (
    <Tabs>
      <Tab label="Details" key="details">
        <Typography>Details content</Typography>
      </Tab>
      <Tab label="Activities" key="activities" disabled>
        <Typography>Activities content</Typography>
      </Tab>
      <Tab label="Inspector" key="inspector">
        <Typography>Inspector content</Typography>
      </Tab>
    </Tabs>
  ))
  .add("box", () => (
    <Tabs variant="box">
      <Tab label="Details" key="details">
        <Typography>Details content</Typography>
      </Tab>
      <Tab label="Activities" key="activities" disabled>
        <Typography>Activities content</Typography>
      </Tab>
      <Tab label="Inspector" key="inspector" closable>
        <Typography>Inspector content</Typography>
      </Tab>
    </Tabs>
  ))
  .add("canvas", () => (
    <Tabs variant="canvas">
      <Tab label="Details" key="details">
        <Typography>Details content</Typography>
      </Tab>
      <Tab label="Activities" key="activities" disabled>
        <Typography>Activities content</Typography>
      </Tab>
      <Tab label="Inspector" key="inspector" closable>
        <Typography>Inspector content</Typography>
      </Tab>
    </Tabs>
  ))
  .add("vertical", () => (
    <Tabs variant="box" orientation="vertical">
      <Tab label="Details" key="details">
        <Typography>Details content</Typography>
      </Tab>
      <Tab label="Activities" key="activities" disabled>
        <Typography>Activities content</Typography>
      </Tab>
      <Tab label="Inspector" key="inspector" closable>
        <Typography>Inspector content</Typography>
      </Tab>
    </Tabs>
  ));
