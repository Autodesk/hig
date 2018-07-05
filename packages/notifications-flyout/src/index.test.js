import * as index from "./index";

describe("notifications-flyout/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "Notification",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
