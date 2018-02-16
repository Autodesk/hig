import React from "react";
import { shallow } from "enzyme";
import Flyout from "./Flyout";
import FlyoutAdapter from "../../adapters/FlyoutAdapter";

describe("<Flyout />", () => {
  describe("with a maxHeight", () => {
    it("passes maxHeight", () => {
      const wrapper = shallow(<Flyout maxHeight={123} />);
      expect(wrapper.find(FlyoutAdapter)).toHaveProp("maxHeight", 123);
    });
  });

  describe("toggleFlyout", () => {
    it("alternates between opening and closing the FlyoutAdapter", () => {
      const wrapper = shallow(<Flyout />);
      expect(wrapper.find(FlyoutAdapter)).toHaveProp("open", false);
      wrapper.instance().toggleFlyout();
      expect(wrapper.find(FlyoutAdapter)).toHaveProp("open", true);
    });
  });

  describe("open", () => {
    describe("when true", () => {
      it("keeps the Flyout open", () => {
        const wrapper = shallow(<Flyout open />);
        expect(wrapper.find(FlyoutAdapter)).toHaveProp("open", true);
        wrapper.instance().toggleFlyout();
        expect(wrapper.find(FlyoutAdapter)).toHaveProp("open", true);
      });
    });

    describe("when false", () => {
      it("keeps the Flyout closed", () => {
        const wrapper = shallow(<Flyout open={false} />);
        expect(wrapper.find(FlyoutAdapter)).toHaveProp("open", false);
        wrapper.instance().toggleFlyout();
        expect(wrapper.find(FlyoutAdapter)).toHaveProp("open", false);
      });
    });
  });
});
