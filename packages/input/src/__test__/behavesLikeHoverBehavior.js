import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

function renderExample(subject, exampleProps) {
  return {
    wrapper: mount(React.cloneElement(subject, exampleProps))
  };
}

export default function behavesLikeHoverBehavior(subject) {
  describe("when the mouse cursor enters", () => {
    it("calls onMouseEnter callback", () => {
      const onMouseEnterSpy = sinon.spy();
      const { wrapper } = renderExample(subject, {
        onMouseEnter: onMouseEnterSpy
      });
      wrapper.find("input").simulate("mouseenter");

      expect(onMouseEnterSpy.calledOnce).toBeTrue();
    });
  });

  describe("when the mouse cursor leaves", () => {
    it("calls onMouseLeave callback", () => {
      const onMouseLeaveSpy = sinon.spy();
      const { wrapper } = renderExample(subject, {
        onMouseLeave: onMouseLeaveSpy
      });
      wrapper.find("input").simulate("mouseenter");
      wrapper.find("input").simulate("mouseleave");

      expect(onMouseLeaveSpy.calledOnce).toBeTrue();
    });
  });
}
