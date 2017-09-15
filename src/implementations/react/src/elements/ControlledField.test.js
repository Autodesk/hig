import { shallow } from "enzyme";
import * as HIG from "hig-vanilla";
import React, { Component } from "react";
import HigNodeList from "./HIGNodeList";

import controlled from './ControlledField';

class TestField extends Component {
  render() { return (<input {...this.props} />) }
}
const ControlledTestField = controlled(TestField);

describe("ControlledField", () => {
  let wrapper;

  describe('when controlled', () => {
    it('passes value prop', () => {
      wrapper = shallow(<ControlledTestField value="foo" />)

      expect(wrapper.find(TestField)).toHaveProp('value', 'foo');
    });

    describe('after an input event', () => {
      beforeEach(() => {
        const props = { value: 'foo' };
        const event = { target: { value: "food" } };
        wrapper = shallow(<ControlledTestField {...props} />);

        wrapper.instance().handleInput(event);
      });

      it('does not pass the updated value', () => {
        expect(wrapper.find(TestField)).toHaveProp('value', 'foo');
      });
    });
  });

  describe('when uncontrolled', () => {
    it('passes defaultValue', () => {
      wrapper = shallow(<ControlledTestField defaultValue="foo" />);
      expect(wrapper.find(TestField)).toHaveProp('value', 'foo');
    });

    describe('after an input event', () => {
      beforeEach(() => {
        const props = { defaultValue: 'foo' };
        const event = { target: { value: "food" } };
        wrapper = shallow(<ControlledTestField {...props} />);
        wrapper.instance().handleInput(event);
      });

      it('passes the new value', () => {
        expect(wrapper.find(TestField)).toHaveProp('value', 'food');
      });
    });
  });
});
