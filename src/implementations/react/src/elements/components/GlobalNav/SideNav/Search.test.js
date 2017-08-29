import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
import SearchAdapter from '../../../../adapters/GlobalNav/SideNav/SearchAdapter';

describe('<Search />', () => {
  describe('value', () => {
    describe('with a value', () => {
      it('passes value', () => {
        const wrapper = shallow(<Search value="Foo" />);
        expect(wrapper.find(SearchAdapter)).toHaveProp('value', 'Foo');
      });
    });

    describe('with a defaultValue', () => {
      it('passes defaultValue', () => {
        const wrapper = shallow(<Search defaultValue="Bar" />);
        expect(wrapper.find(SearchAdapter)).toHaveProp('defaultValue', 'Bar');
      });
    });

    describe('with both value and defaultValue', () => {
      it('passes defaultValue', () => {
        const wrapper = shallow(<Search value="Foo" defaultValue="Bar" />);
        expect(wrapper.find(SearchAdapter)).toHaveProp('value', 'Foo');
      });
    });
  });
});
