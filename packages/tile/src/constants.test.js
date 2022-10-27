import * as constants from "./constants";

describe("tile/constants", () => {
  it("has constants for available backgrounds", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_BACKGROUNDS");
  });

  it("has constants for available levels", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_LEVELS");
  });

  it("has constants of available orientations", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_ORIENTATIONS");
  });
});
