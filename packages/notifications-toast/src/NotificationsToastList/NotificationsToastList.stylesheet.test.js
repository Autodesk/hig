import stylesheet from "./NotificationsToastList.stylesheet";

describe("stylesheet", () => {
  it("returns an oject", () => {
    const placement = "top";

    expect(stylesheet(placement)).toEqual(expect.any(Object));
  });
  describe("styles based placement prop", () => {
    it("returns the proper top placement style", () => {
      const placement = "top";
      const mockStyles = stylesheet(placement);

      expect(mockStyles.toastListWrapper.top).toMatch("10px");
    });
    it("returns the proper bottom placement style", () => {
      const placement = "bottom";
      const mockStyles = stylesheet(placement);

      expect(mockStyles.toastListWrapper.bottom).toMatch("10px");
    });
  });
});
