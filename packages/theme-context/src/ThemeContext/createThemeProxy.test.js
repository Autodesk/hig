import createThemeProxy from "./createThemeProxy";

/* eslint-disable no-console */
describe("ThemeContext/createThemeProxy", () => {
  const theme = {
    metadata: {
      __deprecated__: {
        navyBlue: true,
        icyBlue: { equivalent: "aliceBlue" }
      }
    },
    resolvedRoles: {
      black: "#000000",
      navyBlue: "#000080",
      icyBlue: "#f0f8ff"
    },
    otherData: {}
  };

  beforeEach(() => {
    jest.spyOn(console, "error").mockImplementation(() => {});
    jest.spyOn(console, "warn").mockImplementation(() => {});
  });

  describe("theme", () => {
    describe("when a property does not exist", () => {
      it("console logs an error and returns as usual", () => {
        expect(createThemeProxy(theme).unknownProperty).toBe(undefined);

        expect(console.error).toHaveBeenCalledWith(
          "Property unknownProperty does not exist."
        );
      });
    });

    describe("when a property on a child object property does not exist", () => {
      it("console logs an error and returns as usual", () => {
        expect(createThemeProxy(theme).otherData.unknownProperty).toBe(
          undefined
        );

        expect(console.error).toHaveBeenCalledWith(
          "Property unknownProperty does not exist."
        );
      });
    });
  });

  describe("resolvedRoles", () => {
    describe("when roles is anything other than an object", () => {
      const otherTheme = {
        resolvedRoles: ""
      };

      it("returns as usual", () => {
        expect(createThemeProxy(otherTheme).resolvedRoles).toEqual("");
      });
    });

    describe("when roles is an object", () => {
      let resolvedRoles;

      beforeEach(() => {
        ({ resolvedRoles } = createThemeProxy(theme));
      });

      describe("when a resolved role exists on the theme", () => {
        describe("and the role is not included in deprecated roles", () => {
          it("returns the value without a console warn", () => {
            expect(resolvedRoles.black).toEqual("#000000");
            expect(console.warn).not.toHaveBeenCalled();
          });
        });

        describe("and the role is included in deprecated roles", () => {
          describe("and has an equivalent", () => {
            it("prints a console warn with equivalency info and returns as usual", () => {
              expect(resolvedRoles.icyBlue).toEqual("#f0f8ff");

              expect(console.warn).toHaveBeenCalledWith(
                "Role icyBlue is deprecated and has been renamed to aliceBlue."
              );
            });
          });

          describe("and has no equivalent", () => {
            it("prints a console warn and returns as usual", () => {
              expect(resolvedRoles.navyBlue).toEqual("#000080");

              expect(console.warn).toHaveBeenCalledWith(
                "Role navyBlue is deprecated."
              );
            });
          });
        });
      });

      describe("when a resolved role does not exist", () => {
        it("console logs an error and returns as usual", () => {
          expect(resolvedRoles.blue).toBe(undefined);

          expect(console.error).toHaveBeenCalledWith(
            "Role blue does not exist"
          );
        });
      });
    });
  });
});
