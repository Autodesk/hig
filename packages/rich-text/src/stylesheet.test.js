import stylesheet from "./stylesheet";

describe("stylesheet", () => {
  const themeData = {};

  it("returns an object", () => {
    expect(stylesheet(themeData)).toEqual(expect.any(Object));
  });

  it("contains styles for anchor, header, paragraph, and list elements", () => {
    expect(stylesheet(themeData).richText).toEqual(
      expect.objectContaining({
        a: expect.any(Object),
        h1: expect.any(Object),
        h2: expect.any(Object),
        h3: expect.any(Object),
        p: expect.any(Object),
        "ul, ol": expect.any(Object)
      })
    );
  });
});
