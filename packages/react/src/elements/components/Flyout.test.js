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
});
