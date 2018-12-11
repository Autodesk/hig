import React from "react";
import { storiesOf } from "@storybook/react";
import { anchorPoints } from "@hig/flyout";
import Button from "@hig/button";

import Tooltip from "../Tooltip";
import TextPresenter from "../presenters/TextPresenter";

const captureStyle = {
  display: "flex",
  width: "700px",
  height: "300px",
  alignItems: "center",
  flexDirection: "column"
};

storiesOf("Tooltip", module).add("default", () => (
  <div data-capture="Tooltip" style={captureStyle}>
    <Tooltip
      open
      anchorPoint={anchorPoints.TOP_CENTER}
      fallbackAnchorPoints={[]}
      content={
        <TextPresenter>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque.
        </TextPresenter>
      }
    >
      <Button title="open" />
    </Tooltip>
  </div>
));
