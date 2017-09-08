import React from 'react';
import { mount } from 'enzyme';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/NewGlobalNavAdapter';
import SideNavAdapter from '../../../../adapters/GlobalNav/SideNav/NewSideNavAdapter';
import SearchAdapter from '../../../../adapters/GlobalNav/SideNav/NewSearchAdapter';
import GroupAdapter from '../../../../adapters/GlobalNav/SideNav/NewGroupAdapter';
import Module from './Module';

describe('Module', () => {
  function Context(props) {
    return (
      <GlobalNavAdapter>
        <SideNavAdapter>
          <GroupAdapter>
            <Module icon="assets" {...props}>
            </Module>
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
