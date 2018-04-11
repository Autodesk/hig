import * as index from "./index";

describe("themes/ThemeContext/index", () => {
  [
    {
      name: "default",
      value: expect.objectContaining({
        Consumer: expect.any(Function),
        Provider: expect.any(Function),
      })
    },
    {
      name: "Consumer",
      value: expect.any(Function)
    },
    {
      name: "Provider",
      value: expect.any(Function)
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
