import * as ReactHIG from "./hig-react";
import availableComponents from "./_availableComponents";

describe("hig-react", () => {
  it("it exports all of the available components", () => {
    availableComponents.forEach(componentName => {
      expect(ReactHIG[componentName]).toBeDefined();
    });
  });

  describe("exported components", () => {
    Object.values(ReactHIG)
      .filter(Component => typeof Component === "function")
      .forEach(Component => {
        describe(Component.name, () => {
          it("implements propTypes and docgenInfo", () => {
            expect(Component).toHavePropTypesAndDocGenInfo();
          });
        });
      });
  });

  describe("other exports", () => {
    it("exports colors", () => {
      expect(ReactHIG.colors).toBeDefined();
    });

    it("exports sizes", () => {
      expect(ReactHIG.sizes).toBeDefined();
    });

    it("exports breakpoints", () => {
      expect(ReactHIG.breakpoints).toBeDefined();
    });
  });
});
