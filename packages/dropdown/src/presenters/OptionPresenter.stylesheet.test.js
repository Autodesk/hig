import stylesheet from "./OptionPresenter.stylesheet";

describe("dropdown/OptionPresenter.styelsheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of option", () => {
    expect(styles).toHaveProperty("option", expect.any(Object));
  });

  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
