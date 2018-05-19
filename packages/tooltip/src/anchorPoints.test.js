import * as anchorPoints from "./anchorPoints";

describe("tooltip/anchorPoints", () => {
  it("has an array of available anchorPoints", () => {
    expect(anchorPoints).toHavePropertyOfConstants("availableAnchorPoints");
  });

  it("has constants for anchorPoints", () => {
    expect(anchorPoints).toHavePropertyOfConstants("anchorPoints");
  });
});
