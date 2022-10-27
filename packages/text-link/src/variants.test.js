import * as variants from "./variants";

describe("text-link/types", () => {
  it("has an array of available types", () => {
    expect(variants).toHavePropertyOfConstants("availableVariants");
  });

  it("has constants for types", () => {
    expect(variants).toHavePropertyOfConstants("variants");
  });
});
