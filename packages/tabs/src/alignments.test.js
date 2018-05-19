import * as alignments from "./alignments";

describe("tabs/alignments", () => {
  it("has an array of available alignments", () => {
    expect(alignments).toHavePropertyOfConstants("availableAlignments");
  });

  it("has constants for alignments", () => {
    expect(alignments).toHavePropertyOfConstants("alignments");
  });
});
