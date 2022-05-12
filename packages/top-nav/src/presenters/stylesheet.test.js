import stylesheet from "./stylesheet";

describe("top-nav/stylesheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of topNav", () => {
    expect(styles).toHaveProperty("topNav", expect.any(Object));
  });

  it("returned object contains property of topNavSpacer", () => {
    expect(styles).toHaveProperty("topNavSpacer", expect.any(Object));
  });

  it("returned object contains property of topNavLogoWrapper", () => {
    expect(styles).toHaveProperty("topNavLogoWrapper", expect.any(Object));
  });

  it("returned object contains property of topNavSeparator", () => {
    expect(styles).toHaveProperty("topNavSeparator", expect.any(Object));
  });

  it("returned object contains property of topNavProfileAction", () => {
    expect(styles).toHaveProperty("topNavProfileAction", expect.any(Object));
  });

  it("returned object contains property of topNavProfileActionButtonWrapper", () => {
    expect(styles).toHaveProperty(
      "topNavProfileActionButtonWrapper",
      expect.any(Object)
    );
  });

  it("returned object contains property of topNavLogo", () => {
    expect(styles).toHaveProperty("topNavLogo", expect.any(Object));
  });

  it("returned object contains property of topNavLogoTextPresenter", () => {
    expect(styles).toHaveProperty(
      "topNavLogoTextPresenter",
      expect.any(Object)
    );
  });

  it("returned object contains property of topNavInteractions", () => {
    expect(styles).toHaveProperty("topNavInteractions", expect.any(Object));
  });

  it("returned object contains property of topNavAction", () => {
    expect(styles).toHaveProperty("topNavAction", expect.any(Object));
  });

  it("returned object contains property of topNavActionFlyoutPanel", () => {
    expect(styles).toHaveProperty(
      "topNavActionFlyoutPanel",
      expect.any(Object)
    );
  });

  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
