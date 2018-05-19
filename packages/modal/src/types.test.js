import * as types from "./types";

describe("modal/types", () => {
  it("has an array of available types", () => {
    expect(types).toHavePropertyOfConstants("availableTypes");
  });

  it("has constants for types", () => {
    expect(types).toHavePropertyOfConstants("types");
  });
});
