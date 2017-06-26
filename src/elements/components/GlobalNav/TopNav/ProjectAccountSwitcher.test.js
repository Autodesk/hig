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
import ProjectAccountSwitcher from './ProjectAccountSwitcher';
import SharedExamples from './../SharedExamples';

const Project = ProjectAccountSwitcher.Project;
const Account = ProjectAccountSwitcher.Account;

const defaultProps = {
  projects: [
    { label: 'My cool project', image: 'my-cool-project.png' },
    { label: 'My other project', image: 'my-other-project.png' }
  ],
  accounts: []
};

const Context = props => {
  const accounts = props.accounts || [];
  const projects = props.projects || [];

  return (
    <GlobalNav>
      <TopNav>
        <ProjectAccountSwitcher
          open={props.open}
        >
          {accounts.map(account => {
            return (
              <Account
                label={account.label}
                image={account.image}
                key={account.label}
              />
            );
          })}
          {projects.map(project => {
            return (
              <Project
                label={project.label}
                image={project.image}
                key={project.label}
              />
            );
          })}
        </ProjectAccountSwitcher>
      </TopNav>
    </GlobalNav>
  );
};

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higTopNav = new higNav.partials.TopNav({});
  higNav.addTopNav(higTopNav);

  const projectAccountSwitcher = new higTopNav.partials.ProjectAccountSwitcher(props);
  higTopNav.addProjectAccountSwitcher(projectAccountSwitcher);

  props.accounts.forEach(accountProps => {
    const account = new projectAccountSwitcher.partials.Account(accountProps);
    projectAccountSwitcher.addAccount(account);
  });

  props.projects.forEach((projectProps, i) => {
    const project = new projectAccountSwitcher.partials.Project(projectProps);
    projectAccountSwitcher.addProject(project);

    if (i === 0) {
      project.activate();
    }
  });

  return { higContainer, higItem: projectAccountSwitcher };
}

function setupProjectAccountSwitcher() {
  const reactContainer = document.createElement('div');
  mount(<Context {...defaultProps} />, { attachTo: reactContainer });
  return { reactContainer };
}

describe('<ProjectAccountSwitcher>', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const { reactContainer } = setupProjectAccountSwitcher();
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });
  });

  describe('open and close Project Account Switcher flyout', () => {
    it('sets the flyout as open if initialized as open', () => {
      const reactContainer = document.createElement('div');
      const wrapper = mount(
        <Context {...{ open: true, activeLabel: 'someLabel' }} />,
        {
          attachTo: reactContainer
        }
      );
      const flyoutEl = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );

      expect(flyoutEl.length).toEqual(1);
    });

    it('opens the Project Account Switcher on prop change', () => {
      const props = {
        ...defaultProps,
        open: false
      };
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Context {...props} />, {
        attachTo: reactContainer
      });
      var elem = reactContainer.getElementsByClassName('hig__flyout--open');
      expect(elem.length).toEqual(0);

      wrapper.setProps({ open: true });
      elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );
      expect(elem.length).toEqual(1);
    });
  });

  describe('Project Account Switcher flyout', () => {
    it('is not visible when only 1 project or account exists', () => {
      const props = {
        ...defaultProps,
        projects: [
          { label: 'Just this one project', image: 'just-this-one-image.png' }
        ]
      };
      const reactContainer = document.createElement('div');
      const wrapper = mount(<Context {...props} />, {
        attachTo: reactContainer
      });
      const elem = reactContainer.getElementsByClassName(
        'hig__flyout hig__flyout--open'
      );

      const caretElem = reactContainer.getElementsByClassName(
        'hig__global-nav__top-nav__project-account-switcher__target__caret--hide'
      );

      expect(caretElem.length).toEqual(1);
      expect(elem.length).toEqual(0);
    });
  });
});
