import { anchorPoints } from "@hig/flyout";
import Button from "@hig/button";
import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import Tooltip from "./Tooltip";

describe("tooltip/Tooltip", () => {
  takeSnapshotsOf(Tooltip, [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with props",
      props: {
        anchorPoint: anchorPoints.TOP_CENTER,
        children: <Button title="Click Me" />,
        content: "Hello World",
        maxHeight: 150,
        onClickOutside: function onClickOutside() {},
        onScroll: function onScroll() {},
        open: true,
        openOnHover: false
      }
    }
  ]);
});
