import React from 'react';
import { mount } from 'enzyme';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import SideNavAdapter from '../../../../adapters/GlobalNav/SideNav/SideNavAdapter';
import SearchAdapter from '../../../../adapters/GlobalNav/SideNav/SearchAdapter';
import GroupAdapter from '../../../../adapters/GlobalNav/SideNav/GroupAdapter';
import ModuleAdapter from '../../../../adapters/GlobalNav/SideNav/ModuleAdapter';
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

    const wrapper = mount(<Context onClick={() => {}} />);

    expect(errorSpy).not.toHaveBeenCalled();
  });
});