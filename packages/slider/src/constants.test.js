import * as constants from "./constants";

describe("slider/constants", () => {
  it("has an array of available types", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_SLIDER_TYPES");
  });

  it("has constants for sliderTypes", () => {
    expect(constants).toHavePropertyOfConstants("sliderTypes");
  });
});
