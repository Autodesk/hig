import React from "react";
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import sinon from "sinon";

import Input from "./index";

function snapshotTest(props) {
  const tree = renderer.create(<Input {...props} />).toJSON();

  expect(tree).toMatchSnapshot();
}

describe("Input", () => {
  it("renders children", () => {
    snapshotTest({
      value: "jon.snow@winterfell.com",
      onChange: () => {},
      onFocus: () => {},
      onBlur: () => {},
      onInput: () => {}
    });
  });

  describe("events", () => {
    it("on focus calls the onFocus callback", () => {
      const spy = sinon.spy();
      const wrapper = mount(<Input onFocus={spy} />);

      wrapper
        .find("input")
        .first()
        .simulate("click");

      expect(spy.calledOnce).toBe(true);
    });

    it("on blur calls the onBlur callback", () => {
      const spy = sinon.spy();
      const wrapper = mount(<Input onBlur={spy} />);

      wrapper
        .find("input")
        .first()
        .simulate("click")
        .simulate("blur");

      expect(spy.calledOnce).toBe(true);
    });

    it("on keypress calls the onInput callback", () => {
      const spy = sinon.spy();
      const wrapper = mount(<Input onInput={spy} />);

      wrapper
        .find("input")
        .first()
        .simulate("keypress", { key: "f" });

      expect(spy.calledOnce).toBe(true);
    });

    it("on change calls the onChange callback", () => {
      const spy = sinon.spy();
      const wrapper = mount(<Input onChange={spy} />);

      wrapper
        .find("input")
        .first()
        .simulate("keypress", { key: "f" })
        .simulate("blur");

      expect(spy.calledOnce).toBe(true);
    });
  });
});
