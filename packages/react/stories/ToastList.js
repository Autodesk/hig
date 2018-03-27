import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import Avatar from "elements/components/Avatar";
import Toast from "elements/components/Toast";
import ToastList from "elements/components/ToastList";

import ToastListInteractions from "../.storybook/interactionWrappers/ToastListInteractions";

const exampleToasts = React.Children.toArray([
  <Toast image={<Avatar name="Jon Snow" size="large-48" />} status="primary">
    First defined Toast notification. Lorem ipsum dolor sit amet.
  </Toast>,
  <Toast image={<Avatar name="Arya Stark" size="large-48" />} status="warning">
    Second defined Toast notification.
  </Toast>,
  <Toast
    image={
      <div style={{ width: "48px", height: "48px" }}>
        <img src="http://placekitten.com/g/48/48" alt="Placekitten" />
      </div>
    }
    status="error"
  >
    Third Toast notification.
  </Toast>,
  <Toast>Simple English toast. Fourth in order.</Toast>
]);

storiesOf("ToastList", module)
  .add("default", () => (
    <ToastList position={select("Position", ["top", "bottom"], "top")}>
      {exampleToasts}
    </ToastList>
  ))
  .add("demonstrate adding new children", () => (
    <ToastListInteractions
      position={select("Position", ["top", "bottom"], "top")}
    />
  ));
