import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import GroupAdapter from './GroupAdapter';
import OptionAdapter from './OptionAdapter';

describe('Help GroupAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <GroupAdapter
          higInstance={mockInstance}
        >
          <OptionAdapter />
        </GroupAdapter>
      )
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav._partials.Help._partials.Group);
  });
});
