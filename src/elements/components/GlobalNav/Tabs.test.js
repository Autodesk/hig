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

import GlobalNav from './GlobalNav';
import Tabs from './Tabs';
import Tab from './Tab';

const Context = props => {
  return (
    <GlobalNav>
      <GlobalNav.Container>
        <GlobalNav.Container.SubNav>
          <Tabs>
            {props.tabs.map(label => <Tab key={label} label={label} />)}
          </Tabs>
        </GlobalNav.Container.SubNav>
      </GlobalNav.Container>
    </GlobalNav>
  );
};

describe('<Tabs>', () => {
  it('renders tabs', () => {
    const tabs = ['Hello', 'World'];
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context tabs={tabs} />, {
      attachTo: reactContainer
    });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('adds tabs', () => {
    const initialTabs = ['Hello', 'World'];
    const updatedTabs = ['Well', 'Hello', 'World', '!'];
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context tabs={initialTabs} />, {
      attachTo: reactContainer
    });

    wrapper.setProps({ tabs: updatedTabs });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });

  it('removes tabs', () => {
    const initialTabs = ['Hello', 'World'];
    const updatedTabs = ['World'];
    const reactContainer = document.createElement('div');
    const wrapper = mount(<Context tabs={initialTabs} />, {
      attachTo: reactContainer
    });

    wrapper.setProps({ tabs: updatedTabs });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });
});
