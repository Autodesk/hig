import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import SearchAdapter from './SearchAdapter';

describe('SideNav SearchAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <SearchAdapter
          higInstance={mockInstance}
          onFocus={() => {}}
          onBlur={() => {}}
          onInput={() => {}}
          onClearIconClick={() => {}}
          showClearIcon={true}
          placeholder="Foo"
          value="Bar"
        />
      );
      wrapper.props().higInstance.hideClearIcon();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SideNav._partials.Search);
  });
});
