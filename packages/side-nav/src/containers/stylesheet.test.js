import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {
    "colorScheme.lowShadowColor": "grey"
  };
  const props = {};
  const subject = () => stylesheet(props, themeData);

  it("renders correctly", () => {
    expect(subject(null)).toHaveProperty("docked");
    expect(subject(null)).toHaveProperty("belowTop");
    expect(subject(null)).toHaveProperty("belowTopCompact");
  });
});
