import React from "react";
import { mount } from "enzyme";
import * as Hig from "hig-vanilla";
import ProgressRingAdapter from "./ProgressRingAdapter";

describe("ProgressRing", () => {
  it("implements the hig interface", () => {
    window.requestAnimationFrame = jest.fn();
    window.cancelAnimationFrame = jest.fn();
    window.performance = {
      now: jest.fn()
    };

    expect(mockInstance => {
      mount(
        <ProgressRingAdapter
          higInstance={mockInstance}
          size="l"
          percentComplete={0}
        />
      );
    }).toImplementHIGInterfaceOf(Hig.ProgressRing);
  });
});
