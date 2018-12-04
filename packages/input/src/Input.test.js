import React from "react";
import { mount } from "enzyme";
import {
  behavesLikeFocusBehavior,
  behavesLikeHoverBehavior,
  composesLikeControlBehavior
} from "@hig/behaviors/test";

import Input from "./Input";
import InputPresenter from "./presenters/InputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";

describe("Input", () => {
  behavesLikeFocusBehavior(<Input />);
  behavesLikeHoverBehavior(<Input />);
  composesLikeControlBehavior({
    Subject: Input,
    Receiver: InputPresenter
  });

  describe("rendering variants", () => {
    describe("when variant='line'", () => {
      it("renders the line-style input", () => {
        const wrapper = mount(<Input variant="line" />);

        const decoration = wrapper.find(InputHaloPresenter);
        expect(decoration).toHaveProp("variant", "line");
      });
    });

    describe("when variant='box'", () => {
      it("renders the box-style  input", () => {
        const wrapper = mount(<Input variant="box" />);

        const decoration = wrapper.find(InputHaloPresenter);
        expect(decoration).toHaveProp("variant", "box");
      });
    });

    describe("when variant='plain'", () => {
      it("renders a plain input", () => {
        const wrapper = mount(<Input variant="plain" />);

        expect(wrapper).not.toContain(InputHaloPresenter);
      });
    });
  });

  describe("when controlled", () => {
    let onChangeSpy;
    let wrapper;
    let interactiveElement;

    beforeEach(() => {
      onChangeSpy = jest.fn();
      wrapper = mount(<Input value="foo" onChange={onChangeSpy} />);
      interactiveElement = wrapper.find("input");
    });

    it("sets the value", () => {
      expect(interactiveElement).toHaveProp("value", "foo");
    });

    describe("typing into the field", () => {
      beforeEach(() => {
        interactiveElement.getDOMNode().value = "bar";
        interactiveElement.simulate("change");
      });

      it("calls the callback", () => {
        expect(onChangeSpy.mock.calls.length).toEqual(1);
      });

      describe("the interactive element", () => {
        it("keeps the value from the value prop", () => {
          expect(interactiveElement.getDOMNode().value).toEqual("foo");
        });
      });
    });
  });

  describe("when uncontrolled", () => {
    let onChangeSpy;
    let wrapper;
    let interactiveElement;

    beforeEach(() => {
      onChangeSpy = jest.fn();
      wrapper = mount(<Input defaultValue="foo" onChange={onChangeSpy} />);
      interactiveElement = wrapper.find("input");
    });

    it("sets the defaultValue", () => {
      expect(interactiveElement).toHaveProp("defaultValue", "foo");
    });

    describe("typing into the field", () => {
      beforeEach(() => {
        interactiveElement.getDOMNode().value = "bar";
        interactiveElement.simulate("change");
      });

      it("calls the callback", () => {
        expect(onChangeSpy.mock.calls.length).toEqual(1);
      });

      describe("the interactive element", () => {
        it("gets the typed value", () => {
          expect(interactiveElement.getDOMNode().value).toEqual("bar");
        });
      });
    });
  });

  it("passes arbitrary props to input element", () => {
    const wrapper = mount(<Input data-my-attr="foo" />);
    expect(wrapper.find("input")).toHaveProp("data-my-attr", "foo");
  });
});
