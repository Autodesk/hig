import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import GlobalNavAdapter from './GlobalNavAdapter';
import TopNavAdapter from './TopNav/TopNavAdapter';
import SideNavAdapter from './SideNav/SideNavAdapter';
import SubNavAdapter from './SubNav/SubNavAdapter';

describe('GlobalNavAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      const wrapper = mount(
        <GlobalNavAdapter
          higInstance={mockInstance}
          sideNavOpen={true}
          onHoverOutside={() => {}}
        >
          <TopNavAdapter />
          <SubNavAdapter />
          <SideNavAdapter />
          <h1>Slot content</h1>
        </GlobalNavAdapter>
      );
      wrapper.props().higInstance.hideSideNav();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav);
  });
});
