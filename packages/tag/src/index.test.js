import { hasExports } from "@hig/jest-preset/helpers";

import * as index from "./index";

const cases = [
  {
    name: "default",
    value: expect.any(Function),
  },
];

describe("tag/index", () => {
  hasExports(index, cases);
});
