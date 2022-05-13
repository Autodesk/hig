import stylesheet from "./stylesheet";

describe("notifications-flyout/stylesheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of dismissButton", () => {
    expect(styles).toHaveProperty("dismissButton", expect.any(Object));
  });

  it("returned object contains property of notification", () => {
    expect(styles).toHaveProperty("notification", expect.any(Object));
  });

  it("returned object contains property of notificationContent", () => {
    expect(styles).toHaveProperty("notificationContent", expect.any(Object));
  });

  it("returned object contains property of notificationContentImage", () => {
    expect(styles).toHaveProperty(
      "notificationContentImage",
      expect.any(Object)
    );
  });

  it("returned object contains property of notificationContentText", () => {
    expect(styles).toHaveProperty(
      "notificationContentText",
      expect.any(Object)
    );
  });

  it("returned object contains property of panelTitle", () => {
    expect(styles).toHaveProperty("panelTitle", expect.any(Object));
  });

  it("returned object contains property of panelContainer", () => {
    expect(styles).toHaveProperty("panelContainer", expect.any(Object));
  });

  it("returned object contains property of panelLoading", () => {
    expect(styles).toHaveProperty("panelLoading", expect.any(Object));
  });

  it("returned object contains property of indicator", () => {
    expect(styles).toHaveProperty("indicator", expect.any(Object));
  });

  it("returned object contains property of indicatorCount", () => {
    expect(styles).toHaveProperty("indicatorCount", expect.any(Object));
  });

  it("returned object contains property of image", () => {
    expect(styles).toHaveProperty("image", expect.any(Object));
  });

  it("returned object contains property of emptyState", () => {
    expect(styles).toHaveProperty("emptyState", expect.any(Object));
  });

  it("returned object contains property of emptyStateImage", () => {
    expect(styles).toHaveProperty("emptyStateImage", expect.any(Object));
  });

  it("returned object contains property of emptyStateMessage", () => {
    expect(styles).toHaveProperty("emptyStateMessage", expect.any(Object));
  });

  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
