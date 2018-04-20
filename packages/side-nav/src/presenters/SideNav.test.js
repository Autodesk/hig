import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import SideNav from "./SideNav";

describe("side-nav/presenters/SideNav", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders without props",
        props: {}
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <SideNav {...otherProps}>{children}</SideNav>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
