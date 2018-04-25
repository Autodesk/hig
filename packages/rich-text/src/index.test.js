import * as index from "./index";

describe("rich-text/index", () => {
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
      name: "availableSizes",
      value: expect.any(Object)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
