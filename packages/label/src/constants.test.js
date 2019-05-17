import * as variants from "./constants";

describe("icon-button/surfaces", () => {
  it("has an array of available surfaces", () => {
    expect(variants).toHaveProperty("availableVariants");
  });

  it("has constants for sizes", () => {
    expect(variants).toHaveProperty("variants");
  });
});
