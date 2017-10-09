import { mount } from 'enzyme';
import React from 'react';
import * as HIG from 'hig-vanilla';
import ProjectAccountSwitcherAdapter from './ProjectAccountSwitcherAdapter';
import ProjectAdapter from './ProjectAdapter';
import AccountAdapter from './AccountAdapter';

describe('ProjectAccountSwitcherAdapter', () => {
  it('implements the hig interface', () => {
    expect(mockInstance => {
      const wrapper = mount(
        <ProjectAccountSwitcherAdapter
          higInstance={mockInstance}
          open={true}
          showCaret={true}
          onClick={() => {}}
          onClickOutside={() => {}}
          projectTitle="Foo"
          accountTitle="Bar"
          activeImage="/my-image.png"
          activeLabel="Buzz"
          activeType="project"
        >
          <ProjectAdapter />
          <AccountAdapter />
        </ProjectAccountSwitcherAdapter>
      );
      wrapper.props().higInstance.close();
      wrapper.props().higInstance.hideCaret();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.TopNav._partials.ProjectAccountSwitcher);
  });
});
