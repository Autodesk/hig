import * as index from "./index";

describe("skeleton-item/index", () => {
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
