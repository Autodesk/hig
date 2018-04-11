import * as index from "./index";

describe("banner/BannerAnimator/index", () => {
  it("exports a component as its default", () => {
    expect(index).toHaveProperty("default", expect.any(Function));
  });
});
