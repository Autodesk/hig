import * as alignments from "./alignments";

describe("tabs/alignments", () => {
  it("has an array of available alignments", () => {
    expect(alignments).toHavePropertyOfConstants("AVAILABLE_ALIGNMENTS");
  });

  it("has constants for alignments", () => {
    expect(alignments).toHavePropertyOfConstants("alignments");
  });
});
