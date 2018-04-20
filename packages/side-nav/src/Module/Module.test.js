import { shallow } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Module from "./Module";

describe("side-nav/Module", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with minimal props",
        props: {
          title: "Module"
        }
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Module {...otherProps}>{children}</Module>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
