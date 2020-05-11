import stylesheet from "./NotificationsToast.stylesheet";

describe("stylesheet", () => {
  const mockThemeData = {
    "colorScheme.status.error": "red",
    "colorScheme.status.warning": "yellow",
    "colorScheme.status.success": "green",
    "basics.colors.primary.autodeskBlue.500": "blue"
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
        mockThemeData["colorScheme.status.warning"]
      );
    });
    it("returns the proper error color", () => {
      const status = "error";
      const mockStyles = stylesheet(mockThemeData, status);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.status.error"]
      );
    });
    it("returns the proper error color", () => {
      const status = "success";
      const mockStyles = stylesheet(mockThemeData, status);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.status.success"]
      );
    });
    it("returns the proper primary color", () => {
      const status = "primary";
      const mockStyles = stylesheet(mockThemeData, status);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["basics.colors.primary.autodeskBlue.500"]
      );
    });
  });
});
