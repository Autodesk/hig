/*
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
import TestUtils from 'react-dom/test-utils';

import GlobalNav from '../GlobalNavAdapter';
import SideNav from './SideNavAdapter';
import SectionList from '../../../elements/components/GlobalNav/SectionList';
import { default as SectionAdapter } from './SectionAdapter';
import { default as SectionCollapseAdapter } from './SectionCollapseAdapter';

const inputId = '1234';

describe('<SectionCollapseAdapter>', () => {
  function createHigComponent(defaults = {}) {
    const higContainer = document.createElement('div');
    const globalNav = new HIG.GlobalNav();
    const sideNav = new globalNav.partials.SideNav();
    const section = new sideNav.partials.Section({
      label: 'Project',
      title: 'Runway'
    });
    const collapse = new section.partials.Collapse();

    globalNav.mount(higContainer);
    globalNav.addSideNav(sideNav);
    sideNav.addSection(section);
    section.addCollapse(collapse);

    return { higComponent: collapse, higContainer };
  }

  function Context(props) {
    return (
      <GlobalNav>
        <SideNav>
          <SectionList>
            <SectionAdapter label="Project" title="Runway">
              <SectionCollapseAdapter {...props} />
            </SectionAdapter>
          </SectionList>
        </SideNav>
      </GlobalNav>
    );
  }

  function createOrionComponent(defaults) {
    const orionContainer = document.createElement('div');
    const orionWrapper = mount(<Context {...defaults} />, {
      attachTo: orionContainer
    });

    return { orionWrapper, orionContainer };
  }

  it('renders', () => {
    const defaults = {};
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults);

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('renders with updated props', () => {
    const defaults = {};
    const nextProps = {
      minimized: true
    };
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionContainer, orionWrapper } = createOrionComponent(defaults);

    orionWrapper.setProps(nextProps);
    higComponent.minimize();

    expect(orionContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('warns when passed an unsupported property', () => {
    const warnSpy = jest.fn();
    const { orionContainer, orionWrapper } = createOrionComponent({});
    console.warn = warnSpy;

    orionWrapper.setProps({ realProp: false });

    expect(warnSpy).toHaveBeenCalled();
  });

  ['onClick'].forEach(eventName => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { orionContainer, orionWrapper } = createOrionComponent({});
      console.warn = warnSpy;

      orionWrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});
