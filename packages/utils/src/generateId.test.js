import generateId from "./generateId";

describe("utils/generateId", () => {
  it("returns a string", () => {
    expect(generateId("key")).toEqual(expect.any(String));
  });

  it("last token is a number", () => {
    const id = generateId("key");
    const tokens = id.split("-");
    const lastToken = tokens[tokens.length - 1];
    const number = Number.parseInt(lastToken, 10);

    expect(number).toBeGreaterThan(0);
  });
});
