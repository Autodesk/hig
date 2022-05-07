import * as index from "./index";

describe("label/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function),
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
