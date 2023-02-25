import * as constants from "./constants";

describe("accordion/constants", () => {
  it("has constants for indicators", () => {
    expect(constants).toHavePropertyOfConstants("indicators");
  });

  it("has constants for indicator positions", () => {
    expect(constants).toHavePropertyOfConstants("indicatorPositions");
  });

  it("has an array of available indicators", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_INDICATORS");
  });

  it("has an array of available  indicator positions", () => {
    expect(constants).toHavePropertyOfConstants(
      "AVAILABLE_INDICATOR_POSITIONS"
    );
  });
});
