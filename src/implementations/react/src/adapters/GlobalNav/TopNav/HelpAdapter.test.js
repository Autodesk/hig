import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import HelpAdapter from './HelpAdapter';
import GroupAdapter from './GroupAdapter';

describe('HelpAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <HelpAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          onClickOutside={() => {}}
          title="Foo"
          open={true}
        >
          <GroupAdapter />
        </HelpAdapter>
      );
      mockInstance.close();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav._partials.Help);
  })
});
