import mapKeys from "./mapKeys";

describe("mapKeys", () => {
  it("replaces keys with return from iterator", () => {
    const obj = { pangolin: 0, iguana: 1 };
    expect(mapKeys(obj, (key) => key.toUpperCase())).toEqual({
      PANGOLIN: 0,
      IGUANA: 1,
    });
  });
});
