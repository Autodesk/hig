import * as index from "./index";

describe("tabs/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "Tab",
      value: expect.any(Function)
    },
    {
      name: "alignments",
      value: expect.any(Object)
    },
    {
      name: "AVAILABLE_ALIGNMENTS",
      value: expect.any(Array)
    },
    {
      name: "variants",
      value: expect.any(Object)
    },
    {
      name: "AVAILABLE_VARIANTS",
      value: expect.any(Array)
    },
    {
      name: "orientations",
      value: expect.any(Object)
    },
    {
      name: "AVAILABLE_ORIENTATIONS",
      value: expect.any(Array)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
