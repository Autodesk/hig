describe("themes/ThemeContext/BaseContext", () => {
  beforeEach(() => {
    jest.spyOn(global.console, "warn");
  });

  it("should print a warning if loaded more than once", () => {
    /* eslint-disable-next-line global-require */
    require("./BaseContext");
    /* eslint-disable-next-line global-require */
    require("./BASECONTEXT");
    expect(global.console.warn).toBeCalled();
  });
});
