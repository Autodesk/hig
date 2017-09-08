import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import TopNavAdapter from './NewTopNavAdapter';
import ShortcutAdapter from './NewShortcutAdapter';
import SearchAdapter from './NewSearchAdapter';
import ProfileAdapter from './NewProfileAdapter';
import HelpAdapter from './NewHelpAdapter';
import ProjectAccountSwitcherAdapter from './NewProjectAccountSwitcherAdapter';

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
