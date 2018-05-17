import targets from "./targets";

describe("text-link/targets", () => {
  it("has an array of available types", () => {
    const validTargets = ["_self", "_blank", "_parent", "_top"];
    expect(targets).toEqual(expect.arrayContaining(validTargets));
  });
});
