import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import CollapseAdapter from './NewCollapseAdapter';

describe('CollapseAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <CollapseAdapter
          higInstance={mockInstance}
          minimized={true}
          onClick={() => {}}
          hidden={false}
        />
      );

      mockInstance.maximize();
      mockInstance.hide();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module._partials.Collapse);
  });
});
