import * as index from ".";

describe("utils/index", () => {
  it(`exports combineEventHandlers`, () => {
    expect(index).toHaveProperty("combineEventHandlers", expect.any(Function));
  });
});
