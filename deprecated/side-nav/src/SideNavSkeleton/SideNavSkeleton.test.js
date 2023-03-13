import React from "react";
import renderer from "react-test-renderer";

import SideNavSkeleton from "./SideNavSkeleton";

describe("side-nav/SideNavSkeleton", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {},
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = (
          <SideNavSkeleton {...otherProps}>{children}</SideNavSkeleton>
        );
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
