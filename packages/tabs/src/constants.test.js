import * as constants from "./constants";

describe("tabs/constants", () => {
  it("has an array of available alignments", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_ALIGNMENTS");
  });

  it("has constants for alignments", () => {
    expect(constants).toHavePropertyOfConstants("alignments");
  });

  it("has an array of available variants", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_VARIANTS");
  });

  it("has constants for variants", () => {
    expect(constants).toHavePropertyOfConstants("variants");
  });

  it("has an array of available orientations", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_ORIENTATIONS");
  });

  it("has constants for orientations", () => {
    expect(constants).toHavePropertyOfConstants("orientations");
  });
});
