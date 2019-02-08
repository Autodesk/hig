import React from "react";
import renderer from "react-test-renderer";

import Docked from "./Docked";

jest.mock("./stylesheet");

describe("side-nav/containers/Docked", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders without props",
        props: {}
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Docked {...otherProps}>{children}</Docked>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
