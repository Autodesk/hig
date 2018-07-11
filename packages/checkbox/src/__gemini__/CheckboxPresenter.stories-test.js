import { storiesOf } from "@storybook/react";
import React from "react";
import { default as CheckboxPresenter } from "../CheckboxPresenter/CheckboxPresenter";


storiesOf("CheckboxPresenter", module)
  .add("default", () => <CheckboxPresenter label={"Default checkbox"}/>)
  .add("checked", () => <CheckboxPresenter checked label={"Checked"}/>)
  .add("required", () => <CheckboxPresenter label={"Required"} required={"You must check this box"}/>)
  .add("disabled", () => <CheckboxPresenter label={"Disabled"} disabled/>)
  .add("indeterminate", () => <CheckboxPresenter label={"Indeterminate"} indeterminate/>);
