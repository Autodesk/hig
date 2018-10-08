import * as transitionStatusesModule from "./transitionStatuses";

describe("flyout/transitionStatuses", () => {
  it("has an array of available anchor points", () => {
    expect(transitionStatusesModule).toHavePropertyOfConstants(
      "AVAILABLE_TRANSITION_STATUSES"
    );
  });

  it("has constants for anchor points", () => {
    expect(transitionStatusesModule).toHavePropertyOfConstants(
      "transitionStatuses"
    );
  });
});
