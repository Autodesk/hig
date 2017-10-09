import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import GlobalNavAdapter from '../GlobalNavAdapter';
import SideNavAdapter from './SideNavAdapter';
import GroupAdapter from './GroupAdapter';
import ModuleAdapter from './ModuleAdapter';
import SubmoduleAdapter from './SubmoduleAdapter';
import CollapseAdapter from './CollapseAdapter';

describe('ModuleAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <GlobalNavAdapter>
          <SideNavAdapter>
            <GroupAdapter>
              <ModuleAdapter
                higInstance={mockInstance}
                title="Foo"
                icon="settings"
                link="http://autodesk.com"
                onClick={() => {}}
                onHover={() => {}}
                active={true}
              >
                <CollapseAdapter />
                <SubmoduleAdapter />
              </ModuleAdapter>
            </GroupAdapter>
          </SideNavAdapter>
        </GlobalNavAdapter>
      );

      mockInstance.deactivate();

      // Doesn't implement show and hide.
      mockInstance.show();
      mockInstance.hide();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module);
  });
});
