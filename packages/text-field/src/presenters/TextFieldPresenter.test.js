import React from "react";
import { mount } from "enzyme";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";

import TextFieldPresenter from "./TextFieldPresenter";

describe("TextFieldPresenter", () => {
  describe("label", () => {
    describe("when focusing the input", () => {
      it("adds a relevant class to the label", () => {
        const wrapper = mount(<TextFieldPresenter label="Comments" />);
        const input = wrapper.find("input");

        const label = wrapper.find("label");
        expect(label).not.toHaveClassName(
          "hig__text-field-v1__label--input-focused"
        );
        input.simulate("focus");
        expect(label).toHaveClassName(
          "hig__text-field-v1__label--input-focused"
        );
        input.simulate("blur");
        expect(label).not.toHaveClassName(
          "hig__text-field-v1__label--input-focused"
        );
      });
    });

    it("adds a class when value is present", () => {
      const wrapper = mount(
        <TextFieldPresenter
          label="Comments"
          value="These are my comments"
          onChange={jest.fn()}
        />
      );
      const label = wrapper.find("label");
      expect(label).toHaveClassName("hig__text-field-v1__label--with-value");
    });

    it("adds a class when required", () => {
      const wrapper = mount(
        <TextFieldPresenter label="Comments" required="Comments are required" />
      );
      const label = wrapper.find("label");
      expect(label).toHaveClassName("hig__text-field-v1__label--required");
    });
  });

  takeSnapshotsOf(TextFieldPresenter, [
    {
      desc: "renders without props",
      props: {}
    },
    {
      desc: "renders with all props",
      props: {
        disabled: true,
        errors: "error text",
        focused: true,
        hideInstructionsOnErrors: true,
        id: "my-form-id",
        icon: <span data-hig="icon" />,
        instructions: "instructions",
        label: "label text",
        name: "name text",
        onBlur: function onBlur() {},
        onChange: function onChange() {},
        onClearButtonClick: function onClearButtonClick() {},
        onFocus: function onFocus() {},
        onInput: function onInput() {},
        placeholder: "placeholder text",
        readOnly: true,
        required: "required text",
        showClearButton: true,
        type: "button",
        value: "hello world"
      }
    }
  ]);
});
