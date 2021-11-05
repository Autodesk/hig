import generateAllThemes from "./generateAllThemes";

const colorSchemes = [
  {
    metadata: {
      colorSchemeName: "Red",
      colorSchemeId: "hig-red-scheme",
      className: "my-red-scheme"
    },
    unresolvedRoles: {
      "basics.colors.red": { value: "#ff0000", metadata: { deprecated: true } },
      "colorScheme.accentColor": { value: { ref: "basics.colors.red" } }
    }
  },
  {
    metadata: {
      colorSchemeName: "Blue",
      colorSchemeId: "hig-blue-scheme",
      className: "my-blue-scheme"
    },
    unresolvedRoles: {
      "basics.colors.blue": { value: "#0000ff" },
      "colorScheme.accentColor": { value: { ref: "basics.colors.blue" } }
    }
  }
];

const densities = [
  {
    metadata: {
      densityId: "high-density",
      densityName: "High density"
    }
  },
  {
    metadata: {
      densityId: "low-density",
      densityName: "Low density"
    },
    unresolvedRoles: {
      "density.textSize": {
        value: "16px"
      }
    }
  }
];

describe("generateAllThemes", () => {
  let result;

  beforeAll(() => {
    result = generateAllThemes(colorSchemes, densities);
  });

  it("combines each color scheme and density", () => {
    expect(result.length).toEqual(4);
  });

  describe("a theme", () => {
    let redHighDensityTheme;
    beforeAll(() => {
      [redHighDensityTheme] = result;
    });

    describe("metadata", () => {
      [
        ["fileName", "redHighDensityTheme"],
        ["name", "Red, High density"],
        ["id", "hig-red-scheme-high-density"],
        ["colorSchemeName", "Red"],
        ["colorSchemeId", "hig-red-scheme"],
        ["densityName", "High density"],
        ["densityId", "high-density"],
        ["className", "my-red-scheme"],
        [
          "__deprecated__",
          {
            "basics.colors.red": true,
            "density.textSize": { equivalent: "density.base.textSize" }
          }
        ]
      ].forEach(([property, value]) => {
        it(`includes ${property}`, () => {
          expect(redHighDensityTheme.metadata).toHaveProperty(property, value);
        });
      });
    });

    it("has unresolvedRoles", () => {
      expect(redHighDensityTheme.unresolvedRoles).toBeDefined();
      expect(
        redHighDensityTheme.unresolvedRoles["colorScheme.accentColor"]
      ).toHaveProperty("value", { ref: "basics.colors.red" });
    });

    it("has resolvedRoles", () => {
      expect(redHighDensityTheme.resolvedRoles).toBeDefined();
      expect(
        redHighDensityTheme.resolvedRoles["colorScheme.accentColor"]
      ).toEqual("#ff0000");
    });
  });
});
