import stylesheet from "./stylesheet";

describe("tree-view/stylesheet", () => {
  const styles = stylesheet({}, {}, {}, {});

  it("returns an object", () => {
    expect(styles).toEqual(expect.any(Object));
  });

  it("returned object contains property of higTreeViewWrapper", () => {
    expect(styles).toHaveProperty("higTreeViewWrapper", expect.any(Object));
  });

  it("returned object contains property of higTreeView", () => {
    expect(styles).toHaveProperty("higTreeView", expect.any(Object));
  });

  it("returned object contains property of higTreeItem", () => {
    expect(styles).toHaveProperty("higTreeItem", expect.any(Object));
  });

  it("returned object contains property of higTreeItemContentWrapper", () => {
    expect(styles).toHaveProperty("higTreeItemContentWrapper", expect.any(Object));
  });

  it("returned object contains property of higTreeItemSubTreeViewWrapper", () => {
    expect(styles).toHaveProperty("higTreeItemSubTreeViewWrapper", expect.any(Object));
  });

  it("returned object contains property of higTreeItemSubTreeView", () => {
    expect(styles).toHaveProperty("higTreeItemSubTreeView", expect.any(Object));
  });

  it("returned object contains property of higTreeItemSubTreeViewLabelWrapper", () => {
    expect(styles).toHaveProperty("higTreeItemSubTreeViewLabelWrapper", expect.any(Object));
  });

  it("returned object contains property of higTreeItemSubTreeViewLabelContentWrapper", () => {
    expect(styles).toHaveProperty("higTreeItemSubTreeViewLabelContentWrapper", expect.any(Object));
  });

  it("returned object contains property of higTreeItemSubTreeItem", () => {
    expect(styles).toHaveProperty("higTreeItemSubTreeItem", expect.any(Object));
  });

  it("returns the custom stylesheet", () => {
    const props = {
      stylesheet: () => ({ padding: 0 })
    };
    expect(stylesheet(props, {})).toEqual({ padding: 0 });
  });
});
