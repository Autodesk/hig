/**
 Copyright 2017 Autodesk,Inc.

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
import Container from './Container';
import TopNav from './TopNav'

describe('<TopNav>', () => {

    //function createHigNavWithContainer() {
    //  const domContainer = document.createElement('div');
    //  const higNav = new HIG.GlobalNav();
    //  higNav.mount(domContainer);
    //
    //  const container = new higNav.partials.Container();
    //  higNav.addContainer(container);
    //  return { domContainer, container };
    //}
    //
    //// Create the GlobalNav context for the TopNav to be attached to
    //let Context = props => <GlobalNav>{props.children}</GlobalNav>;

  //it('renders a topnav', () => {
  //  const {domContainer, container}  = createHigNavWithContainer();
  //
  //  const defaults = { logo: "../../../bim-logo.png", logoLink: "http://www.autodesk.com" }
  //
  //  const topNav = new container.partials.TopNav({ ...defaults });
  //  container.addTopNav(topNav);
  //
  //  const reactContainer = document.createElement('div');
  //  mount(
  //    <GlobalNav>
  //      <GlobalNav.Container>
  //        <TopNav { ...defaults} />
  //      </GlobalNav.Container>
  //    </GlobalNav>,
  //    { attachTo: reactContainer }
  //  );
  //
  //  expect(container.firstElementChild.outerHTML).toMatchSnapshot();
  //
  //  expect(container.firstElementChild.outerHTML).toEqual(
  //    topNavContainer.firstElementChild.outerHTML
  //  );
  //
  //});

  it('can render the elements', () => {
    //global.console.error = jest.fn();
    mount(
      <GlobalNav>
        <GlobalNav.Container>
          <GlobalNav.Container.TopNav>
          </GlobalNav.Container.TopNav>
        </GlobalNav.Container>
      </GlobalNav>
    )

    //expect(console.error).not.toBeCalledWith(
    //  expect.stringMatching(
    //    "Warning: Failed prop type: 'TopNav' is not a valid child of Container. Children should be of type ', , Slot'"
    //  )
    //);

  })
});
