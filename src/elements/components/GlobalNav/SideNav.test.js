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
import SideNav from './SideNav';
import Search from './Search';
import SectionList from './SectionList';
import Section from './Section';
import Group from './Group';
import Module from './Module';
import Submodule from './Submodule';

import LinkList from './LinkList';

describe('<SideNav>', () => {
  function createHigNav() {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Button mutates this object
    const higNav = new HIG.GlobalNav();

    higNav.mount(higContainer);

    return { higNav, higContainer };
  }

  let Context = props => <GlobalNav>{props.children}</GlobalNav>;

  it('can render a SectionList as a child', () => {
    const { higNav, higContainer } = createHigNav();

    const sideNav = new higNav.partials.SideNav();
    higNav.addSideNav(sideNav);

    const reactContainer = document.createElement('div');
    const wrapper = mount(
      <GlobalNav>
        <SideNav>
          <SectionList />
        </SideNav>
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

  it('errors when there are multiple SectionList elements', () => {
    expect(() =>
      mount(
        <GlobalNav>
          <SideNav>
            <SectionList />
            <SectionList />
          </SideNav>
        </GlobalNav>
      )).toThrowError(/only one SectionList is allowed/);
  });

  it('can render a LinksList as a child', () => {
    const { higNav, higContainer } = createHigNav();

    const sideNav = new higNav.partials.SideNav();
    higNav.addSideNav(sideNav);

    const reactContainer = document.createElement('div');
    const wrapper = mount(
      <GlobalNav>
        <SideNav>
          <LinkList />
        </SideNav>
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

  it('errors when there are multiple LinkList elements', () => {
    expect(() =>
      mount(
        <GlobalNav>
          <SideNav>
            <LinkList />
            <LinkList />
          </SideNav>
        </GlobalNav>
      )).toThrowError(/only one LinkList is allowed/);
  });

  it('can not render HTML elements as children', () => {
    global.console.error = jest.fn();

    mount(
      <GlobalNav>
        <SideNav>
          <div>Hello world!</div>
        </SideNav>
      </GlobalNav>
    );

    expect(console.error).toBeCalledWith(
      expect.stringMatching(/'div' is not a valid child of SideNav./)
    );
  });

  it('can not render text as children', () => {
    global.console.error = jest.fn();

    mount(
      <GlobalNav>
        <SideNav>
          Hello World!
        </SideNav>
      </GlobalNav>
    );

    expect(console.error).toBeCalledWith(
      expect.stringMatching(/'Hello World!' is not a valid child of SideNav./)
    );
  });

  describe('<SideNav> with search', () => {
    const Context = props => {
      return (
        <GlobalNav>
          <SideNav>
            <Search query={props.query} />
            <SectionList>
              <Section headerLabel="Project" headerName="Thunderstor">
                <Group>
                  <Module title={props.moduleTitle} icon="assets">
                    <Submodule title={props.submoduleTitle1} icon="assets" />
                    <Submodule title={props.submoduleTitle2} icon="assets" />
                  </Module>
                </Group>
              </Section>

            </SectionList>
          </SideNav>

        </GlobalNav>
      );
    };

    function setupReactContext(props) {
      const reactContainer = document.createElement('div');
      mount(<Context {...props} />, { attachTo: reactContainer });
      return { reactContainer };
    }

    it('renders children correctly', () => {
      const props = {
        placeholder: 'Search Here',
        headerLabel: 'Oakland Medical Center',
        headerName: 'Thunderstorm',
        moduleTitle: 'Document Workflow',
        submoduleTitle1: 'Document',
        submoduleTitle2: 'Workflow'
      };
      const { reactContainer } = setupReactContext(props);
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });
  });
});
