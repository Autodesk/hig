import * as index from "./index";

describe("icon-button/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "AVAILABLE_NAMES",
      value: expect.any(Array)
    },
    {
      name: "names",
      value: expect.any(Object)
    },
    {
      name: "AVAILABLE_SIZES",
      value: expect.any(Array)
    },
    {
      name: "sizes",
      value: expect.any(Object)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
