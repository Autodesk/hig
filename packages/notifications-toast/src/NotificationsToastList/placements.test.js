import * as placements from "./placements";

describe("NotificationsToastList/placements", () => {
  it("has an array of available placements", () => {
    expect(placements).toHavePropertyOfConstants("AVAILABLE_PLACEMENTS");
  });

  it("has constants for placements", () => {
    expect(placements).toHavePropertyOfConstants("placements");
  });
});
