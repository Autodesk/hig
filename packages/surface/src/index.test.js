import { hasExports } from "@weave-design/jest-preset/helpers";

import * as index from "./index";

const cases = [
  {
    name: "default",
    value: expect.any(Function),
  },
];

describe("surface/index", () => {
  hasExports(index, cases);
});
