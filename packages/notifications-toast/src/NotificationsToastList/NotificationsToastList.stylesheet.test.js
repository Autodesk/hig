import stylesheet from "./NotificationsToastList.stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const placement = "top";

    expect(stylesheet({ placement })).toEqual(expect.any(Object));
  });
  it("returned object contains property of toastListWrapper", () => {
    expect(stylesheet({})).toHaveProperty(
      "toastListWrapper",
      expect.any(Object)
    );
  });
  describe("styles based placement prop", () => {
    it("returns the proper top placement style", () => {
      const placement = "top";
      const mockStyles = stylesheet({ placement });

      expect(mockStyles.toastListWrapper.top).toMatch("10px");
    });
    it("returns the proper bottom placement style", () => {
      const placement = "bottom";
      const mockStyles = stylesheet({ placement });

      expect(mockStyles.toastListWrapper.bottom).toMatch("10px");
    });
  });
  describe("custom stylesheet", () => {
    it("returns the custom stylesheet if stylesheet prop is used", () => {
      const customStylesheet = () => ({ padding: 0 });
      const mockStyles = stylesheet({ stylesheet: customStylesheet });

      expect(mockStyles).toEqual({ padding: 0 });
    });
  });
});
