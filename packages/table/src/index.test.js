import * as index from "./index";

describe("table/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "AutoResizer",
      value: expect.any(Function)
    },
    {
      name: "Column",
      value: expect.any(Function)
    },
    {
      name: "SortOrder",
      value: expect.any(Object)
    },
    {
      name: "normalizeColumns",
      value: expect.any(Function)
    },
    {
      name: "unflatten",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
