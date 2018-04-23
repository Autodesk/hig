import * as index from "./index";

describe("side-nav/index", () => {
  [
    {
      name: "SideNavSkeleton",
      value: expect.any(Function)
    },
    {
      name: "CollapseButton",
      value: expect.any(Function)
    },
    {
      name: "Group",
      value: expect.any(Function)
    },
    {
      name: "Link",
      value: expect.any(Function)
    },
    {
      name: "Module",
      value: expect.any(Function)
    },
    {
      name: "Submodule",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
