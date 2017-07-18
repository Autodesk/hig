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
import Section from './Section';
import SectionList from './SectionList';
import Group from './Group';
import Module from './Module';
import Submodule from './Submodule';

import SharedExamples from './SharedExamples';

const Context = props => {
  return (
    <GlobalNav>
      <SideNav>
        <Search placeholder={props.placeholder} />
        <SectionList>
          <Section>
            <Group>
              <Module tile={props.moduleTitle} icon="assets">
                <Submodule title={props.submoduleTitle} icon="assets" />
              </Module>
            </Group>
          </Section>
        </SectionList>
      </SideNav>
    </GlobalNav>
  );
};

function setUpSearch() {
  const defaults = {
    placeholder: 'Search for something',
    submoduleTitle: 'Document New',
    moduleTitle: 'Docoument Workflow'
  };

  const reactContainer = document.createElement('div');
  const wrapper = mount(<Context {...defaults} />, {
    attachTo: reactContainer
  });
  return { wrapper, reactContainer };
}

describe('<Search>', () => {
  it('will is rendered as a child of Side Nav', () => {
    const { reactContainer } = setUpSearch();

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
  });
});
