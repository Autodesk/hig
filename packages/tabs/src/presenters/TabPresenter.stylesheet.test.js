import stylesheet from "./TabPresenter.stylesheet";

describe("TabPresenter/stylesheet", () => {
  const themeData = {
    "density.spacings.medium": "1px",
    "tabs.general.borderBottomWidth": "2px",
    "tabs.general.gutter": "3px",
    "tabs.general.tab.fontSize": "4px",
    "tabs.general.tab.fontWeight": "100",
    "tabs.general.tab.selected.borderBottomColor": "aliceblue"
  };

  it("returns an object", () => {
    expect(stylesheet({}, themeData)).toEqual(expect.any(Object));
  });

  describe("active", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: true }, themeData);

      expect(styles.tabLabel).toEqual(
        expect.objectContaining({
          borderBottomColor: "aliceblue",
          padding: "3px 0"
        })
      );

      expect(styles.tabLabelText).toEqual(
        expect.objectContaining({
          color: "aliceblue"
        })
      );
    });
  });

  describe("not active", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: false }, themeData);

      expect(styles.tabLabel).toEqual(
        expect.objectContaining({ borderBottom: "2px solid transparent" })
      );

      expect(styles.tabLabel).not.toEqual(
        expect.objectContaining({ padding: expect.any(String) })
      );

      expect(styles.tabLabelText).not.toEqual(
        expect.objectContaining({ color: expect.any(String) })
      );
    });
  });
});
