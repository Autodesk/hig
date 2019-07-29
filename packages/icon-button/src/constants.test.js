import * as surfaces from "./constants";

describe("icon-button/surfaces", () => {
  it("has an array of available surfaces", () => {
    expect(surfaces).toHaveProperty("AVAILABLE_SURFACES");
  });

  it("has constants for sizes", () => {
    expect(surfaces).toHaveProperty("surfaces");
  });
});
