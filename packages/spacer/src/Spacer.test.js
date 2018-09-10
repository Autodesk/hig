import { mount } from "enzyme";
import React from "react";
import renderer from "react-test-renderer";

import Spacer from "./Spacer";

describe("spacer/Spacer", () => {
  describe("snapshot tests", () => {
    const cases = [
      {
        description: "renders with no props",
        props: {}
      },
      {
        description: "renders with spacing",
        props: { spacing: "m" }
      },
      {
        description: "renders with size",
        props: { size: "40px" }
      },
      {
        description: "renders with size and spacing",
        props: { size: "40px", spacing: "m" }
      }
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = <Spacer {...otherProps}>{children}</Spacer>;
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
