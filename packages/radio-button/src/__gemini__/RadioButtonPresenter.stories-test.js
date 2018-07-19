import React from "react";
import { storiesOf } from "@storybook/react";
import RadioButtonPresenter from "../RadioButtonPresenter/RadioButtonPresenter";

storiesOf("RadioButtonPresenter", module)
  .add("default", () => <RadioButtonPresenter label={"Default checkbox"} />)
  .add("checked", () => <RadioButtonPresenter checked label={"Checked"} />)
  .add("required", () => (
    <RadioButtonPresenter
      label={"Required"}
      required={"You must check this box"}
    />
  ))
  .add("disabled", () => <RadioButtonPresenter label={"Disabled"} disabled />)
);
