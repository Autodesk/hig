import * as index from "./index";

describe("button/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "sizes",
      value: expect.any(Object)
    },
    {
      name: "targets",
      value: expect.any(Object)
    },
    {
      name: "types",
      value: expect.any(Object)
    },
    {
      name: "widths",
      value: expect.any(Object)
    },
    {
      name: "availableSizes",
      value: expect.any(Array)
    },
    {
      name: "availableTargets",
      value: expect.any(Array)
    },
    {
      name: "availableTypes",
      value: expect.any(Array)
    },
    {
      name: "availableWidths",
      value: expect.any(Array)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
