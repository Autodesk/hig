import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import RadioButton from "../index";
import infoOptions from "./infoOptions";

storiesOf("RadioButton", module)
  .add("default", withInfo(infoOptions)(() => <RadioButton label="Default" />))
  .add(
    "required",
    withInfo(infoOptions)(() => (
      <RadioButton label="Required" required="You must check this box" />
    ))
  )
  .add(
    "disabled",
    withInfo(infoOptions)(() => <RadioButton label="Disabled" disabled />)
  )
  .add(
    "disabled and checked",
    withInfo(infoOptions)(() => (
      <RadioButton label="Disabled and Checked" disabled checked />
    ))
  );
