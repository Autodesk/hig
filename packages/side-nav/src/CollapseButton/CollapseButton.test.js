import React from "react";
import renderer from "react-test-renderer";

import CollapseButton from "./CollapseButton";

describe("side-nav/CollapseButton", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {}
      },
      {
        description: "renders minimized",
        props: {
          minimized: true
        }
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = (
          <CollapseButton {...otherProps}>{children}</CollapseButton>
        );
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
