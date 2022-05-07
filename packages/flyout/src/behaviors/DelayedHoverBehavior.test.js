import { lastCallOfMock } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";
import React from "react";
import DelayedHoverBehavior from "./DelayedHoverBehavior";

function renderExample(exampleProps) {
  const renderPropSpy = jest.fn(({ onMouseEnter, onMouseLeave }) => (
    <input onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  ));
  const wrapper = mount(
    <DelayedHoverBehavior {...exampleProps}>
      {renderPropSpy}
    </DelayedHoverBehavior>
  );

  return {
    renderPropSpy,
    wrapper,
  };
}

describe("DelayedHoverBehavior", () => {
  describe("by default", () => {
    it("passes hasHover=false to the render prop", () => {
      const { renderPropSpy } = renderExample();

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.hasHover).toBeFalse();
    });
  });

  describe("when gaining hover", () => {
    it("passes hasHover=true to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("mouseenter");

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.hasHover).toBeTrue();
    });

    it("calls onMouseEnter callback", () => {
      jest.useFakeTimers();
      const onMouseEnterSpy = jest.fn();
      const { wrapper } = renderExample({
        openOnHoverDelay: 500,
        onMouseEnter: onMouseEnterSpy,
      });
      wrapper.find("input").simulate("mouseenter");

      jest.runAllTimers();

      expect(onMouseEnterSpy.mock.calls.length).toEqual(1);
    });
  });

  describe("when losing hover", () => {
    it("passes hasHover=false to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("mouseenter");
      wrapper.find("input").simulate("mouseleave");

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.hasHover).toBeFalse();
    });

    it("calls onMouseLeave callback", () => {
      const onMouseLeaveSpy = jest.fn();
      const { wrapper } = renderExample({
        openOnHoverDelay: 500,
        onMouseLeave: onMouseLeaveSpy,
      });
      wrapper.find("input").simulate("mouseenter");
      wrapper.find("input").simulate("mouseleave");

      expect(onMouseLeaveSpy.mock.calls.length).toEqual(1);
    });
  });
});
