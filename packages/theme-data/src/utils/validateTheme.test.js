import validateTheme from "./validateTheme";

const themeSchema = {
  FOO_COLOR: { type: "color" },
  BAR_LENGTH: { type: "length" }
};

function describeValuesForType({ types, validValues, invalidValues }) {
  types.forEach(type => {
    describe(`with a role of type ${type}`, () => {
      const myType = type;
      const mySchema = {
        MY_ROLE: { type: myType }
      };

      validValues.forEach(value => {
        describe(value, () => {
          it("is valid", () => {
            const result = validateTheme({ MY_ROLE: value }, mySchema);
            expect(result.valid).toEqual(true);
          });
        });
      });

      invalidValues.forEach(value => {
        describe(value, () => {
          it("is invalid", () => {
            const result = validateTheme({ MY_ROLE: value }, mySchema);
            expect(result.errors).toBeTruthy();
            expect(result.valid).toEqual(false);
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
      BAR_LENGTH: "12px"
    };

    it("returns undefined", () => {
      const result = validateTheme(happyTheme, themeSchema);
      expect(result.errors).toBeFalsy();
      expect(result.valid).toEqual(true);
    });
  });

  describe("with a missing role", () => {
    const missingRoleTheme = {
      FOO_COLOR: "#F00"
    };

    it("returns an error message", () => {
      const result = validateTheme(missingRoleTheme, themeSchema);
      expect(result.errors).toBeTruthy();
      expect(result.errors[0].message).toMatch(/BAR_LENGTH/);
    });
  });

  describe("with an extra role", () => {
    const extraRoleTheme = {
      FOO_COLOR: "#F00",
      BAR_LENGTH: "12px",
      BAZ_COLOR: "#0F0"
    };

    it("returns an error message", () => {
      const result = validateTheme(extraRoleTheme, themeSchema);
      expect(result.errors).toBeTruthy();
      expect(result.errors[0].message).toMatch(/BAZ_COLOR/);
    });
  });

  describeValuesForType({
    types: ["color"],
    validValues: ["#F00", "#FF0000", "rgba(0, 0, 0, 0.5)", "purple"],
    invalidValues: ["12px", "0"]
  });

  describeValuesForType({
    types: ["borderRadius", "borderWidth", "length", "fontSize", "spacing"],
    validValues: ["0", "16px", "50%", "10em"],
    invalidValues: ["#f00", "rgba(0, 0, 0, 0.5)", "14", "a long way off"]
  });

  describeValuesForType({
    types: ["fontWeight"],
    validValues: [400, 500, 700, "400", "500", "700"],
    invalidValues: ["400px", "bold"]
  });
});
