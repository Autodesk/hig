import React from "react";
import { mount, shallow } from "enzyme";
import ProgressRing from "./ProgressRing";

describe("ProgressRing", () => {
  describe("the progress ring size rendered", () => {
    it("it is an extra-small progress ring", () => {
      expect(
        mount(<ProgressRing size="xs" />).find({ width: 20, height: 20 })
      ).toHaveLength(1);
    });
    it("it is a small progress ring", () => {
      expect(
        mount(<ProgressRing size="s" />).find({ width: 28, height: 28 })
      ).toHaveLength(1);
    });
    it("it is a medium progress ring", () => {
      expect(
        mount(<ProgressRing size="m" />).find({ width: 72, height: 72 })
      ).toHaveLength(1);
    });
    it("it is a large progress ring", () => {
      expect(
        mount(<ProgressRing size="l" />).find({ width: 144, height: 144 })
      ).toHaveLength(1);
    });
    it("it is an extra-large progress ring", () => {
      expect(
        mount(<ProgressRing size="xl" />).find({ width: 242, height: 242 })
      ).toHaveLength(1);
    });
    it("it is a default progress ring", () => {
      expect(
        mount(<ProgressRing />).find({ width: 72, height: 72 })
      ).toHaveLength(1);
    });
  });
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
