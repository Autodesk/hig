import * as index from "./index";

describe("accordion/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function),
    },
    {
      name: "indicators",
      value: expect.any(Object),
    },
    {
      name: "AVAILABLE_INDICATORS",
      value: expect.any(Array),
    },
    {
      name: "indicatorPositions",
      value: expect.any(Object),
    },
    {
      name: "AVAILABLE_INDICATOR_POSITIONS",
      value: expect.any(Array),
    },
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
