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
import Container from './Container';

describe('<Container>', () => {
  function createHigGlobalNav() {
    const higContainer = document.createElement('div');
    const higNav = new HIG.GlobalNav();
    higNav.mount(higContainer);
    return { higNav, higContainer };
  }

  // Create the GlobalNav context for the TopNav to be attached to
  let Context = props => <GlobalNav> {props.children}</GlobalNav>;

  it('renders a Container', () => {
    const { higNav, higContainer } = createHigGlobalNav();

    const container = new higNav.partials.Container();
    higNav.addContainer(container);

    const reactContainer = document.createElement('div');
    const wrapper = mount(
      <GlobalNav>
        <GlobalNav.Container />
      </GlobalNav>,
      {
        attachTo: reactContainer
      }
    );

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  });
});
