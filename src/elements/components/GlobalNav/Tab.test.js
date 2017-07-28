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
        <Tabs>
          <Tabs.Tab active={props.active} label={props.label} key={props.id} />
        </Tabs>
      </GlobalNav.SubNav>
    </GlobalNav>
  );
};

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higSubNav = new higNav.partials.SubNav({});
  higNav.addSubNav(higSubNav);

  const higTabs = new higSubNav.partials.Tabs();
  higSubNav.addTabs(higTabs);

  const higTab = new higTabs.partials.Tab(props);
  higTabs.addTab(higTab);
  higTab.activate();

  return { higContainer, higItem: higTab };
}

function createReactComponent(props) {
  const reactContainer = document.createElement('div');
  const wrapper = mount(<Context {...props} />, {
    attachTo: reactContainer
  });
  return { wrapper, reactContainer };
}

describe('<Tab>', () => {
  it('will render defualt tabs', () => {
    const defaults = {};
    const { wrapper, reactContainer } = createReactComponent(defaults);
    const { higContainer, higItem } = createHigContext(defaults);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('updates sets and updates props', () => {
    const initialProps = { label: 'Such Tab', key: 2 };
    const updatedProps = { label: 'Many Tab', key: 3 };
    const { wrapper, reactContainer } = createReactComponent(initialProps);
    const { higContainer, higItem } = createHigContext(initialProps);

    wrapper.setProps(updatedProps);
    higItem.setLabel(updatedProps.label);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  ['onClick'].forEach(eventName => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { wrapper, reactContainer } = createReactComponent({});
      console.warn = warnSpy;

      wrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});
