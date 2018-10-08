import React from "react";
import { storiesOf } from "@storybook/react";
import ModalPresenter from "../presenters/ModalPresenter";

storiesOf("ModalPresenter", module)
  .add("default", () => <ModalPresenter title="Default modal" />)
  .add("open", () => <ModalPresenter open title="Open modal" />);
