
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import SubNavAdapter from '../../../../adapters/GlobalNav/SubNav/SubNavAdapter';
import Tabs from './Tabs';

const Context = props => {
  return (
    <GlobalNavAdapter>
      <SubNavAdapter moduleIndicatorIcon='gear'>
        <Tabs defaultSelectedTab={props.tabs[0].id}>
          {props.tabs.map(tab => (
            <Tabs.Tab key={tab.key} label={tab.label} id={tab.id} />
          ))}
        </Tabs>
      </SubNavAdapter>
    </GlobalNavAdapter>
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
