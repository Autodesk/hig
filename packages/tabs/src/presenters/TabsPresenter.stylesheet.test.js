import stylesheet from "./TabsPresenter.stylesheet";

describe("tabs/TabsPresenter/stylesheet", () => {
  const themeData = {};

  it("returns an object", () => {
    expect(stylesheet({}, themeData)).toEqual(expect.any(Object));
  });

  it("returned object contains property of tabsWrapper", () => {
    const styles = stylesheet({}, themeData);
    expect(styles).toHaveProperty("tabsWrapper", expect.any(Object));
  });
});
