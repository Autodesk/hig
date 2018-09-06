import React from "react";
import { storiesOf } from "@storybook/react";

import Spacer from "../index";

function returnMarkup(props) {
  return (
    <div>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      />
      <Spacer {...props} />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
      />
    </div>
  );
}

storiesOf("Spacer", module)
  .add("default", () => returnMarkup({}))
  .add("size", () => returnMarkup({ size: "16px" }))
  .add("spacing", () => returnMarkup({ spacing: "xxl" }))
  .add("spacing and size", () => returnMarkup({ size: "16px", spacing: "xxl" }))
  .add("display", () => returnMarkup({ display: "block" }));
