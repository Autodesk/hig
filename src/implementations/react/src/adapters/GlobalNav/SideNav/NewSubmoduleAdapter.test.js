import React from 'react';
import { mount } from 'enzyme';

import * as HIG from 'hig-vanilla';
import SubmoduleAdapter from './NewSubmoduleAdapter';

describe('SubmoduleAdapter', () => {
  it('implements the hig interface', () => {
    expect((mockInstance) => {
      const wrapper = mount(
        <SubmoduleAdapter
          higInstance={mockInstance}
          title="Foo"
          link="http://autodesk.com"
          onClick={() => {}}
          onHover={() => {}}
          active={true}
          show={true}
        />
      );

      mockInstance.deactivate();
      mockInstance.hide();
    }).toImplementHIGInterfaceOf(HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module._partials.Submodule);
  });
});
