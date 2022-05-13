import baseTheme from "./index";
import * as typeConsts from "../consts/types";

const types = Object.values(typeConsts);

describe("baseTheme", () => {
  describe("unresolvedRoles", () => {
    Object.keys(baseTheme.unresolvedRoles).forEach((role) => {
      describe(role, () => {
        it("has a valid type", () => {
          expect(baseTheme.unresolvedRoles[role]).toHaveProperty("type");
          expect(types).toInclude(baseTheme.unresolvedRoles[role].type);
        });
      });
    });
  });
});
