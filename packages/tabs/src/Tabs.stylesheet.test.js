import stylesheet from "./Tabs.stylesheet";

describe("tabs/stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of wrapper", () => {
    expect(styles).toHaveProperty("wrapper", expect.any(Object));
  });
});
