import stylesheet from "./Avatar.stylesheet";

describe("stylesheet", () => {
  const styles = stylesheet({}, {});

  it("returns an oject", () => {
    expect(styles).toEqual(expect.any(Object));
  });
  it("returned object contains property of avatarContainer", () => {
    expect(styles).toHaveProperty("avatarContainer", expect.any(Object));
  });
  it("returned object contains property of avatarImageWrapper", () => {
    expect(styles).toHaveProperty("avatarImageWrapper", expect.any(Object));
  });
  it("returned object contains property of avatarImage", () => {
    expect(styles).toHaveProperty("avatarImage", expect.any(Object));
  });
  it("returned object contains property of avatarInitials", () => {
    expect(styles).toHaveProperty("avatarInitials", expect.any(Object));
  });
  it("returns the custom stylesheet", () => {
    expect(stylesheet({ stylesheet: () => ({ padding: 0 }) }, {})).toEqual({
      padding: 0,
    });
  });
});
