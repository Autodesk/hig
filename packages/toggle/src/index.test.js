import * as index from "./index";

describe("toggle/index", () => {
  it(`exports default`, () => {
    expect(index).toHaveProperty("default", expect.any(Function));
  });
});
