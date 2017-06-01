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

const onImageClick = function() { return 'onImageClick'; };
const onSignoutClick = function() { return 'onSignoutClick'; };

const Context = props => {
  const { chidren, ...rest } = props;
  return (
    <GlobalNav>
      <GlobalNav.TopNav>
        <Profile
          open={true}
          image={props.image}
          onProfileImageClick={ onImageClick }
          name={props.name}
          email={props.email}
          signOutLabel="Something"
          onSignOutClick={ onSignoutClick }
          profileSettingsLabel="Something Else"
          profileSettingsLink="http://example.com"
        />
      </GlobalNav.TopNav>
    </GlobalNav>

  );
};

function higContext(defaults) {
  const higcontainer = document.createElement('div');
  const higNav = new HIG.GlobalNav();

  higNav.mount(higContainer);
  const higTopNav = new higNav.partials.TopNav();
  higNav.addSideNav(higTopNav);

  const higProfile = new higTopNav.partials.Profile();
  higTopNav.addProfile(higProfile);

  return { higContainer, higNav, higProfile };
}

function setupProfile() {
  const defaults = { image: "something.jpg", name: "Foo Bears", email: "charuvenki@example.com" }
  const reactContainer = document.createElement('div');
  mount(<Context {...defaults} />, {attachTo: reactContainer});
  return { reactContainer };
}

describe('<Profile>', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const { reactContainer } = setupProfile();
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });
  });
});