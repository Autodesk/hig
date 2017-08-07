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
import Help from './HelpAdapter';

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

  const help = new higTopNav.partials.Help(props);

  higTopNav.addHelp(help);

  return { higContainer, higItem: help };
}

describe('Help', () => {
  it('renders help ', () => {
    const props = {};
    const { reactWrapper, reactContainer } = setupReactContext(props);
    const { higContainer, higItem } = createHigContext(props);

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });

  it('setting and updating props', () => {
    const defaults = {
      title: 'test',
      link: 'testLink'
    };

    const nextProps = {
      title: 'newTest',
      link: 'newTestLink'
    };

    const { higContainer, higItem } = createHigContext(defaults);
    const { reactWrapper, reactContainer } = setupReactContext(defaults);

    reactWrapper.setProps(nextProps);

    higItem.setTitle(nextProps.title);
    higItem.setLink(nextProps.link);

    expect(reactContainer.firstElementChild.outerHTML).toMatchSnapshot();
    expect(reactContainer.firstElementChild.outerHTML).toEqual(
      higContainer.firstElementChild.outerHTML
    );
  });
});
