
import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNav from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNav from './TopNav';
import ProfileComponent from '../../../../adapters/ProfileAdapter';
import SharedExamples from './../SharedExamples';

const onImageClick = function() {
  return 'onImageClick';
};
const onSignoutClick = function() {
  return 'onSignoutClick';
};

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <ProfileComponent
          open={props.open}
          image={props.image}
          onProfileImageClick={onImageClick}
          name={props.name}
          email={props.email}
          signOutLabel={props.signOutLabel}
          signOutLink={props.signOutLink}
          onSignOutClick={onSignoutClick}
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
  const defaults = {
    image: 'something.jpg',
    name: 'Foo Bears',
    email: 'charuvenki@example.com'
  };
  const reactContainer = document.createElement('div');
  mount(<Context {...defaults} />, { attachTo: reactContainer });
  return { reactContainer };
}

describe('<Profile>', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const { reactContainer } = setupProfile();
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });
  });
  describe('events handlers', () => {
    it('It can set onProfileClickOutside', () => {
      const foo = {
        onProfileClickOutside: 'PropTypes.func',
        onSignOutClick: 'PropTypes.func',
        onProfileImageClick: 'PropTypes.func'
      };
    });
  });

  describe('setting and updating props', () => {
    const shex = new SharedExamples(Context, createHigContext);
    const configSets = [
      {
        key: 'email',
        sampleValue: 'foo@example.com',
        updateValue: 'hellokitty@example.com',
        mutator: 'setEmail'
      },
      {
        key: 'name',
        sampleValue: 'Hello Kitty',
        updateValue: 'Dear Daniel',
        mutator: 'setName'
      },
      {
        key: 'image',
        sampleValue: '/images/foo.jpg',
        updateValue: '/images/BAR.PNG',
        mutator: 'setImage'
      },
      {
        key: 'signOutLabel',
        sampleValue: 'Logout',
        updateValue: 'Sign Out',
        mutator: 'setSignOutLabel'
      },
      {
        key: 'profileSettingsLabel',
        sampleValue: 'Settings',
        updateValue: 'Preferences',
        mutator: 'setProfileSettingsLabel'
      },
      {
        key: 'profileSettingsLink',
        sampleValue: 'http://www.google.com',
        updateValue: 'http://www.sanrio.com',
        mutator: 'setProfileSettingsLink'
      },
      {
        key: 'signOutLink',
        sampleValue: '/signout',
        updateValue: 'http://www.google.com',
        mutator: 'setSignOutLink'
      }
    ];

    configSets.forEach(function(config) {
      it(`can set props for ${config.key}`, () => {
        shex.verifyPropsSet(config);
      });
      it(`can update props for ${config.key}`, () => {
        shex.verifyPropsUpdate(config);
      });
    });
  });

  describe('open and close profile flyout', () => {
    const newContext = props => {
      return (
        <GlobalNav>
          <TopNav>
            <ProfileComponent open={props.open} />
          </TopNav>
        </GlobalNav>
      );
    };

    it('sets the flyout as open if initialized as open', () => {
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Context {...{ open: true }} />, {
        attachTo: reactContainer
      });
      const elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );
      expect(elem.length).toEqual(1);
    });

    it('opens the flyout on prop change', () => {
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Context {...{ open: false }} />, {
        attachTo: reactContainer
      });
      var elem = reactContainer.getElementsByClassName('hig__flyout');
      expect(elem.length).toEqual(1);

      wrapper.setProps({ open: true });
      elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );
      expect(elem.length).toEqual(1);
    });
  });
});
