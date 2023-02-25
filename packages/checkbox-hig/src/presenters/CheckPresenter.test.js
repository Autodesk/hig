import React from "react";
import renderer from "react-test-renderer";
import CheckPresenter from "./CheckPresenter";

describe("checkbox/presenters/CheckPresenter", () => {
  [
    {
      description: "renders without props",
      props: {},
    },
    {
      description: "renders with all props",
      props: {
        checked: true,
        disabled: true,
        indeterminate: false,
      },
    },
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <CheckPresenter {...otherProps}>{children}</CheckPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
