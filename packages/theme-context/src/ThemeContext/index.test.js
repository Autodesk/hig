import { hasExports } from "@hig/jest-preset/helpers";

import * as index from "./index";

describe("themes/ThemeContext/index", () => {
  hasExports(index, [
    {
      name: "default",
      value: expect.objectContaining({
        Consumer: expect.anything (Function),
        Provider: expect.anything(Function)
      })
    },
    {
      name: "Consumer",
      value: expect.anything(Function)
    },
    {
      name: "Provider",
      value: expect.anything(Function)
    }
  ]);
});
