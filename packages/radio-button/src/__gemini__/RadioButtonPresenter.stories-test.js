import React from "react";
import { storiesOf } from "@storybook/react";
import RadioButtonPresenter from "../presenters/RadioButtonPresenter";

storiesOf("RadioButtonPresenter", module)
  .add("default", () => <RadioButtonPresenter />)
  .add("checked", () => <RadioButtonPresenter defaultChecked />)
  .add("disabled", () => <RadioButtonPresenter disabled />);
