import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import Modal from "../index";
import infoOptions from "./infoOptions";

storiesOf("Modal", module).add(
  "default",
  withInfo(infoOptions)(() => (
    <Modal
      title="Are you sure?"
      open
      buttons={[{ title: "Cancel", type: "secondary" }, { title: "Ok" }]}
      body="This is the text body of my modal"
      style="alternate" // eslint-disable-line react/style-prop-object
    >
      <h1>
        <u>This is my HTML title</u>
      </h1>
      <p>
        <i>This is my HTML content.</i>
      </p>
    </Modal>
  ))
);
