import stylesheet from "./Tab.stylesheet";

describe("tabs/Tab/stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of tab", () => {
    expect(styles).toHaveProperty("tab", expect.any(Object));
  });

  it("returned object contains property of buttonWrapper", () => {
    expect(styles).toHaveProperty("buttonWrapper", expect.any(Object));
  });

  it("returned object contains property of contentWrapper", () => {
    expect(styles).toHaveProperty("contentWrapper", expect.any(Object));
  });

  it("returned object contains property of label", () => {
    expect(styles).toHaveProperty("label", expect.any(Object));
  });

  it("returned object contains property of halo", () => {
    expect(styles).toHaveProperty("halo", expect.any(Object));
  });

  it("returned object contains property of divider", () => {
    expect(styles).toHaveProperty("divider", expect.any(Object));
  });

  it("returned object contains property of icon", () => {
    expect(styles).toHaveProperty("icon", expect.any(Object));
  });

  it("returned object contains property of closeButton", () => {
    expect(styles).toHaveProperty("closeButton", expect.any(Object));
  });

  it("returned object contains property of button", () => {
    expect(styles).toHaveProperty("button", expect.any(Object));
  });

  it("returned object contains property of content", () => {
    expect(styles).toHaveProperty("content", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 }),
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
