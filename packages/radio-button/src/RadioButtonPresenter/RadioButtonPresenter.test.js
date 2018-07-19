import React from "react";
import renderer from "react-test-renderer";
import RadioButtonPresenter from "./RadioButtonPresenter";

describe("RadioButton/RadioButtonPresenter/RadioButtonPresenter", () => {
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
        label: "HELLO",
        name: "RadioButton",
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
        <RadioButtonPresenter {...otherProps}>{children}</RadioButtonPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
