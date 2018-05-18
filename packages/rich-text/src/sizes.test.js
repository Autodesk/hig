import * as sizes from "./sizes";

describe("rich-text/sizes", () => {
  it("has an array of available sizes", () => {
    expect(sizes).toHavePropertyOfConstants("availableSizes");
  });

  it("has constants for sizes", () => {
    expect(sizes).toHavePropertyOfConstants("sizes");
  });
});
