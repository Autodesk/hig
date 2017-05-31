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
import TopNav from './TopNav';
import Profile from './Profile';

describe('<TopNav>', () => {
  function createHigNav() {
    const domContainer = document.createElement('div');
    const higNav = new HIG.GlobalNav();
    higNav.mount(domContainer);

    return { higNav, domContainer };
  }

  // Create the GlobalNav context for the TopNav to be attached to
  let defaults = {
    logo: '../../../bim-logo.png',
    logoLink: 'http://www.autodesk.com'
  };
  let profileDefaults = { image: '../../../bim-logo.png' };

  it('renders a topnav', () => {
    const reactContainer = document.createElement('div');

    mount(
      <GlobalNav>
        <TopNav {...defaults}>
          <Profile {...profileDefaults} />
        </TopNav>
      </GlobalNav>,
      { attachTo: reactContainer }
    );
    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();
  });

  it('contains the correct chidren', () => {
    const { higNav, domContainer } = createHigNav();

    const topNav = new higNav.partials.TopNav({ ...defaults });
    higNav.addTopNav(topNav);

    const profile = new topNav.partials.Profile({ ...profileDefaults });
    topNav.addProfile(profile);

    const reactContainer = document.createElement('div');
    mount(
      <GlobalNav>
        <GlobalNav.TopNav {...defaults}>
          <Profile {...profileDefaults} />
        </GlobalNav.TopNav>
      </GlobalNav>,
      { attachTo: reactContainer }
    );

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      domContainer.firstElementChild.outerHTML
    );
  });
});
