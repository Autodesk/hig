import Input, { types, availableTypes } from "./index";

describe("index", () => {
  it("exports default", () => {
    expect(Input).toBeDefined();
  });

  it("exports types", () => {
    expect(types).toBeDefined();
  });

  it("exports availableTypes", () => {
    expect(availableTypes).toBeDefined();
  });
});
