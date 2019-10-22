import stylesheet from "./TabCloseButtonPresenter.stylesheet";

describe("tabs/TabCloseButtonPresenter/stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of button", () => {
    expect(styles).toHaveProperty("button", expect.any(Object));
  });
});
