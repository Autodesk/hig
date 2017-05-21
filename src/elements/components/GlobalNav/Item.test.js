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
import Item from './Item';

const Context = props => {
  const { children, ...rest } = props;

  return (
    <GlobalNav>
      <GlobalNav.SideNav>
        <GlobalNav.SideNav.SectionList>
          <GlobalNav.SideNav.SectionList.Item>
            <GlobalNav.SideNav.SectionList.Item.Group>
              <Item {...props} />
            </GlobalNav.SideNav.SectionList.Item.Group>
          </GlobalNav.SideNav.SectionList.Item>
        </GlobalNav.SideNav.SectionList>
      </GlobalNav.SideNav>
    </GlobalNav>
  );
};

function higContext(defaults) {
  const higContainer = document.createElement('div');

  // use spread here to clone defaults since HIG.Button mutates this object
  const higNav = new HIG.GlobalNav();

  higNav.mount(higContainer);

  const higSideNav = new higNav.partials.SideNav();
  higNav.addSideNav(higSideNav);

  const higSection = new higSideNav.partials.Section({});

  higSideNav.addSection(higSection);

  const higGroup = new higSection.partials.Group();

  higSection.addGroup(higGroup);

  const higItem = new higGroup.partials.Item(defaults);

  higGroup.addItem(higItem);

  return { higNav, higSideNav, higSection, higGroup, higItem, higContainer };
}

describe('<Item>', () => {
  function doStandardChecks(config) {
    it(`sets ${config.key} by default`, () => {
      const defaults = { [config.key]: [config.sampleValue] };
      const { higContainer } = higContext(defaults);

      const reactContainer = document.createElement('div');

      const wrapper = mount(<Context {...defaults} />, {
        attachTo: reactContainer
      });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it(`updates ${config.key}`, () => {
      const defaults = { [config.key]: [config.sampleValue] };
      const { higItem, higContainer } = higContext(defaults);

      const reactContainer = document.createElement('div');

      const wrapper = mount(<Context {...defaults} />, {
        attachTo: reactContainer
      });

      // Update hig.web instance
      higItem[config.mutator](config.updateValue);

      // Update React Instance
      wrapper.setProps({ [config.key]: config.updateValue });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      // Check them against each other
      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });
  }

  describe('icon', () => {
    const config = {
      key: 'icon',
      sampleValue: 'project-management',
      updateValue: 'hamburger',
      mutator: 'setIcon'
    };

    doStandardChecks(config);

    xit('logs an error if the icon is not a string', () => {
      global.console.error = jest.fn();

      mount(<Context icon={[]} />);

      expect(console.error).toBeCalledWith(
        expect.stringMatching(
          /Invalid prop `icon` of type `array` supplied to `Item`, expected `string`./
        )
      );
    });
  });

  describe('title', () => {
    const config = {
      key: 'title',
      sampleValue: 'Item 1',
      updateValue: 'Item 2',
      mutator: 'setTitle'
    };

    doStandardChecks(config);
  });

  describe('link', () => {
    const config = {
      key: 'link',
      sampleValue: 'http://example.com',
      updateValue: 'http://example.com/2',
      mutator: 'setLink'
    };

    doStandardChecks(config);
  });

  describe('onHover', () => {});

  describe('onClick', () => {});
});
