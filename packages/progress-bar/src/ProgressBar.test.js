import React from "react";
import { mount } from "enzyme";
import ProgressBar, { renderedBarWidth } from "./ProgressBar";

describe("progress-bar", () => {
  describe("given a percentage", () => {
    it("gets a class indicating a determinate bar", () => {
      const wrapper = mount(<ProgressBar percentComplete={33} />);
      expect(wrapper.hasClass("hig__progress-bar--determinate")).toEqual(true);
    });
  });

  describe("without a percentage", () => {
    it("does not have a class indicating a determinate bar", () => {
      const wrapper = mount(<ProgressBar />);
      expect(wrapper.hasClass("hig__progress-bar--determinate")).toEqual(false);
    });
  });
});

describe("renderedBarWidth", () => {
  describe("given a falsey value", () => {
    it("is null", () => {
      expect(renderedBarWidth()).toBeNull();
      expect(renderedBarWidth(0)).toBeNull();
    });
  });

  describe("given a number < 100", () => {
    it("returns the number floored", () => {
      expect(renderedBarWidth(33.33)).toEqual(33);
    });
  });

  describe("given 100", () => {
    it("returns 101", () => {
      expect(renderedBarWidth(100)).toEqual(101);
    });
  });
});
