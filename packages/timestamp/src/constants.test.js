import * as constants from "./constants";

describe("timestamp/constants", () => {
  it("has constants for sequences", () => {
    expect(constants).toHavePropertyOfConstants("sequences");
  });

  it("has constants for available positions", () => {
    expect(constants).toHavePropertyOfConstants("availableSequences");
  });
});
