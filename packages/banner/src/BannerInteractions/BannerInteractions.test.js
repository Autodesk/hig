import React from "react";
import renderer from "react-test-renderer";

import BannerInteractions from "./BannerInteractions";

describe("banner/BannerInteractions/BannerInteractions", () => {
  [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders with children",
      props: {
        children: "foo",
      },
    },
    {
      description: "renders while wrapping actions",
      props: {
        isWrappingActions: true,
      },
    },
    {
      description: "renders with custom stylesheet",
      props: {
        stylesheet: (styles) => ({
          ...styles,
          display: "absolute",
        }),
      },
    },
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <BannerInteractions {...otherProps}>{children}</BannerInteractions>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
