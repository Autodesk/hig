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

import GlobalNav from './../GlobalNav';
import TopNav from './TopNav';
import ProfileComponent, {
  ProfileAdapter
} from '../../../../adapters/ProfileAdapter';
import Search from './Search';

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <Search
          placeholder={props.placeholder}
          query={props.query}
          onInput={props.onInput}
          onFocusIn={props.onFocusIn}
          onFocusOut={props.onFocusOut}
        />
      </TopNav>
    </GlobalNav>
  );
};

describe('<TopNav>', () => {
  function createHigNav() {
    const domContainer = document.createElement('div');
    const higNav = new HIG.GlobalNav();
    higNav.mount(domContainer);

    return { higNav, domContainer };
  }

  function createTopNav() {
    const { higNav, domContainer } = createHigNav();
    const topNav = new higNav.partials.TopNav({ ...defaults });
    higNav.addTopNav(topNav);
    return { topNav, higNav, domContainer };
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
          <ProfileComponent {...profileDefaults} />
        </TopNav>
      </GlobalNav>,
      { attachTo: reactContainer }
    );
    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();
  });

  it('can render a Profile', () => {
    const { topNav, higNav, domContainer } = createTopNav();

    const profile = new topNav.partials.Profile({ ...profileDefaults });
    topNav.addProfile(profile);

    const reactContainer = document.createElement('div');
    mount(
      <GlobalNav>
        <GlobalNav.TopNav {...defaults}>
          <ProfileComponent {...profileDefaults} />
        </GlobalNav.TopNav>
      </GlobalNav>,
      { attachTo: reactContainer }
    );

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      domContainer.firstElementChild.outerHTML
    );
  });

  function anyHandler() {
    return true;
  }

  it('can render Search programmatically', () => {
    const { topNav, higNav, domContainer } = createTopNav();
    const props = {
      placeholder: 'enter some text',
      query: 'foobar',
      onInput: anyHandler,
      onFocusIn: anyHandler,
      onFocusOut: anyHandler
    };
    const tnsearch = new topNav.partials.Search(props);
    topNav.addSearch(tnsearch);

    expect(domContainer.firstChild.outerHTML).toMatchSnapshot();
    const elems = domContainer.getElementsByClassName(
      'hig__global-nav__top-nav__search__inputholder__input'
    );
    expect(elems.length).toEqual(1);
  });

  it('can render Search through React-like components', () => {
    const reactContainer = document.createElement('div');
    const props = {
      placeholder: 'enter some text',
      query: 'foobar',
      onInput: anyHandler,
      onFocusIn: anyHandler,
      onFocusOut: anyHandler
    };

    mount(Context(props), { attachTo: reactContainer });
    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

    const elems = reactContainer.getElementsByClassName(
      'hig__global-nav__top-nav__search__inputholder__input'
    );
    expect(elems.length).toEqual(1);
  });
});
