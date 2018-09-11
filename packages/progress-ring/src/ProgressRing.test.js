import React from "react";
import { shallow } from "enzyme";
import ProgressRing from "./ProgressRing";

describe("ProgressRing", () => {
  describe("the behavior of the progress ring", () => {
    it("it is using indeterminate behavior", () => {
      const wrapper = shallow(<ProgressRing />);

      expect(wrapper.find("ProgressRingIndeterminateBehavior")).toHaveLength(1);
    });
    it("it is using determinate behavior", () => {
      const wrapper = shallow(<ProgressRing percentComplete={50} />);

      expect(wrapper.find("ProgressRingDeterminateBehavior")).toHaveLength(1);
    });
  });
});
