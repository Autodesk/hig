import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const props = {};
  const themeData = {};

  it("returns an object", () => {
    expect(stylesheet(props, themeData)).toEqual(expect.any(Object));
  });

  it("contains styles for anchor, header, paragraph, and list elements", () => {
    expect(stylesheet(props, themeData).richText).toEqual(
      expect.objectContaining({
        a: expect.any(Object),
        h1: expect.any(Object),
        h2: expect.any(Object),
        h3: expect.any(Object),
        p: expect.any(Object),
        "ul, ol": expect.any(Object),
      })
    );
  });

  it("returned object contains property of richText", () => {
    expect(stylesheet(props, themeData)).toHaveProperty(
      "richText",
      expect.any(Object)
    );
  });

  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
