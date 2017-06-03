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
import SharedExamples from './SharedExamples';

const onImageClick = function() { return 'onImageClick'; };
const onSignoutClick = function() { return 'onSignoutClick'; };

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <Profile
          open={true}
          image={props.image}
          onProfileImageClick={ onImageClick }
          name={props.name}
          email={props.email}
          signOutLabel={props.signOutLabel}
          onSignOutClick={ onSignoutClick }
          profileSettingsLabel={props.profileSettingsLabel}
          profileSettingsLink={props.profileSettingsLink}
        />
      </TopNav>
    </GlobalNav>

  );
};

function createHigContext(defaults) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higTopNav = new higNav.partials.TopNav({});
  higNav.addTopNav(higTopNav);

  const higItem = new higTopNav.partials.Profile(defaults);
  higTopNav.addProfile(higItem);

  return { higContainer, higItem };
}

function setupProfile() {
  const defaults = { image: "something.jpg", name: "Foo Bears", email: "charuvenki@example.com" };
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

  describe("setting and updating props", () => {
    const shex = new SharedExamples(Context, createHigContext);

    const configSets = [
      { key: 'email', sampleValue: 'foo@bar.baz', updateValue: 'hellokitty@example.com', mutator: 'setEmail' },
      { key: 'name', sampleValue: 'Hello Kitty', updateValue: 'Dear Daniel', mutator: 'setName' },
      { key: 'image', sampleValue: '/images/foo.jpg', updateValue: '/images/bar.jpg', mutator: 'setImage' },
      //{ key: 'open', sampleValue: 'false', updateValue: 'true', mutator: 'open'},

    ];

    configSets.forEach(function(config) {
      it(`can set props for ${config.key}`, () => {
        shex.verifyPropsSet(config);
      });
      it(`can update props for ${config.key}`, () => {
        shex.verifyPropsUpdate(config)
      });
    });
  });

  describe("open and close profile flyout", () => {

    const newContext = props => {
      return (
        <GlobalNav>
          <TopNav>
            <Profile open={props.open}/>
          </TopNav>
        </GlobalNav>
      );
    };

    it("works", () => {
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Context { ...{open: false}} />, { attachTo: reactContainer });

      expect(reactContainer.getElementsByClassName("hig__flyout").length).toEqual(1);

      //console.log("the container: ", reactContainer.outerHTML);

      wrapper.setProps({open: true});
      console.log("log: ", wrapper.props());
      expect(reactContainer.getElementsByClassName("hig__flyout hig__flyout--open").length).toEqual(1);
    });

  });
});