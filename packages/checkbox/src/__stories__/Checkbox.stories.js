import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Checkbox from "../index";
import infoOptions from "./infoOptions";

storiesOf("Checkbox", module)
  .add("default", withInfo(infoOptions)(() => <Checkbox label="Default" />))
  .add(
    "required",
    withInfo(infoOptions)(() => (
      <Checkbox label="Required" required="You must check this box" />
    ))
  )
  .add(
    "disabled",
    withInfo(infoOptions)(() => <Checkbox label="Disabled" disabled />)
  )
  .add(
    "disabled and checked",
    withInfo(infoOptions)(() => (
      <Checkbox label="Disabled and Checked" disabled checked />
    ))
  )
  .add(
    "indeterminate",
    withInfo(infoOptions)(() => (
      <Checkbox label="Indeterminate" indeterminate />
    ))
  );
