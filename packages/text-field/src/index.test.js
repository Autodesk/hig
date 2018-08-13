import * as index from "./index";

describe("text-field/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "TextFieldPresenter",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
