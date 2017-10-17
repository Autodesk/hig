import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";
/* eslint-enable import/no-extraneous-dependencies */

import Flyout from "../elements/components/Flyout";
import Button from "../adapters/ButtonAdapter";

const content = () => (
  <div>
    <h3>Important flyout information</h3>
    <p>You can put what ever you want in here.</p>
  </div>
);

storiesOf("Flyout", module).addWithInfo("flyout default", "", () => {
  const anchorOptions = {
    "top-left": "top-left",
    "top-center": "top-center",
    "top-right": "top-right",
    "right-top": "right-top",
    "right-center": "right-center",
    "right-bottom": "right-bottom",
    "bottom-left": "bottom-left",
    "bottom-center": "bottom-center",
    "bottom-right": "bottom-right",
    "left-top": "left-top",
    "left-center": "left-center",
    "left-bottom": "left-bottom"
  };

  const position = select("Anchor Posiion", anchorOptions, "top-left");

  return (
    <div style={{ margin: "300px" }}>
      <Flyout anchorPoint={position} content={content()} style>
        <Button title="open Flyout" />
      </Flyout>
    </div>
  );
});
