import validateTheme from "./validateTheme";
import {
  COLOR,
  BORDER_RADIUS,
  BORDER_WIDTH,
  FONT_WEIGHT,
  LENGTH,
  FONT_SIZE,
  SPACING,
} from "../consts/types";

const aBaseTheme = {
  FOO_COLOR: { type: COLOR },
  BAR_LENGTH: { type: LENGTH },
};

function describeValuesForType({ types, validValues, invalidValues }) {
  types.forEach((type) => {
    describe(`with a role of type ${type}`, () => {
      const myType = type;
      const myBaseTheme = {
        MY_ROLE: { type: myType },
      };

      validValues.forEach((value) => {
        describe(value, () => {
          it("is valid", () => {
            const result = validateTheme({ MY_ROLE: value }, myBaseTheme);
            expect(result.valid).toEqual(true);
          });
        });
      });

      invalidValues.forEach((value) => {
        describe(value, () => {
          it("is invalid", () => {
            const result = validateTheme({ MY_ROLE: value }, myBaseTheme);
            expect(result.valid).toEqual(false);
            expect(result.errors).toBeTruthy();
            expect(result.errors[0].message).toMatch(/MY_ROLE/);
          });
        });
      });
    });
  });
}

describe("validateTheme", () => {
  describe("with a valid theme", () => {
    const happyTheme = {
      FOO_COLOR: "#F00",
      BAR_LENGTH: "12px",
    };

    it("returns undefined", () => {
      const result = validateTheme(happyTheme, aBaseTheme);
      expect(result.valid).toBeTrue();
      expect(result.errors).toBeFalsy();
    });
  });

  describe("with a missing role", () => {
    const missingRoleTheme = {
      FOO_COLOR: "#F00",
    };

    it("returns an error message", () => {
      const result = validateTheme(missingRoleTheme, aBaseTheme);
      expect(result.valid).toBeFalse();
      expect(result.errors).toBeTruthy();
      expect(result.errors[0].message).toMatch(/BAR_LENGTH/);
    });
  });

  describe("with an extra role", () => {
    const extraRoleTheme = {
      FOO_COLOR: "#F00",
      BAR_LENGTH: "12px",
      BAZ_COLOR: "#0F0",
    };

    it("returns an error message", () => {
      const result = validateTheme(extraRoleTheme, aBaseTheme);
      expect(result.valid).toBeFalse();
      expect(result.errors).toBeTruthy();
      expect(result.errors[0].message).toMatch(/BAZ_COLOR/);
    });
  });

  describeValuesForType({
    types: [COLOR],
    validValues: ["#F00", "#FF0000", "rgba(0, 0, 0, 0.5)", "purple"],
    invalidValues: ["12px", "0", undefined],
  });

  describeValuesForType({
    types: [BORDER_RADIUS, BORDER_WIDTH, LENGTH, FONT_SIZE, SPACING],
    validValues: ["0", "16px", "50%", "10em"],
    invalidValues: [
      "#f00",
      "rgba(0, 0, 0, 0.5)",
      "14",
      "a long way off",
      undefined,
    ],
  });

  describeValuesForType({
    types: [FONT_WEIGHT],
    validValues: [400, 500, 700, "400", "500", "700"],
    invalidValues: ["400px", "bold", undefined],
  });
});
