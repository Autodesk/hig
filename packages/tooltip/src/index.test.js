import { hasExports } from "@hig/jest-preset/helpers";

import * as index from "./index";

describe("tooltip/index", () => {
  hasExports(index, [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "default.Content",
      value: expect.any(Function),
    },
    {
      name: "default.Text",
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
    {
      name: "Content",
      value: expect.any(Function),
    },
    {
      name: "Text",
      value: expect.any(Function),
    },
  ]);
});
