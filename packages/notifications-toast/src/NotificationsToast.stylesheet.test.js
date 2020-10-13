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

    expect(stylesheet({ status }, mockThemeData)).toEqual(expect.any(Object));
  });
  it("returned object contains property of toast", () => {
    expect(stylesheet({}, mockThemeData)).toHaveProperty(
      "toast",
      expect.any(Object)
    );
  });
  it("returned object contains property of toastImageContainer", () => {
    expect(stylesheet({}, mockThemeData)).toHaveProperty(
      "toastImageContainer",
      expect.any(Object)
    );
  });
  it("returned object contains property of toastBody", () => {
    expect(stylesheet({}, mockThemeData)).toHaveProperty(
      "toastBody",
      expect.any(Object)
    );
  });
  it("returned object contains property of toastMessage", () => {
    expect(stylesheet({}, mockThemeData)).toHaveProperty(
      "toastMessage",
      expect.any(Object)
    );
  });
  it("returned object contains property of toastDismiss", () => {
    expect(stylesheet({}, mockThemeData)).toHaveProperty(
      "toastDismiss",
      expect.any(Object)
    );
  });

  describe("the notification status colors", () => {
    it("returns the proper warning color", () => {
      const status = "warning";
      const mockStyles = stylesheet({ status }, mockThemeData);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.status.warning"]
      );
    });
    it("returns the proper error color", () => {
      const status = "error";
      const mockStyles = stylesheet({ status }, mockThemeData);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.status.error"]
      );
    });
    it("returns the proper error color", () => {
      const status = "success";
      const mockStyles = stylesheet({ status }, mockThemeData);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["colorScheme.status.success"]
      );
    });
    it("returns the proper primary color", () => {
      const status = "primary";
      const mockStyles = stylesheet({ status }, mockThemeData);

      expect(mockStyles.toast.borderLeftColor).toMatch(
        mockThemeData["basics.colors.primary.autodeskBlue.500"]
      );
    });
  });
  describe("custom stylesheet", () => {
    it("returns the custom stylesheet if stylesheet prop is used", () => {
      const customStylesheet = () => ({ padding: 0 });
      const mockStyles = stylesheet(
        { stylesheet: customStylesheet },
        mockThemeData
      );

      expect(mockStyles).toEqual({ padding: 0 });
    });
  });
});
