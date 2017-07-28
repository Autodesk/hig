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

import GlobalNav from './GlobalNav/GlobalNavAdapter';
import SideNav from '../elements/components/GlobalNav/SideNav';
import Search from './SearchAdapter';

import SharedExamples from '../elements/components/GlobalNav/SharedExamples';

const Context = props => {
  return (
    <GlobalNav>
      <SideNav>
        <Search placeholder={props.placeholder} query={props.query} />
      </SideNav>
    </GlobalNav>
  );
};

function setUpSearch(defaults) {
  const reactContainer = document.createElement('div');
  const wrapper = mount(<Context {...defaults} />, {
    attachTo: reactContainer
  });
  return { wrapper, reactContainer };
}

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higSideNav = new higNav.partials.SideNav({});
  higNav.addSideNav(higSideNav);

  const higSearch = new higSideNav.partials.Search(props);
  higSideNav.addSearch(higSearch);

  return { higContainer, higItem: higSearch };
}

describe('<Search>', () => {
  it('will is rendered as a child of Side Nav', () => {
    const defaults = {};
    const { wrapper, reactContainer } = setUpSearch(defaults);
    const { higContainer, higItem } = createHigContext(defaults);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('setting and updating props', () => {
    const defaults = {
      plaeholder: 'write something',
      query: 'default query'
    };

    const nextProps = {
      placeholder: 'something new',
      label: 'new query'
    };

    const { higContainer, higItem } = createHigContext(defaults);
    const { wrapper, reactContainer } = setUpSearch(defaults);

    wrapper.setProps(nextProps);

    higItem.setPlaceholder(nextProps.placeholder);
    higItem.setQuery(nextProps.query);

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
});
