import stylesheet from "./ContentPresenter.stylesheet";

describe("tabs/ContentPresenter/stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of content", () => {
    expect(styles).toHaveProperty("content", expect.any(Object));
  });
});
