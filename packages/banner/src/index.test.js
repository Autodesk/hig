import * as index from "./index";

describe("banner/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "AVAILABLE_PLACEMENTS",
      value: expect.any(Array),
    },
    {
      name: "AVAILABLE_TYPES",
      value: expect.any(Array),
    },
    {
      name: "BannerAction",
      value: expect.any(Function),
    },
    {
      name: "BannerAnimator",
      value: expect.any(Function),
    },
    {
      name: "BannerInteractions",
      value: expect.any(Function),
    },
    {
      name: "BannerPresenter",
      value: expect.any(Function),
    },
    {
      name: "placements",
      value: expect.any(Object),
    },
    {
      name: "types",
      value: expect.any(Object),
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
