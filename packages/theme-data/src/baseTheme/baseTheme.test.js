import baseTheme from "./index";

describe("baseTheme", () => {
  describe("unresolvedRoles", () => {
    Object.keys(baseTheme.unresolvedRoles).forEach(role => {
      describe(role, () => {
        it("has a type", () => {
          expect(baseTheme.unresolvedRoles[role]).toHaveProperty("type");
        });
      });
    });
  });
});
