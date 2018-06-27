import * as index from "./index";

describe("contribution-example/index", () => {
  it(`exports default`, () => {
    expect(index).toHaveProperty("default", expect.any(Function));
  });
});
