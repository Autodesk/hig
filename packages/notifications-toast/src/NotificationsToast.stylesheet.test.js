import stylesheet from "./NotificationsToast.stylesheet";

describe("stylesheet", () => {
  const mockThemeData = {
    "colorScheme.errorColor": "red",
    "colorScheme.warningColor": "yellow",
    "colorScheme.successColor": "green",
    "basics.colors.autodeskBlue500": "blue"
  };
  it("returns an oject", () => {
    const status = "warning";

    expect(stylesheet(mockThemeData, status)).toEqual(expect.any(Object));
  });

  describe("the notification status colors", () => {
    it("returns the proper warning color", () => {
      const status = "warning";
      const mockStyles = stylesheet(mockThemeData, status);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.warningColor"]
      );
    });
    it("returns the proper error color", () => {
      const status = "error";
      const mockStyles = stylesheet(mockThemeData, status);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.errorColor"]
      );
    });
    it("returns the proper error color", () => {
      const status = "success";
      const mockStyles = stylesheet(mockThemeData, status);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.successColor"]
      );
    });
    it("returns the proper primary color", () => {
      const status = "primary";
      const mockStyles = stylesheet(mockThemeData, status);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["basics.colors.autodeskBlue500"]
      );
    });
  });
});
