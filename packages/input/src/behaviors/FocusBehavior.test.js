import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

import FocusBehavior from "./FocusBehavior";
import behavesLikeFocusBehavior from "../__test__/behavesLikeFocusBehavior";

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
  describe("when passing handlers to an input", () => {
    behavesLikeFocusBehavior(
      <FocusBehavior>
        {({ onFocus, onBlur }) => <input onFocus={onFocus} onBlur={onBlur} />}
      </FocusBehavior>
    );
  });

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
  });

  describe("when losing focus", () => {
    it("passes hasFocus=false to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("focus");
      wrapper.find("input").simulate("blur");

      const renderPropArgs = renderPropSpy.lastCall.args[0];

      expect(renderPropArgs.hasFocus).toBeFalse();
    });
  });
});
