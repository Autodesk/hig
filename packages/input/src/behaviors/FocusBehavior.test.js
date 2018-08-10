import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

import FocusBehavior from "./FocusBehavior";

function renderExample(exampleProps) {
  const renderPropSpy = sinon.spy(({ onFocus, onBlur }) => (
    <input onFocus={onFocus} onBlur={onBlur} />
  ));
  const wrapper = mount(
    <FocusBehavior {...exampleProps}>{renderPropSpy}</FocusBehavior>
  );

  return {
    renderPropSpy,
    wrapper
  };
}

describe("FocusBehavior", () => {
  describe("by default", () => {
    it("passes hasFocus=false to the render prop", () => {
      const { renderPropSpy } = renderExample();

      const renderPropArgs = renderPropSpy.lastCall.args[0];

      expect(renderPropArgs.hasFocus).toBeFalse();
    });
  });

  describe("when gaining focus", () => {
    it("passes hasFocus=true to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("focus");

      const renderPropArgs = renderPropSpy.lastCall.args[0];

      expect(renderPropArgs.hasFocus).toBeTrue();
    });

    it("calls onFocus callback", () => {
      const onFocusSpy = sinon.spy();
      const { wrapper } = renderExample({
        onFocus: onFocusSpy
      });
      wrapper.find("input").simulate("focus");

      expect(onFocusSpy.calledOnce).toBeTrue();
    });
  });

  describe("when losing focus", () => {
    it("passes hasFocus=false to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("focus");
      wrapper.find("input").simulate("blur");

      const renderPropArgs = renderPropSpy.lastCall.args[0];

      expect(renderPropArgs.hasFocus).toBeFalse();
    });

    it("calls onBlur callback", () => {
      const onBlurSpy = sinon.spy();
      const { wrapper } = renderExample({
        onBlur: onBlurSpy
      });
      wrapper.find("input").simulate("focus");
      wrapper.find("input").simulate("blur");

      expect(onBlurSpy.calledOnce).toBeTrue();
    });
  });
});
