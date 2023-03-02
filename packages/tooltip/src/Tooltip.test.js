import { anchorPoints } from "@weave-design/flyout";
import Button from "@weave-design/button";
import React from "react";
import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";
import Tooltip from "./Tooltip";

describe("tooltip/Tooltip", () => {
  takeSnapshotsOf(Tooltip, [
    {
      desc: "renders without props",
      props: {},
    },
    {
      desc: "renders with props",
      props: {
        anchorPoint: anchorPoints.TOP_CENTER,
        children: <Button title="Click Me" />,
        content: "Hello World",
        maxHeight: 150,
        onClickOutside: function onClickOutside() {},
        onScroll: function onScroll() {},
        open: true,
        openOnHover: false,
      },
    },
  ]);
});
