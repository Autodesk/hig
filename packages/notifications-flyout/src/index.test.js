import * as index from "./index";

describe("notifications-flyout/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "default.Image",
      value: expect.any(Function),
    },
    {
      name: "default.Notification",
      value: expect.any(Function),
    },
    {
      name: "Image",
      value: expect.any(Function),
    },
    {
      name: "Notification",
      value: expect.any(Function),
    },
    {
      name: "types",
      value: expect.any(Object),
    },
    {
      name: "AVAILABLE_TYPES",
      value: expect.any(Array),
    },
    {
      name: "anchorPoints",
      value: expect.any(Object),
    },
    {
      name: "AVAILABLE_ANCHOR_POINTS",
      value: expect.any(Array),
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
