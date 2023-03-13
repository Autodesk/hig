import React from "react";
import renderer from "react-test-renderer";

import BelowTopNav from "./BelowTopNav";

describe("side-nav/containers/BelowTopNav", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders without props",
        props: {},
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <BelowTopNav {...otherProps}>{children}</BelowTopNav>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
