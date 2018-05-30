import * as index from "./index";

describe("tabs/index", () => {
  [
    {
      name: "Tabs",
      value: expect.any(Function)
    },
    {
      name: "Tab",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
