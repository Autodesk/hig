import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import TopNavAdapter from './TopNavAdapter';
import ShortcutAdapter from './ShortcutAdapter';
import SearchAdapter from './SearchAdapter';
import ProfileAdapter from './ProfileAdapter';
import HelpAdapter from './HelpAdapter';
import ProjectAccountSwitcherAdapter from './ProjectAccountSwitcherAdapter';

describe('TopNavAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      mount(
        <TopNavAdapter
          higInstance={mockInstance}
          logo="settings"
          logoLink="http://autodesk.com"
          onLogoClick={() => {}}
          onHamburgerClick={() => {}}
        >
          <ShortcutAdapter />
          <SearchAdapter />
          <ProfileAdapter />
          <HelpAdapter />
          <ProjectAccountSwitcherAdapter />
        </TopNavAdapter>
      )
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav);
  })
});
