import * as sizesModule from "./sizes";

describe("icons/sizes", () => {
  it("has an array of available sizes", () => {
    expect(sizesModule).toHaveProperty("AVAILABLE_SIZES");
  });

  it("has constants for sizes", () => {
    expect(sizesModule).toHaveProperty("sizes");
  });
});
