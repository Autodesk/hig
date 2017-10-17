import React from "react";
import { mount } from "enzyme";
import MountsAnyChild from "./MountsAnyChild";

describe("MountsAnyChild", () => {
  class VanillaComponent {
    _interface = {};
    mount = jest.fn();
    addSlot = jest.fn();
  }

  it("calls the setter with the children", () => {
    const higInstance = new VanillaComponent({});
    const wrapper = mount(
      <MountsAnyChild mounter="addSlot" higInstance={higInstance} mounted>
        <h1>Hello, world!</h1>
        <p>Foo bar baz</p>
      </MountsAnyChild>
    );

    expect(wrapper.props().higInstance.addSlot).toHaveBeenCalled();
    expect(wrapper.props().higInstance.addSlot.mock.calls[0][0]).toBeInstanceOf(
      HTMLElement
    ); /* global HTMLElement */
  });

  describe("with no children", () => {
    it("renders null", () => {
      const higInstance = new VanillaComponent({});
      const wrapper = mount(
        <MountsAnyChild mounter="addSlot" higInstance={higInstance} mounted />
      );

      expect(wrapper.find("div").props().children).toBeNull();
    });
  });
});
