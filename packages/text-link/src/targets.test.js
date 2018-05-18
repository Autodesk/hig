import * as targets from "./targets";

describe("text-link/constants", () => {
  it("has an array of available targets", () => {
    expect(targets).toHavePropertyOfConstants("availableTargets");
  });

  it("has constants for targets", () => {
    expect(targets).toHavePropertyOfConstants("targets");
  });
});
