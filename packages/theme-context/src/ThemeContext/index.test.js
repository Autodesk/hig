import { hasExports } from "@hig/jest-preset/helpers";

import * as index from "./index";

describe("themes/ThemeContext/index", () => {
  hasExports(index, [
    {
      name: "default",
      value: expect.objectContaining({
        Consumer: expect.any(Function),
        Provider: expect.any(Object),
      }),
    },
    {
      name: "Consumer",
      value: expect.any(Function),
    },
    {
      name: "Provider",
      value: expect.any(Object),
    },
  ]);
});
