import * as index from "./index";

describe("checkbox/index", () => {
  it(`exports default`, () => {
    expect(index).toHaveProperty("default", expect.any(Function));
  });
});
