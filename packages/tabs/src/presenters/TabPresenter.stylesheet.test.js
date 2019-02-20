import stylesheet from "./TabPresenter.stylesheet";

describe("TabPresenter/stylesheet", () => {
  it("returns an object", () => {
    expect(stylesheet({})).toEqual(expect.any(Object));
  });

  describe("active", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: true });

      expect(styles.tabLabel).toEqual(
        expect.objectContaining({
          borderBottomColor: "rgba(6, 150, 215, 1)",
          padding: "4px 0"
        })
      );

      expect(styles.tabLabelText).toEqual(
        expect.objectContaining({
          color: "rgba(6, 150, 215, 1)"
        })
      );
    });
  });

  describe("not active", () => {
    it("returns an object with correct rules", () => {
      const styles = stylesheet({ active: false });

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
