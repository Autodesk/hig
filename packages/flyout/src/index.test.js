import * as index from "./index";

describe("flyout/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "availableAnchorPoints",
      value: expect.any(Array)
    },
    {
      name: "AVAILABLE_ANCHOR_POINTS",
      value: expect.any(Array)
    },
    {
      name: "anchorPoints",
      value: expect.any(Object)
    },
    {
      name: "Panel",
      value: expect.any(Function)
    },
    {
      name: "default.Panel",
      value: expect.any(Function)
    },
    {
      name: "offsetContainerVertical",
      value: expect.any(Function)
    },
    {
      name: "offsetPanelHorizontal",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
