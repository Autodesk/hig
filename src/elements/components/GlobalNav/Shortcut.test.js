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
import Shortcut from './Shortcut';
import SharedExamples from './SharedExamples';

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <Shortcut title={props.title} link={props.link} icon={props.icon} />
      </TopNav>
    </GlobalNav>
  );
};

function setupReactContext() {
  const props = { title: 'GEARS', link: '/settings', icon: 'gear' };
  const reactContainer = document.createElement('div');
  mount(<Context {...props} />, { attachTo: reactContainer });
  return { reactContainer };
}

describe('Shortcut', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const { reactContainer } = setupReactContext();
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      var elems = reactContainer.getElementsByClassName(
        'hig__global-nav__top-nav__shortcut'
      );
      expect(elems.length).toEqual(1);
    });
  });
});
