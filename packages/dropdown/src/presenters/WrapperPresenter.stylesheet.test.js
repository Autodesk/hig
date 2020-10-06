import stylesheet from "./WrapperPresenter.stylesheet";

describe("dropdown/WrapperPresenter.styelsheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of dropdownWrapper", () => {
    expect(styles).toHaveProperty("dropdownWrapper", expect.any(Object));
  });

  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 })
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
