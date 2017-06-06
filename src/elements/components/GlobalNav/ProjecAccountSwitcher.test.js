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

const onAddAccount = function(){
  return 'onAddAcount'
};

const onAddProject = function(){
  return 'onAddProject'
};

const onItemClick = function(){
  return 'onItemClick'
};

const onClickOutside = function(){
  return 'onClickOutside'
};

const Context = props => {
  return (
    <GlobalNav>
      <TopNav>
        <ProjectAccountSwitcher
          activeLabel={props.label}
          activeImage={props.image}
          activeType={props.type}
          addAccount={onAddAccount}
          addProject={onAddProject}
          isOpen={props.open}
          onClick={onItemClick}
          onClickOutside={onClickOutside}
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
  higTopNav.addProfile(higItem);

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
});

