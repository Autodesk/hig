import React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs/react";
import Avatar from "elements/components/Avatar";
import Toast from "elements/components/Toast";
import ToastList from "elements/components/ToastList";

import ToastListInteractions from "./ToastListInteractions";
import sampleAvatar from "../Avatar/avatar.png";

const exampleToasts = React.Children.toArray([
  <Toast status="primary">
    <strong>Object Name</strong> was the first Toast notification to appear.
  </Toast>,
  <Toast status="warning">
    <strong>Object Name</strong> was the second Toast notification to appear.
  </Toast>,
  <Toast
    image={<Avatar name="Arya Stark" size="large-48" image={sampleAvatar} />}
    status="error"
  >
    <strong>Object Name</strong> was the third Toast notification to appear.
  </Toast>,
  <Toast>
    <strong>Object Name</strong> is last.
  </Toast>
]);

storiesOf("ToastList", module)
  .add("static", () => (
    <ToastList position={select("Position", ["top", "bottom"], "top")}>
      {exampleToasts}
    </ToastList>
  ))
  .add("demonstrate adding new children", () => (
    <ToastListInteractions
      position={select("Position", ["top", "bottom"], "top")}
    />
  ));
