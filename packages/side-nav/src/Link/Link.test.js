import React from "react";
import renderer from "react-test-renderer";

import Link from "./Link";

describe("side-nav/Link", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {},
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Link {...otherProps}>{children}</Link>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
