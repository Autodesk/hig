import { takeSnapshotsOf } from "@weave-design/jest-preset/helpers";

import CollapseButton from "./CollapseButton";

describe("side-nav/CollapseButton", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(CollapseButton, [
      {
        desc: "renders with no props",
        props: {},
      },
      {
        desc: "renders minimized",
        props: {
          minimized: true,
        },
      },
      {
        desc: "renders with event handlers",
        props: {
          onClick: function handleClick() {},
        },
      },
    ]);
  });
});
