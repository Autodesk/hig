import * as index from ".";

describe("utils/index", () => {
  it(`exports combineEventHandlers`, () => {
    expect(index).toHaveProperty("combineEventHandlers", expect.any(Function));
  });
  it(`exports generateId`, () => {
    expect(index).toHaveProperty("generateId", expect.any(Function));
  });
});
