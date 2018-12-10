import React from "react";
import { storiesOf } from "@storybook/react";
import CheckboxPresenter from "../presenters/CheckboxPresenter";

storiesOf("CheckboxPresenter", module)
  .add("default", () => <CheckboxPresenter label="Default checkbox" />)
  .add("checked", () => <CheckboxPresenter checked label="Checked" />)
  .add("disabled", () => <CheckboxPresenter label="Disabled" disabled />)
  .add("indeterminate", () => (
    <CheckboxPresenter label="Indeterminate" indeterminate />
  ));
