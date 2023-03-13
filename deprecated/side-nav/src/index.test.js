import * as index from "./index";

describe("side-nav/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "SideNavSkeleton",
      value: expect.any(Function),
    },
    {
      name: "BelowTopNav",
      value: expect.any(Function),
    },
    {
      name: "Docked",
      value: expect.any(Function),
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
