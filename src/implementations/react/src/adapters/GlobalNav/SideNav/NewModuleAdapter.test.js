import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import GlobalNavAdapter from '../NewGlobalNavAdapter';
import SideNavAdapter from './NewSideNavAdapter';
import GroupAdapter from './NewGroupAdapter';
import ModuleAdapter from './NewModuleAdapter';
import SubmoduleAdapter from './NewSubmoduleAdapter';
import CollapseAdapter from './NewCollapseAdapter';

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
