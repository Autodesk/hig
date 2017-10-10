import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import GroupAdapter from './GroupAdapter';
import ModuleAdapter from './ModuleAdapter';

describe('GroupAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <GroupAdapter
          higInstance={mockInstance}
        >
          <ModuleAdapter />
        </GroupAdapter>
      );

      // Doesn't implement show and hide.
      mockInstance.show();
      mockInstance.hide();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SideNav._partials.Group);
  });
});
