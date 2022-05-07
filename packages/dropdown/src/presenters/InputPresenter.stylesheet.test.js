import stylesheet from "./InputPresenter.stylesheet";

describe("dropdown/InputPresenter.styelsheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of inputWrapper", () => {
    expect(styles).toHaveProperty("inputWrapper", expect.any(Object));
  });

  it("returned object contains property of caret", () => {
    expect(styles).toHaveProperty("caret", expect.any(Object));
  });

  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
