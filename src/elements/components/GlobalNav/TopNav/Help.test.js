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

import GlobalNav from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNav from './TopNav';
import Help from './Help';

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <Help title={props.title} link={props.link} />
      </TopNav>
    </GlobalNav>
  );
};

function setupReactContext(props) {
  const reactContainer = document.createElement('div');
  mount(<Context {...props} />, { attachTo: reactContainer });
  return { reactContainer };
}

describe('Help', () => {
  describe('constructor', () => {
    it('has a good snapshot', () => {
      const props = { title: 'HELP', link: '/help' };
      const { reactContainer } = setupReactContext(props);
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
      var elems = reactContainer.getElementsByClassName(
        'hig__global-nav__top-nav__shortcut__link__icon--help'
      );
      expect(elems.length).toEqual(1);
    });
  });
});
