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
import ProjectAccountSwitcher from './ProjectAccountSwitcher';
import SharedExamples from './SharedExamples';

const onAddAccount = function() {
  return 'onAddAcount';
};

const onAddProject = function() {
  return 'onAddProject';
};

const onItemClick = function() {
  return 'onItemClick';
};

const onClickOutside = function() {
  return 'onClickOutside';
};

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <ProjectAccountSwitcher
          activeLabel={props.activeLabel}
          activeImage={props.activeImage}
          activeType={props.activeType}
          isOpen={props.isOpen}
          onClick={onItemClick}
          onClickOutside={onClickOutside}
        />
      </TopNav>
    </GlobalNav>
  );
};

const SingleAccountContext = props => {
  return (
    <GlobalNav>
      <TopNav>
        <ProjectAccountSwitcher
          activeLabel={props.activeLabel}
          activeImage={props.activeImage}
          activeType={props.activeType}
          hideProjectAccountFlyout={true}
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

  const higItem = new higTopNav.partials.ProjectAccountSwitcher(defaults);
  higTopNav.addProjectAccountSwitcher(higItem);

  return { higContainer, higItem };
}

function setupProjectAccountSwitcher() {
  const defaults = {
    activeImage: 'something.jpg',
    activeType: 'proeject',
    activeLabel: 'somethingLabel'
  };
  const reactContainer = document.createElement('div');
  mount(<Context {...defaults} />, { attachTo: reactContainer });
  return { reactContainer };
}

describe('<ProjectAccountSwitcher>', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const { reactContainer } = setupProjectAccountSwitcher();
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });
  });

  describe('setting and updating props', () => {
    const shex = new SharedExamples(Context, createHigContext);

    const configSets = [
      {
        key: 'activeLabel',
        sampleValue: 'test label',
        updateValue: 'new label',
        mutator: 'setActiveLabel'
      },
      {
        key: 'activeImage',
        sampleValue: '/images/foo.jpg',
        updateValue: '/images/bar.jpg',
        mutator: 'setActiveImage'
      },
      {
        key: 'activeType',
        sampleValue: 'project',
        updateValue: 'new project',
        mutator: 'setActiveType'
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

  describe('open and close Project Account Switcher flyout', () => {
    it('sets the flyout as open if initialized as open', () => {
      const reactContainer = document.createElement('div');
      const wrapper = mount(
        <Context {...{ isOpen: true, activeLabel: 'someLabel' }} />,
        {
          attachTo: reactContainer
        }
      );
      const elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );

      expect(elem.length).toEqual(1);
    });

    it('opens the Project Account Switcher on prop change', () => {
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Context {...{ isOpen: false }} />, {
        attachTo: reactContainer
      });
      var elem = reactContainer.getElementsByClassName('hig__flyout--open');
      expect(elem.length).toEqual(0);

      wrapper.setProps({ isOpen: true });
      elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );
      expect(elem.length).toEqual(1);
    });
  });

   describe('Project Account Switcher flyout', () => {
    it('is not visible when only 1 project or account exists', () => {
      const reactContainer = document.createElement('div');
      const wrapper = mount(
        <SingleAccountContext {...{activeLabel: 'someLabel' }} />,
        {
          attachTo: reactContainer
        }
      );
      const elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );

      const caretElem = reactContainer.getElementsByClassName(
        'hig__global-nav__top-nav__project-account-switcher__target__caret'
      );

      expect(caretElem.length).toEqual(0);
      expect(elem.length).toEqual(0)
    });
  });
});
