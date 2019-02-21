import stylesheet from "./TabPresenter.stylesheet";

describe("TabPresenter/stylesheet", () => {
  const themeData = {
    "density.spacings.medium": "1px",
    "tabs.general.borderBottomColor": "orange",
    "tabs.general.borderBottomWidth": "2px",
    "tabs.general.gutter": "3px",
    "tabs.general.tab.fontFamily": "CurlzMT",
    "tabs.general.tab.fontSize": "4px",
    "tabs.general.tab.fontWeight": "100",
    "tabs.general.tab.selected.borderBottomColor": "aliceblue",
    "tabs.general.tab.selected.borderBottomWidth": "5px",
    "tabs.general.tab.selected.fontWeight": "700"
  };

  it("returns an object", () => {
    expect(stylesheet({}, themeData)).toEqual(expect.any(Object));
  });

  describe("with label", () => {
    const styles = stylesheet({ label: "Info" }, themeData);

    expect(styles.tabLabel).toEqual(
      expect.objectContaining({
        "&:before": expect.objectContaining({
          content: expect.stringContaining("Info")
        })
      })
    );
  });

  describe("active", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: true }, themeData);

      expect(styles.tab).toEqual(
        expect.objectContaining({
          "&:before": expect.objectContaining({
            borderBottom: "5px solid aliceblue"
          })
        })
      );
    });
  });

  describe("not active", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: false }, themeData);

      expect(styles.tab).toEqual(
        expect.objectContaining({ borderBottom: "2px solid orange" })
      );
    });
  });
});
