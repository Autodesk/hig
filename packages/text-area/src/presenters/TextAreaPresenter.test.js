import React from "react";
import renderer from "react-test-renderer";
import { generateId } from "@hig/utils";
import TextAreaPresenter from "./TextAreaPresenter";

describe("TextArea/TextAreaPresenter", () => {
  afterEach(() => {
    generateId.mockReset();
  });

  [
    ({
      description: "renders without props",
      props: {}
    },
    {
      description: "renders with all props",
      props: {
        disabled: false,
        instructions: "write stuff in me",
        label: "this is a text area",
        name: "text area",
        placeholder: "this is placeholder text",
        required: "this information is required",
        type: "a type of checkbox",
        value: "value!"
      }
    })
  ].forEach(({ description, props: { children, ...otherProps } }) => {
    it(description, () => {
      const presenter = (
        <TextAreaPresenter {...otherProps}>{children}</TextAreaPresenter>
      );
      const tree = renderer.create(presenter).toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
