import * as sizesModule from "./sizes";

describe("icons/sizes", () => {
  it("has an array of available sizes", () => {
    expect(sizesModule).toHavePropertyOfConstants("AVAILABLE_SIZES");
  });

  it("has constants for sizes", () => {
    expect(sizesModule).toHavePropertyOfConstants("sizes");
  });
});
