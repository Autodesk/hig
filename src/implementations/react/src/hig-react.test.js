import * as ReactHIG from "./hig-react";

describe("hig-react", () => {
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
});
