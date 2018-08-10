import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

import HoverBehavior from "./HoverBehavior";

function renderExample(exampleProps) {
  const renderPropSpy = sinon.spy(({ onMouseEnter, onMouseLeave }) => (
    <input onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
  ));
  const wrapper = mount(
    <HoverBehavior {...exampleProps}>{renderPropSpy}</HoverBehavior>
  );

  return {
    renderPropSpy,
    wrapper
  };
}

describe("HoverBehavior", () => {
  describe("by default", () => {
    it("passes hasHover=false to the render prop", () => {
      const { renderPropSpy } = renderExample();

      const renderPropArgs = renderPropSpy.lastCall.args[0];

      expect(renderPropArgs.hasHover).toBeFalse();
    });
  });

  describe("when gaining hover", () => {
    it("passes hasHover=true to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("mouseenter");

      const renderPropArgs = renderPropSpy.lastCall.args[0];

      expect(renderPropArgs.hasHover).toBeTrue();
    });

    it("calls onMouseEnter callback", () => {
      const onMouseEnterSpy = sinon.spy();
      const { wrapper } = renderExample({
        onMouseEnter: onMouseEnterSpy
      });
      wrapper.find("input").simulate("mouseenter");

      expect(onMouseEnterSpy.calledOnce).toBeTrue();
    });
  });

  describe("when losing hover", () => {
    it("passes hasHover=false to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("mouseenter");
      wrapper.find("input").simulate("mouseleave");

      const renderPropArgs = renderPropSpy.lastCall.args[0];

      expect(renderPropArgs.hasHover).toBeFalse();
    });

    it("calls onMouseLeave callback", () => {
      const onMouseLeaveSpy = sinon.spy();
      const { wrapper } = renderExample({
        onMouseLeave: onMouseLeaveSpy
      });
      wrapper.find("input").simulate("mouseenter");
      wrapper.find("input").simulate("mouseleave");

      expect(onMouseLeaveSpy.calledOnce).toBeTrue();
    });
  });
});
