import React from "react";
import { storiesOf } from "@storybook/react";

import Surface from "../index";

function surfaceStory(props) {
  return (
    <Surface {...props}>
      <p>Happy little clouds</p>
    </Surface>
  );
}

function customizedSurfaces() {
  const surfacePropConfigs = [
    { horizontalPadding: "s", verticalPadding: "m" },
    { shadow: "high" },
    { borderRadius: "l" },
    { tagName: "figure" },
  ];
  return <div>{surfacePropConfigs.map((props) => surfaceStory(props))}</div>;
}

storiesOf("Surface", module)
  .add("default", () => surfaceStory({}))
  .add("customized", () => customizedSurfaces());
