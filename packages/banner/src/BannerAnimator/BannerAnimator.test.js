import React from "react";
import renderer from "react-test-renderer";

import BannerAnimator from "./BannerAnimator";
import { positions } from "./positions";

describe("banner/BannerAnimator/BannerAnimator", () => {
  describe("snapshot tests", () => {
    const mockChildren = jest.fn(() => <div />);
    const cases = [
      {
        description: "renders with only children",
        props: {
          children: mockChildren,
        },
      },
      {
        description: "renders hidden",
        props: {
          isVisible: false,
          children: mockChildren,
        },
      },
      {
        description: "renders in the bottom position",
        props: {
          position: positions.BOTTOM,
          children: mockChildren,
        },
      },
    ];

    cases.forEach(({ description, props: { children, ...otherProps } }) => {
      it(description, () => {
        const wrapper = (
          <BannerAnimator {...otherProps}>{children}</BannerAnimator>
        );
        const tree = renderer.create(wrapper).toJSON();

        expect(tree).toMatchSnapshot();
      });
    });
  });
});
