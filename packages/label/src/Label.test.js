import React from "react";
import renderer from "react-test-renderer";
import Label from "./Label";

describe("Label", () => {
  [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders with all props",
      props: {
        children: "I am a label",
        disabled: true,
        variant: "side",
      },
    },
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = <Label {...otherProps}>{children}</Label>;
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
