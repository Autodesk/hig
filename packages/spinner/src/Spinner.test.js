import React from "react";
import { mount } from "enzyme";
import { CaretUp16, CaretDown16 } from "@hig/icons";

import Spinner from "./Spinner";

describe("Spinner", () => {
  it("has an up and a down arrow", () => {
    const wrapper = mount(<Spinner />);
    const buttons = wrapper.find('[role="button"]');

    expect(buttons).toHaveLength(2);

    const up = buttons.find(CaretUp16);
    const down = buttons.find(CaretDown16);

    expect(up).toHaveLength(1);
    expect(down).toHaveLength(1);
  });

  describe("the increment and decrement callbacks", () => {
    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    const mocks = [mockIncrement, mockDecrement];
    const resetMocks = () => mocks.forEach(mock => mock.mockReset());
    const checkAllCalledTimes = times =>
      mocks.forEach(mock => expect(mock).toHaveBeenCalledTimes(times));

    const wrapper = mount(
      <Spinner increment={mockIncrement} decrement={mockDecrement} />
    );

    const up = wrapper
      .find('[role="button"]')
      .find(CaretUp16)
      .parent();

    const down = wrapper
      .find('[role="button"]')
      .find(CaretDown16)
      .parent();

    const buttons = [up, down];
    const simulateAll = (event, extraArgs) =>
      buttons.forEach(button => button.simulate(event, extraArgs));

    beforeEach(() => resetMocks());

    it("calls the correct callback for up", () => {
      up.simulate("click");
      expect(mockIncrement).toHaveBeenCalledTimes(1);
      expect(mockDecrement).toHaveBeenCalledTimes(0);
    });

    it("calls the correct callback for down", () => {
      down.simulate("click");
      expect(mockIncrement).toHaveBeenCalledTimes(0);
      expect(mockDecrement).toHaveBeenCalledTimes(1);
    });

    it("correctly calls the callbacks on button click", () => {
      simulateAll("click");
      checkAllCalledTimes(1);
    });

    it("correctly calls the callbacks on enter key press", () => {
      const enterKey = {
        key: "Enter",
        keyCode: 13,
        which: 13,
        preventDefault: jest.fn()
      };
      simulateAll("keydown", enterKey);
      checkAllCalledTimes(1);
    });

    it("doesn't call the callbacks on non enter key press", () => {
      const otherKeyPress = {
        key: "UpArrow",
        preventDefault: jest.fn()
      };
      simulateAll("keydown", otherKeyPress);
      checkAllCalledTimes(0);
    });
  });
});
