import React from "react";
import { mount } from "enzyme";

function renderExample(subject, exampleProps) {
  return {
    wrapper: mount(React.cloneElement(subject, exampleProps))
  };
}

export default function behavesLikePressedBehavior(subject) {
  describe("when the mouse is pressed down", () => {
    it("calls onMouseDown callback", () => {
      const onMouseDownSpy = jest.fn();
      const { wrapper } = renderExample(subject, {
        onMouseDown: onMouseDownSpy
      });
      wrapper.find("input").simulate("mousedown");

      expect(onMouseDownSpy.mock.calls.length).toEqual(1);
    });
  });

  describe("when the mouse is released", () => {
    it("calls onMouseUp callback", () => {
      const onMouseUpSpy = jest.fn();
      const { wrapper } = renderExample(subject, {
        onMouseUp: onMouseUpSpy
      });
      wrapper.find("input").simulate("mousedown");
      wrapper.find("input").simulate("mouseup");

      expect(onMouseUpSpy.mock.calls.length).toEqual(1);
    });
  });
}
