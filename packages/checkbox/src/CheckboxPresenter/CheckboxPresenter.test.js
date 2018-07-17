import React from "react";
import renderer from "react-test-renderer";
import CheckboxPresenter from "./CheckboxPresenter";

describe("Checkbox/CheckboxPresenter/CheckboxPresenter", () => {
  [
    {
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        checked: true,
        disabled: true,
        id: "id",
        indeterminate: false,
        label: "HELLO",
        name: "checkbox",
        onBlur: function onBlur() {},
        onClick: function onClick() {},
        onChange: function onChange() {},
        onFocus: function onFocus() {},
        required: "required helper text",
        value: "value"
      }
    }
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <CheckboxPresenter {...otherProps}>{children}</CheckboxPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
