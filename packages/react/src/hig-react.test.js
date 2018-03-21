import * as ReactHIG from "./hig-react";
import availableComponents from "./_availableComponents";

describe("hig-react", () => {
  describe("exported components", () => {
    availableComponents.forEach(componentName => {
      describe(componentName, () => {
        it("implements propTypes and docgenInfo", () => {
          const Component = ReactHIG[componentName];

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
