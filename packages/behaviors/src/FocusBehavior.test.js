import React from "react";
import { mount } from "enzyme";

import { behavesLikeFocusBehavior } from "@hig/behaviors/test";
import { lastCallOfMock } from "@weave-design/jest-preset/helpers";

import FocusBehavior from "./FocusBehavior";

function renderExample(exampleProps) {
  const renderPropSpy = jest.fn(({ onFocus, onBlur }) => (
    <input onFocus={onFocus} onBlur={onBlur} />
  ));
  const wrapper = mount(
    <FocusBehavior {...exampleProps}>{renderPropSpy}</FocusBehavior>
  );

  return {
    renderPropSpy,
    wrapper,
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

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.hasFocus).toBeFalse();
    });
  });

  describe("when gaining focus", () => {
    it("passes hasFocus=true to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("focus");

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.hasFocus).toBeTrue();
    });
  });

  describe("when losing focus", () => {
    it("passes hasFocus=false to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("focus");
      wrapper.find("input").simulate("blur");

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.hasFocus).toBeFalse();
    });
  });
});
