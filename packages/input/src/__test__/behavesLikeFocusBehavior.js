import React from "react";
import { mount } from "enzyme";

function renderExample(subject, exampleProps) {
  return {
    wrapper: mount(React.cloneElement(subject, exampleProps))
  };
}

export default function behavesLikeFocusBehavior(subject) {
  describe("when gaining focus", () => {
    it("calls onFocus callback", () => {
      const onFocusSpy = jest.fn();
      const { wrapper } = renderExample(subject, {
        onFocus: onFocusSpy
      });
      wrapper.find("input").simulate("focus");

      expect(onFocusSpy.mock.calls.length).toEqual(1);
    });
  });

  describe("when losing focus", () => {
    it("calls onBlur callback", () => {
      const onBlurSpy = jest.fn();
      const { wrapper } = renderExample(subject, {
        onBlur: onBlurSpy
      });
      wrapper.find("input").simulate("focus");
      wrapper.find("input").simulate("blur");

      expect(onBlurSpy.mock.calls.length).toEqual(1);
    });
  });
}
