import React from "react";
import renderer from "react-test-renderer";

import BelowTopNavCompact from "./BelowTopNavCompact";

jest.mock("./stylesheet");

describe("side-nav/containers/BelowTopNavCompact", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders without props",
        props: {}
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = (
          <BelowTopNavCompact {...otherProps}>{children}</BelowTopNavCompact>
        );
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
