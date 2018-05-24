import * as index from "./index";

describe("styles/index", () => {
  [
    {
      name: "default",
      value: expect.any(Object)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
