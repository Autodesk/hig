import React from "react";
import { mount } from "enzyme";
import sinon from "sinon";

import Input from "./Input";
import InputPresenter from "./presenters/InputPresenter";
import InputHaloPresenter from "./presenters/InputHaloPresenter";
import behavesLikeFocusBehavior from "./__test__/behavesLikeFocusBehavior";
import behavesLikeHoverBehavior from "./__test__/behavesLikeHoverBehavior";
import behavesLikeInputPropPasser from "./__test__/behavesLikeInputPropPasser";

describe("Input", () => {
  behavesLikeFocusBehavior(<Input />);
  behavesLikeHoverBehavior(<Input />);
  behavesLikeInputPropPasser({
    Subject: Input,
    Receiver: InputPresenter
  });

  describe("rendering types", () => {
    describe("when type='line'", () => {
      it("renders the line-style input", () => {
        const wrapper = mount(<Input type="line" />);

        const decoration = wrapper.find(InputHaloPresenter);
        expect(decoration).toHaveProp("type", "line");
      });
    });

    describe("when type='box'", () => {
      it("renders the box-style  input", () => {
        const wrapper = mount(<Input type="box" />);

        const decoration = wrapper.find(InputHaloPresenter);
        expect(decoration).toHaveProp("type", "box");
      });
    });

    describe("when type='plain'", () => {
      it("renders a plain input", () => {
        const wrapper = mount(<Input type="plain" />);

        expect(wrapper).not.toContain(InputHaloPresenter);
      });
    });
  });

  describe("when controlled", () => {
    let onChangeSpy;
    let wrapper;
    let interactiveElement;

    beforeEach(() => {
      onChangeSpy = sinon.spy();
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
        expect(onChangeSpy.called).toBeTrue();
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
      onChangeSpy = sinon.spy();
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
        expect(onChangeSpy.called).toBeTrue();
      });

      describe("the interactive element", () => {
        it("gets the typed value", () => {
          expect(interactiveElement.getDOMNode().value).toEqual("bar");
        });
      });
    });
  });
});
