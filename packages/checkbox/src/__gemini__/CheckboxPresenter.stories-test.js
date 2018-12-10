import React from "react";
import { storiesOf } from "@storybook/react";
import CheckboxPresenter from "../presenters/CheckboxPresenter";

storiesOf("CheckboxPresenter", module)
  .add("default", () => <CheckboxPresenter />)
  .add("checked", () => <CheckboxPresenter checked />)
  .add("disabled", () => <CheckboxPresenter disabled />)
  .add("indeterminate", () => <CheckboxPresenter indeterminate />);
