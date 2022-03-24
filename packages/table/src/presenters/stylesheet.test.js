import stylesheet from "./stylesheet";

describe("table/stylesheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of higTable", () => {
    expect(styles).toHaveProperty("higTable", expect.any(Object));
  });

  it("returned object contains property of higTableRow", () => {
    expect(styles).toHaveProperty("higTableRow", expect.any(Object));
  });

  it("returned object contains property of higTableHeaderWrapper", () => {
    expect(styles).toHaveProperty("higTableHeaderWrapper", expect.any(Object));
  });

  it("returned object contains property of higTableHeader", () => {
    expect(styles).toHaveProperty("higTableHeader", expect.any(Object));
  });

  it("returned object contains property of higTableHeaderContentWrapper", () => {
    expect(styles).toHaveProperty(
      "higTableHeaderContentWrapper",
      expect.any(Object)
    );
  });

  it("returned object contains property of higTableHeaderRow", () => {
    expect(styles).toHaveProperty("higTableHeaderRow", expect.any(Object));
  });

  it("returned object contains property of higTableHeaderResizer", () => {
    expect(styles).toHaveProperty("higTableHeaderResizer", expect.any(Object));
  });

  it("returned object contains property of higTableBody", () => {
    expect(styles).toHaveProperty("higTableBody", expect.any(Object));
  });

  it("returned object contains property of higTableCell", () => {
    expect(styles).toHaveProperty("higTableCell", expect.any(Object));
  });

  it("returned object contains property of higTableCellContentWrapper", () => {
    expect(styles).toHaveProperty(
      "higTableCellContentWrapper",
      expect.any(Object)
    );
  });

  it("returned object contains property of higTableCustomExpander", () => {
    expect(styles).toHaveProperty("higTableCustomExpander", expect.any(Object));
  });

  it("returned object contains property of headerHolder", () => {
    expect(styles).toHaveProperty("headerHolder", expect.any(Object));
  });

  it("returned object contains property of groupHeaderElement", () => {
    expect(styles).toHaveProperty("groupHeaderElement", expect.any(Object));
  });
});
