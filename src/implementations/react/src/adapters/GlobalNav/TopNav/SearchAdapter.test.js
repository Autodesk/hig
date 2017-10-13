import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import SearchAdapter from './SearchAdapter';

describe('TopNav SearchAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(<SearchAdapter
        higInstance={mockInstance}
        query="Foo"
        placeholder="Bar"
        showClearIcon
        onInput={() => {}}
        onFocus={() => {}}
        onBlur={() => {}}
        onClearIconClick={() => {}}
      />);
      wrapper.props().higInstance.hideClearIcon();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav._partials.Search);
  });
});
