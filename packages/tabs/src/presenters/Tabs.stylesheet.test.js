import stylesheet from "./Tabs.stylesheet";

describe("tabs/stylesheet", () => {
  const themeData = {};
  const styles = stylesheet({}, themeData);

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of wrapper", () => {
    expect(styles).toHaveProperty("wrapper", expect.any(Object));
  });

  it("returned object contains property of tabsWrapper", () => {
    expect(styles).toHaveProperty("tabsWrapper", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
