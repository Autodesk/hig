import * as index from "./index";

describe("icon-button/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "AVAILABLE_TYPES",
      value: expect.any(Array)
    },
    {
      name: "types",
      value: expect.any(Object)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
