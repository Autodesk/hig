import * as constants from "./constants";

describe("tile/constants", () => {
  it("has constants for indicators", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_BACKGROUNDS");
  });

  it("has constants for indicator positions", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_LEVELS");
  });

  it("has an array of available indicators", () => {
    expect(constants).toHavePropertyOfConstants("AVAILABLE_ORIENTATIONS");
  });
});
