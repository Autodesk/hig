import * as anchorPointsModule from "./anchorPoints";

describe("flyout/anchorPoints", () => {
  it("has an array of available anchor points", () => {
    expect(anchorPointsModule).toHavePropertyOfConstants(
      "AVAILABLE_ANCHOR_POINTS"
    );
  });

  it("has constants for anchor points", () => {
    expect(anchorPointsModule).toHavePropertyOfConstants("anchorPoints");
  });
});
