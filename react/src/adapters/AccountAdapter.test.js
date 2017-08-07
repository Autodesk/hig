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

import GlobalNav from './GlobalNav/GlobalNavAdapter';
import TopNav from '../elements/components/GlobalNav/TopNav/TopNav';
import ProjectAccountSwitcher from './ProjectAccountSwitcherAdapter';
import Account from './AccountAdapter';
import SharedExamples from '../elements/components/GlobalNav/SharedExamples';

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
        <ProjectAccountSwitcher>
          <Account {...props} />
        </ProjectAccountSwitcher>
      </TopNav>
    </GlobalNav>
  );
};

function createOrionAccount(props) {
  const reactContainer = document.createElement('div');
  const reactWrapper = mount(<Context {...props} />, {
    attachTo: reactContainer
  });

  return { reactWrapper, reactContainer };
}

function createHigContext(props) {
  const higContainer = document.createElement('div');

  const higNav = new HIG.GlobalNav();
  higNav.mount(higContainer);

  const higTopNav = new higNav.partials.TopNav({});
  higNav.addTopNav(higTopNav);

  const projectAccountSwitcher = new higTopNav.partials.ProjectAccountSwitcher({
  });

  higTopNav.addProjectAccountSwitcher(projectAccountSwitcher);
  projectAccountSwitcher.hideCaret();

  const account = new projectAccountSwitcher.partials.Account(props);
  projectAccountSwitcher.addAccount(account);

  return { higContainer, higItem: account };
}

describe('<Account>', () => {
  it('renders an Account', () => {
    const defaults = {};
    const { higContainer, higItem } = createHigContext(defaults);
    const { reactWrapper, reactContainer } = createOrionAccount(defaults);

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('setting and updating props', () => {
    const defaults = {
      image: 'test.jpg',
      label: 'testLabel'
    };

    const nextProps = {
      image: 'newImage.jpg',
      label: 'newLabel',
      active: true
    };

    const { higContainer, higItem } = createHigContext(defaults);
    const { reactWrapper, reactContainer } = createOrionAccount(defaults);

    reactWrapper.setProps(nextProps);

    higItem.setImage(nextProps.image);
    higItem.setLabel(nextProps.label);
    higItem.activate();

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('warns when passed an unsupported property', () => {
    const warnSpy = jest.fn();
    const { reactWrapper, reactContainer } = createOrionAccount({});
    console.warn = warnSpy;

    reactWrapper.setProps({ realProp: false });

    expect(warnSpy).toHaveBeenCalled();
  });

  ['onClick'].forEach(eventName => {
    it(`handles ${eventName}`, () => {
      const warnSpy = jest.fn();
      const { reactWrapper, reactContainer } = createOrionAccount({});
      console.warn = warnSpy;

      reactWrapper.setProps({ [eventName]: () => {} });

      expect(warnSpy).not.toHaveBeenCalled();
    });
  });
});
