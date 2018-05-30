import React from "react";
import renderer from "react-test-renderer";

import Submodule from "./Submodule";

describe("side-nav/Submodule", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {}
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Submodule {...otherProps}>{children}</Submodule>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
