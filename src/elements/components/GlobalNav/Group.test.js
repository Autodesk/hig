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
import Section from './Section';
import SectionList from './SectionList';
import Group from './Group';
import Module from './Module';

const Context = props => {
  const { children, ...rest } = props;

  return (
    <GlobalNav>
      <GlobalNav.SideNav>
        <GlobalNav.SideNav.SectionList>
          <GlobalNav.SideNav.SectionList.Section>
            <Group>{props.children}</Group>
          </GlobalNav.SideNav.SectionList.Section>
        </GlobalNav.SideNav.SectionList>
      </GlobalNav.SideNav>
    </GlobalNav>
  );
};

function higContext() {
  const higContainer = document.createElement('div');

  // use spread here to clone defaults since HIG.Button mutates this object
  const higNav = new HIG.GlobalNav();

  higNav.mount(higContainer);

  const higSideNav = new higNav.partials.SideNav();
  higNav.addSideNav(higSideNav);

  const higSection = new higSideNav.partials.Section({});

  higSideNav.addSection(higSection);

  const collapse1 = new higSection.partials.Collapse({});

  higSection.addCollapse(collapse1);
  collapse1.minimize();

  const higGroup = new higSection.partials.Group();

  higSection.addGroup(higGroup);

  return { higNav, higSideNav, higSection, higGroup, higContainer };
}

describe('<Group>', () => {
  describe('children: <Module>', () => {
    it('can render a list of <Module> elements', () => {
      const { higGroup, higContainer } = higContext();

      const module1Defaults = {
        icon: 'project-management',
        title: 'Module 1',
        link: '#'
      };

      const module1 = new higGroup.partials.Module(module1Defaults);
      higGroup.addModule(module1);

      const module2Defaults = {
        icon: 'project-management',
        title: 'Module 2',
        link: '#'
      };
      const module2 = new higGroup.partials.Module(module2Defaults);
      higGroup.addModule(module2);

      const reactContainer = document.createElement('div');

      const wrapper = mount(
        <Context>
          <Module {...module1Defaults} />
          <Module {...module2Defaults} />
        </Context>,
        {
          attachTo: reactContainer
        }
      );

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it('can insert <Module> elements before and after another <Module>', () => {
      const { higGroup, higContainer } = higContext();

      const module1Defaults = {
        icon: 'project-management',
        title: 'Module 1',
        link: '#',
        key: '1'
      };
      const module1 = new higGroup.partials.Module(module1Defaults);

      // Do not add yet

      const module2Defaults = {
        icon: 'project-management',
        title: 'Module 2',
        link: '#',
        key: '2'
      };
      const module2 = new higGroup.partials.Module(module2Defaults);
      higGroup.addModule(module2);

      // Add before item 2
      higGroup.addModule(module1, module2);

      class CustomComponent extends React.Component {
        constructor(props) {
          super(props);
          this.state = { showingItemBefore: false, showingItemAfter: false };
        }

        render() {
          return (
            <Context>
              {this.state.showingItemBefore && <Module {...module1Defaults} />}
              <Module {...module2Defaults} />
              {this.state.showingItemAfter && <Module icon="assets" />}
            </Context>
          );
        }
      }

      const reactContainer = document.createElement('div');
      const wrapper = mount(<CustomComponent />, {
        attachTo: reactContainer
      });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      wrapper.setState({ showingItemBefore: true });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );

      wrapper.setState({ showingItemBefore: false });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      wrapper.setState({ showingItemAfter: true });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      wrapper.setState({ showingItemAfter: false });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });

    it('can not render HTML elements as children', () => {
      global.console.error = jest.fn();

      mount(
        <Context>
          <div>Hello world!</div>
        </Context>
      );

      expect(console.error).toBeCalledWith(
        expect.stringMatching(
          /'div' is not a valid child of Group. Children should be of type 'Module'/
        )
      );
    });

    it('can not render HTML text as children', () => {
      global.console.error = jest.fn();

      mount(
        <Context>
          Hello world!
        </Context>
      );

      expect(console.error).toBeCalledWith(
        expect.stringMatching(
          /'Hello world!' is not a valid child of Group. Children should be of type 'Module'/
        )
      );
    });
  });
});
