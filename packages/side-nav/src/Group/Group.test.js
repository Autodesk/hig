import React from "react";
import renderer from "react-test-renderer";

import Group from "./Group";

describe("side-nav/Group", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {},
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Group {...otherProps}>{children}</Group>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
