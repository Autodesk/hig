import React from 'react';
import { mount } from 'enzyme';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/NewGlobalNavAdapter';
import SideNavAdapter from '../../../../adapters/GlobalNav/SideNav/NewSideNavAdapter';
import SearchAdapter from '../../../../adapters/GlobalNav/SideNav/NewSearchAdapter';
import GroupAdapter from '../../../../adapters/GlobalNav/SideNav/NewGroupAdapter';
import ModuleAdapter from '../../../../adapters/GlobalNav/SideNav/NewModuleAdapter';
import ModuleCollapse from './ModuleCollapse';

describe('ModuleCollapse', () => {
  function Context(props) {
    return (
      <GlobalNavAdapter>
        <SideNavAdapter>
          <GroupAdapter>
            <ModuleAdapter icon="assets">
              <ModuleCollapse {...props} />
            </ModuleAdapter>
          </GroupAdapter>
        </SideNavAdapter>
      </GlobalNavAdapter>
    );
  }

  it('does not raise an error', () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;

    const wrapper = mount(<Context id="1" onClick={() => {}} />);

    expect(errorSpy).not.toHaveBeenCalled();
  });
});