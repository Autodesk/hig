import React from "react";
import renderer from "react-test-renderer";
import ButtonPresenter from "./ButtonPresenter";

describe("radio-button/presenters/ButtonPresenter", () => {
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
      },
    },
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <ButtonPresenter {...otherProps}>{children}</ButtonPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
