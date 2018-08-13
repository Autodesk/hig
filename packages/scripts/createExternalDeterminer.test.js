import createExternalDeterminer from "./createExternalDeterminer";

describe("scripts/createExternalDeterminer", () => {
  const externalDependencies = Object.freeze(["foo", "bar", "@scoped/foo"]);

  it("creates a function", () => {
    const determiner = createExternalDeterminer(externalDependencies);

    expect(determiner).toEqual(expect.any(Function));
  });

  describe("determiner", () => {
    let determiner;

    beforeEach(() => {
      determiner = createExternalDeterminer(externalDependencies);
    });

    [
      {
        moduleName: "./relative/module/path",
        isExternal: false
      },
      {
        moduleName: "../parent/directory",
        isExternal: false
      },
      {
        moduleName: "foo",
        isExternal: true
      },
      {
        moduleName: "foo/module-random.css",
        isExternal: false
      },
      {
        moduleName: "dependency/module-random.js",
        isExternal: false
      },
      {
        moduleName: "@scoped/foo/hello",
        isExternal: true
      },
      {
        moduleName: "@scoped/foo",
        isExternal: true
      }
    ].forEach(({ moduleName, isExternal }) => {
      const prediction = isExternal ? "external" : "not external";

      it(`determines that "${moduleName}" is ${prediction}`, () => {
        expect(determiner(moduleName)).toEqual(isExternal);
      });
    });
  });
});
