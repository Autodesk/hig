import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import CollapseButton from "./CollapseButton";

describe("side-nav/CollapseButton", () => {
  describe("snapshot tests", () => {
    takeSnapshotsOf(CollapseButton, [
      {
        description: "renders with no props",
        props: {}
      },
      {
        description: "renders minimized",
        props: {
          minimized: true
        }
      },
      {
        description: "renders with event handlers",
        props: {
          onClick: function handleClick() {}
        }
      }
    ]);
  });
});
