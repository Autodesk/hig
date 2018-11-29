import React from "react";
import { mount } from "enzyme";

import { lastCallOfMock } from "@hig/jest-preset/helpers";

import PressedBehavior from "./PressedBehavior";

function renderExample(exampleProps) {
  const renderPropSpy = jest.fn(({ onMouseDown, onMouseUp }) => (
    <input onMouseDown={onMouseDown} onMouseUp={onMouseUp} />
  ));
  const wrapper = mount(
    <PressedBehavior {...exampleProps}>{renderPropSpy}</PressedBehavior>
  );

  return {
    renderPropSpy,
    wrapper
  };
}

describe("PressedBehavior", () => {
  describe("by default", () => {
    it("passes isPressed=false to the render prop", () => {
      const { renderPropSpy } = renderExample();

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.isPressed).toBeFalse();
    });
  });

  describe("when gaining pressed", () => {
    it("passes isPressed=true to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("mousedown");

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.isPressed).toBeTrue();
    });

    it("calls onMouseDown callback", () => {
      const onMouseDownSpy = jest.fn();
      const { wrapper } = renderExample({
        onMouseDown: onMouseDownSpy
      });
      wrapper.find("input").simulate("mousedown");

      expect(onMouseDownSpy.mock.calls.length).toEqual(1);
    });
  });

  describe("when losing pressed", () => {
    it("passes isPressed=false to the render prop", () => {
      const { renderPropSpy, wrapper } = renderExample();
      wrapper.find("input").simulate("mousedown");
      wrapper.find("input").simulate("mouseup");

      const renderPropArgs = lastCallOfMock(renderPropSpy)[0];

      expect(renderPropArgs.isPressed).toBeFalse();
    });

    it("calls onMouseUp callback", () => {
      const onMouseUpSpy = jest.fn();
      const { wrapper } = renderExample({
        onMouseUp: onMouseUpSpy
      });
      wrapper.find("input").simulate("mousedown");
      wrapper.find("input").simulate("mouseup");

      expect(onMouseUpSpy.mock.calls.length).toEqual(1);
    });
  });
});
