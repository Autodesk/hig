import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import SideNavAdapter from './NewSideNavAdapter';
import LinkAdapter from './NewLinkAdapter';
import SearchAdapter from './NewSearchAdapter';
import GroupAdapter from './NewGroupAdapter';

describe('SideNavAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <SideNavAdapter
          higInstance={mockInstance}
          headerLabel="Foo"
          superHeaderLabel="Foo"
          headerLink="http://autodesk.com"
          superHeaderLink="http://autodesk.com"
          copyright="Forever"
          onHeaderClick={() => {}}
          onSuperHeaderClick={() => {}}
        >
          <LinkAdapter />
          <GroupAdapter />
          <SearchAdapter />
          <h1>Slot content</h1>
        </SideNavAdapter>
      );
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SideNav);
  });
});
