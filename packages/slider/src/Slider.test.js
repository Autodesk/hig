import React from "react";
import { takeSnapshotsOf } from "@hig/jest-preset/helpers";
import { mount } from "enzyme";
import Slider from "./index";
import SliderPresenter from "./presenters/SliderPresenter";

describe("slider/Slider", () => {
  takeSnapshotsOf(Slider, [{ desc: "renders", props: {} }]);
  takeSnapshotsOf(Slider, [
    { desc: "renders disabled", props: { disabled: true } },
  ]);

  describe("when uncontrolled", () => {
    it("calls the `onChange`the changed value", () => {
      const eventHandler = jest.fn();
      const wrapper = mount(<Slider onChange={eventHandler} />);
      wrapper.find("input").simulate("change", { target: { value: "10" } });

      expect(eventHandler).toHaveBeenCalledWith(10);
    });

    it.skip("allows value to be changed by change events", () => {
      const wrapper = mount(<Slider defaultValue="10" />);
      const input = wrapper.find("input");

      expect(input.prop("value")).toEqual("10");
      input.simulate("change", { target: { value: "20" } });
      expect(input.prop("value")).toEqual("20");

      const inputAfter = wrapper.find("input");
      expect(inputAfter.prop("value")).toEqual("20");
    });
  });

  describe("when controlled", () => {
    it("calls the `onChange` handler", () => {
      const eventHandler = jest.fn();
      const wrapper = mount(<Slider value="8" onChange={eventHandler} />);
      wrapper.find("input").simulate("change", { target: { value: "10" } });

      expect(eventHandler).toHaveBeenCalledWith(10);
    });

    it("doesn't allow the value to be changed by change events", () => {
      const wrapper = mount(<Slider value="10" />);
      const input = wrapper.find("input");

      expect(input.prop("value")).toEqual("10");
      input.simulate("change", { target: { value: "20" } });

      const inputAfter = wrapper.find("input");
      expect(inputAfter.prop("value")).toEqual("10");
    });

    it("recognizes changes to the value prop", () => {
      const wrapper = mount(<Slider value="10" />);
      const input = wrapper.find("input");

      expect(input.prop("value")).toEqual("10");
      wrapper.setProps({ value: "20" });

      const inputAfter = wrapper.find("input");
      expect(inputAfter.prop("value")).toEqual("20");
    });
  });

  describe("slider variant", () => {
    it("default variant is continuous", () => {
      const wrapper = mount(<Slider value="10" />);
      const presenter = wrapper.find(SliderPresenter);
      expect(presenter.props().variant).toEqual("continuous");
    });

    it("specify discrete variant", () => {
      const wrapper = mount(<Slider variant="discrete" />);
      const presenter = wrapper.find(SliderPresenter);
      expect(presenter.props().variant).toEqual("discrete");
    });
  });
});
