import { hasExports } from "@hig/jest-preset/helpers";

import * as index from "./index";

describe("utils/index", () => {
  hasExports(index, [
    {
      name: "combineEventHandlers",
      value: expect.any(Function),
    },
    {
      name: "memoizeCombineEventHandlers",
      value: expect.any(Function),
    },
    {
      name: "createButtonEventHandlers",
      value: expect.any(Function),
    },
    {
      name: "memoizeCreateButtonEventHandlers",
      value: expect.any(Function),
    },
    {
      name: "generateId",
      value: expect.any(Function),
    },
  ]);
});
