import { hasExports } from "@weave-design/jest-preset/helpers";

import * as index from "./index";

describe("profile-flyout/index", () => {
  hasExports(index, [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "ProfileContent",
      value: expect.any(Function),
    },
    {
      name: "anchorPoints",
      value: expect.any(Object),
    },
    {
      name: "AVAILABLE_ANCHOR_POINTS",
      value: expect.any(Array),
    },
  ]);
});
