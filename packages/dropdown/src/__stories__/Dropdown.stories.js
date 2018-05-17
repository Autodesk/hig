import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Dropdown from "../index";
import infoOptions from "./infoOptions";

storiesOf("Dropdown", module)
  .add(
    "uncontrolled",
    withInfo(infoOptions)(() => (
      <Dropdown
        label="Uncontrolled Dropdown"
        instructions="instructions for regular Uncontrolled dropdown"
        placeholder="placeholder for regular Uncontrolled dropdown"
        options={[
          {
            label: "foo",
            value: "foo value"
          },
          {
            label: "bar",
            value: "bar value"
          }
        ]}
        defaultValue="bar value"
      />
    ))
  )
  .add(
    "disabled",
    withInfo(infoOptions)(() => (
      <Dropdown
        label="Disabled Dropdown"
        instructions="instructions for disabled dropdown"
        placeholder="placeholder for disabled dropdown"
        disabled
      />
    ))
  );
