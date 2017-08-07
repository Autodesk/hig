/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import { mount } from 'enzyme';
import * as HIG from 'hig.web';
import React from 'react';

import GlobalNav from '../../../adapters/GlobalNav/GlobalNavAdapter';
import Tabs from './Tabs';

const Context = props => {
  return (
    <GlobalNav>
      <GlobalNav.SubNav>
        <Tabs defaultSelectedTab={props.tabs[0].id}>
          {props.tabs.map(tab => (
            <Tabs.Tab key={tab.key} label={tab.label} id={tab.id} />
          ))}
        </Tabs>
      </GlobalNav.SubNav>
    </GlobalNav>
  );
};

describe('<Tabs>', () => {
  function setupInitialTabs() {
    const initialTabs = [
      { key: 1, label: 'Hello', id: 1 },
      { key: 2, label: 'World', id: 2 }
    ];
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context tabs={initialTabs} />, {
      attachTo: reactContainer
    });
    return { reactContainer, wrapper };
  }

  it('renders tabs', () => {
    const { reactContainer, wrapper } = setupInitialTabs();
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('adds tabs', () => {
    const { reactContainer, wrapper } = setupInitialTabs();

    const updatedTabs = [
      { key: 3, label: 'Hello', id: 3 },
      { key: 4, label: 'There', id: 4 },
      { key: 5, label: 'World', id: 5 },
      { key: 6, label: 'Yes', id: 6 }
    ];

    wrapper.setProps({ tabs: updatedTabs });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('removes tabs', () => {
    const { reactContainer, wrapper } = setupInitialTabs();
    const updatedTabs = [{ key: 12, label: 'Updated Tabs', id: 12 }];

    wrapper.setProps({ tabs: updatedTabs });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('updates tab labels', () => {
    const { reactContainer, wrapper } = setupInitialTabs();
    wrapper.setProps({
      tabs: [
        { key: 1, id: 1, label: 'Goodbye' },
        { key: 2, id: 2, label: 'Foo' }
      ]
    });

    expect(
      reactContainer.querySelectorAll('.hig__global-nav__sub-nav__tabs__tab')[
        0
      ].textContent
    ).toEqual('Goodbye');
    expect(
      reactContainer.querySelectorAll('.hig__global-nav__sub-nav__tabs__tab')[
        1
      ].textContent
    ).toEqual('Foo');
  });

  it('updates tab events', () => {
    const { reactContainer, wrapper } = setupInitialTabs();

    wrapper.setProps({
      tabs: [
        {
          key: 1,
          onClick: function() {
            alert('foo');
          }
        }
      ]
    });
  });
});
