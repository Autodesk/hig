import createCustomClassNames from "./createCustomClassNames";

describe("utils/createCustomClassNames", () => {
  const className = "test";
  it("returns the className that combines the 1st and 2nd param", () => {
    expect(createCustomClassNames(className, "component")).toEqual(
      `${className}__component`
    );
  });
});
