import * as index from "./index";

describe("rich-text/index", () => {
  it(`exports default`, () => {
    expect(index).toHaveProperty("default", expect.any(Function));
  });
});
