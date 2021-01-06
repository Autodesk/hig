import * as index from "./index";

describe("slider/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "sliderTypes",
      value: expect.any(Object)
    },
    {
      name: "AVAILABLE_SLIDER_TYPES",
      value: expect.any(Array)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
