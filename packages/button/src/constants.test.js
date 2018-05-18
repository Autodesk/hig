import * as constants from "./constants";

describe("button/constants", () => {
  it("has an array of available sizes", () => {
    expect(constants).toHavePropertyOfConstants("availableSizes");
  });

  it("has an array of available targets", () => {
    expect(constants).toHavePropertyOfConstants("availableTargets");
  });

  it("has an array of available types", () => {
    expect(constants).toHavePropertyOfConstants("availableTypes");
  });

  it("has an array of available widths", () => {
    expect(constants).toHavePropertyOfConstants("availableWidths");
  });

  it("has constants for sizes", () => {
    expect(constants).toHavePropertyOfConstants("sizes");
  });

  it("has constants for targets", () => {
    expect(constants).toHavePropertyOfConstants("targets");
  });

  it("has constants for types", () => {
    expect(constants).toHavePropertyOfConstants("types");
  });

  it("has constants for widths", () => {
    expect(constants).toHavePropertyOfConstants("widths");
  });
});
