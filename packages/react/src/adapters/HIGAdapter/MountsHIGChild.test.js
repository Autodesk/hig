import React, { Component } from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import MountsHIGChild from "./MountsHIGChild";

describe("MountsHIGChild", () => {
  class VanillaComponent {
    mount = jest.fn();
    addSlot = jest.fn();
  }

  class ChildComponent extends Component {
    static contextTypes = {
      higParent: PropTypes.object
    };

    render() {
      return null;
    }
  }

  it('provides the higInstance via context as "higParent"', () => {
    const higInstance = new VanillaComponent({});
    const wrapper = mount(
      <MountsHIGChild higInstance={higInstance} mounted>
        <ChildComponent />
      </MountsHIGChild>
    );

    const context = wrapper.instance().getChildContext();
    expect(context.higParent).toEqual(higInstance);
  });
});
