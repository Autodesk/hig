import * as index from "./index";

describe("typography/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "H1",
      value: expect.any(Function)
    },
    {
      name: "H2",
      value: expect.any(Function)
    },
    {
      name: "H3",
      value: expect.any(Function)
    },
    {
      name: "Text",
      value: expect.any(Function)
    },
    {
      name: "Body",
      value: expect.any(Function)
    },
    {
      name: "Bold",
      value: expect.any(Function)
    },
    {
      name: "Caption",
      value: expect.any(Function)
    },
    {
      name: "Disabled",
      value: expect.any(Function)
    },
    {
      name: "Sub1",
      value: expect.any(Function)
    },
    {
      name: "Sub2",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
