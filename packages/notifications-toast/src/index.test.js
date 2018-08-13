import * as index from "./index";

describe("notifications-toast/index", () => {
  [
    {
      name: "default",
      value: expect.any(Function)
    },
    {
      name: "NotificationsToastList",
      value: expect.any(Function)
    }
  ].forEach(({ name, value }) => {
    it(`exports ${name}`, () => {
      expect(index).toHaveProperty(name, value);
    });
  });
});
