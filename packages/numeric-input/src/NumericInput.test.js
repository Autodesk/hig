import React from "react";
import { mount } from "enzyme";
import {
  behavesLikeFocusBehavior,
  behavesLikeHoverBehavior,
  composesLikeControlBehavior
} from "@hig/behaviors/test";

import Input from "@hig/input";
import Spinner from "@hig/spinner";
import NumericInput from "./NumericInput";
import NumericInputPresenter from "./presenters/NumericInputPresenter";

describe("NumericInput", () => {
  behavesLikeFocusBehavior(<NumericInput value={0} />);
  behavesLikeHoverBehavior(<NumericInput value={0} />);

  describe("rendering variants", () => {
    describe("when variant='line'", () => {
      it("renders the line-style input", () => {
        const wrapper = mount(<NumericInput variant="line" value={0} />);

        const input = wrapper.find(Input);
        expect(input).toHaveProp("variant", "line");
      });
    });

    describe("when variant='box'", () => {
      it("renders the box-style input", () => {
        const wrapper = mount(<NumericInput variant="box" value={0} />);

        const input = wrapper.find(Input);
        expect(input).toHaveProp("variant", "box");
      });
    });

    describe("when variant='plain'", () => {
      it("renders a plain input", () => {
        const wrapper = mount(<NumericInput variant="plain" value={0} />);

        const input = wrapper.find(Input);
        expect(input).toHaveProp("variant", "plain");
      });
    });
  });

  describe("when controlled", () => {
    let onChangeMock;
    let wrapper;
    let interactiveElement;

    beforeEach(() => {
      onChangeMock = jest.fn();
      wrapper = mount(<NumericInput value={23} onChange={onChangeMock} />);
      interactiveElement = wrapper.find("input");
    });

    it("sets the value", () => {
      expect(interactiveElement).toHaveProp("value", "23");
    });

    it("calls the onChange callback when changed", () => {
      interactiveElement.simulate("change");
      expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it("doesn't accept non-numeric values", () => {
      interactiveElement.simulate("change", { target: { value: "Hello" } });

      expect(interactiveElement).toHaveProp("value", "23");
    });

    it("calls the onChange callback with the incremented value when incremented", () => {
      const spinnerWrapper = wrapper.find(Spinner);
      spinnerWrapper.props().increment();

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(24);

      expect(interactiveElement).toHaveProp("value", "23");
    });

    it("calls the onChange callback with the decremented value when decremented", () => {
      const spinnerWrapper = wrapper.find(Spinner);
      spinnerWrapper.props().decrement();

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(22);

      expect(interactiveElement).toHaveProp("value", "23");
    });
  });

  describe("when uncontrolled", () => {
    let onChangeMock;
    let wrapper;
    let interactiveElement;

    beforeEach(() => {
      onChangeMock = jest.fn();
      wrapper = mount(
        <NumericInput defaultValue={23} onChange={onChangeMock} />
      );
      interactiveElement = wrapper.find("input");
    });

    it("sets the value", () => {
      expect(interactiveElement).toHaveProp("value", "23");
    });

    it("calls the onChange callback when changed", () => {
      interactiveElement.simulate("change", { target: { value: "7" } });
      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(interactiveElement).toHaveProp("value", "7");
    });

    it("doesn't accept non-numeric values", () => {
      expect(interactiveElement).toHaveProp("type", "number");
    });

    it("increments the value", () => {
      const spinnerWrapper = wrapper.find(Spinner);
      spinnerWrapper.props().increment();

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(24);

      expect(interactiveElement).toHaveProp("value", "24");
    });

    it("decrements the value", () => {
      const spinnerWrapper = wrapper.find(Spinner);
      spinnerWrapper.props().decrement();

      expect(onChangeMock).toHaveBeenCalledTimes(1);
      expect(onChangeMock).toHaveBeenCalledWith(22);

      expect(interactiveElement).toHaveProp("value", "22");
    });
  });

  it("passes arbitrary props to input element", () => {
    const wrapper = mount(<NumericInput value={123} data-my-attr="foo" />);
    expect(wrapper.find("input")).toHaveProp("data-my-attr", "foo");
  });
});
