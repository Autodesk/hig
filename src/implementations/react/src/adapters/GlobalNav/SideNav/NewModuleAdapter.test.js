import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import ModuleAdapter from './NewModuleAdapter';
import SubmoduleAdapter from './NewSubmoduleAdapter';
import CollapseAdapter from './NewCollapseAdapter';

describe('ModuleAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
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
      );

      mockInstance.deactivate();

      // Doesn't implement show and hide.
      mockInstance.show();
      mockInstance.hide();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module);
  });
});
