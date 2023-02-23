import * as index from ".";

describe("utils/index", () => {
  it("exports default", () => {
    expect(index).toHaveProperty("default", expect.any(Function));
  });
});
