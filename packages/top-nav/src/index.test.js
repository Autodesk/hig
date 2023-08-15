import * as index from "./index";

describe("banner/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "Action",
      value: expect.any(Function),
    },
    {
      name: "HelpAction",
      value: expect.any(Function),
    },
    {
      name: "Interactions",
      value: expect.any(Function),
    },
    {
      name: "Logo",
      value: expect.any(Function),
    },
    {
      name: "ProfileAction",
      value: expect.any(Function),
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });

  describe("default export", () => {
    [
      {
        name: "Action",
        value: expect.any(Function),
      },
      {
        name: "HelpAction",
        value: expect.any(Function),
      },
      {
        name: "Interactions",
        value: expect.any(Function),
      },
      {
        name: "Logo",
        value: expect.any(Function),
      },
      {
        name: "ProfileAction",
        value: expect.any(Function),
      },
      {
        name: "ProfileContent",
        value: expect.any(Function),
      },
    ].forEach(({ name, value }) => {
      it(`has ${name} component as a property`, () => {
        expect(index.default).toHaveProperty(name, value);
      });
    });
  });
});
