import React from "react";
import { storiesOf } from "@storybook/react";

import Spacer from "../index";

function renderStory(props) {
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
  .add("default", () => renderStory({}))
  .add("size", () => renderStory({ size: "16px" }))
  .add("spacing", () => renderStory({ spacing: "xxl" }))
  .add("spacing and size", () => renderStory({ size: "16px", spacing: "xxl" }))
  .add("display", () => renderStory({ display: "block" }));
