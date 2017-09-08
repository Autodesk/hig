import React from 'react';
import { mount } from 'enzyme';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/NewGlobalNavAdapter';
import SideNavAdapter from '../../../../adapters/GlobalNav/SideNav/NewSideNavAdapter';
import SearchAdapter from '../../../../adapters/GlobalNav/SideNav/NewSearchAdapter';
import GroupAdapter from '../../../../adapters/GlobalNav/SideNav/NewGroupAdapter';
import ModuleAdapter from '../../../../adapters/GlobalNav/SideNav/NewModuleAdapter';
import Submodule from './Submodule';

describe('Submodule', () => {
  function Context(props) {
    return (
      <GlobalNavAdapter>
        <SideNavAdapter>
          <GroupAdapter>
            <ModuleAdapter icon="assets">
              <Submodule {...props} />
            </ModuleAdapter>
          </GroupAdapter>
        </SideNavAdapter>
      </GlobalNavAdapter>
    );
  }

  it('calls back on click', () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;

    const wrapper = mount(<Context onClick={() => {}} id="1" />);

    expect(errorSpy).not.toHaveBeenCalled();
  });
});