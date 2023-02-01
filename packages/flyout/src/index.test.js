import { hasExports } from "@weave-design/jest-preset/helpers";

import * as index from "./index";

describe("flyout/index", () => {
  hasExports(index, [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "availableAnchorPoints",
      value: expect.any(Array),
    },
    {
      name: "AVAILABLE_ANCHOR_POINTS",
      value: expect.any(Array),
    },
    {
      name: "anchorPoints",
      value: expect.any(Object),
    },
    {
      name: "Panel",
      value: expect.any(Function),
    },
    {
      name: "Pointer",
      value: expect.any(Function),
    },
    {
      name: "default.Panel",
      value: expect.any(Function),
    },
    {
      name: "dislocateContainer",
      value: expect.any(Function),
    },
    {
      name: "offsetContainerHorizontal",
      value: expect.any(Function),
    },
    {
      name: "offsetContainerVertical",
      value: expect.any(Function),
    },
    {
      name: "offsetPanelHorizontal",
      value: expect.any(Function),
    },
    {
      name: "transitionStatuses",
      value: expect.any(Object),
    },
    {
      name: "AVAILABLE_TRANSITION_STATUSES",
      value: expect.any(Array),
    },
  ]);
});
