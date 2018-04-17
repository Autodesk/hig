import * as index from "./index";

describe("side-nav/index", () => {
  [
    {
      name: "SideNavSkeleton",
      value: expect.any(Function)
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
