import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    expect(stylesheet({ transitionStatus: null, anchorPoint: null })).toEqual(
      expect.any(Object)
    );
  });
});
