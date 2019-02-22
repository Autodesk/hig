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
    "tabs.general.tab.focus.halo.color": "burlywood",
    "tabs.general.tab.focus.halo.width": "9px",
    "tabs.general.tab.hover.borderBottomColor": "pink",
    "tabs.general.tab.hover.borderBottomWidth": "7px",
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
            borderBottomColor: "aliceblue",
            borderBottomWidth: "5px"
          })
        })
      );
    });
  });

  describe("hasHover", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ hasHover: true }, themeData);

      expect(styles.tab).toEqual(
        expect.objectContaining({
          "&:before": expect.objectContaining({
            borderBottomColor: "pink",
            borderBottomWidth: "7px"
          })
        })
      );
    });
  });

  describe("active and hasHover", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: true, hasHover: true }, themeData);

      expect(styles.tab).toEqual(
        expect.objectContaining({
          "&:before": expect.objectContaining({
            borderBottomColor: "aliceblue",
            borderBottomWidth: "5px"
          })
        })
      );
    });
  });

  describe("active and hasFocus", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: true, hasFocus: true }, themeData);

      expect(styles.tab).toEqual(
        expect.objectContaining({
          "&:before": expect.objectContaining({
            borderBottomColor: "aliceblue",
            borderBottomWidth: "5px"
          }),
          "&:after": expect.objectContaining({
            borderBottom: "9px solid burlywood"
          })
        })
      );
    });
  });

  describe("not active or hasHover", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({}, themeData);

      expect(styles.tab).toEqual(
        expect.objectContaining({
          borderBottom: "2px solid orange",
          "&:before": expect.objectContaining({
            borderBottomColor: "transparent"
          })
        })
      );
    });
  });
});
