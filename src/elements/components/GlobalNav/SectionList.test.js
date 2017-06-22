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
import SectionList from './SectionList';
import Section from './Section';

const Context = props => (
  <GlobalNav>
    <GlobalNav.SideNav>
      <SectionList>
        {props.children}
      </SectionList>
    </GlobalNav.SideNav>
  </GlobalNav>
);

function higContext() {
  const higContainer = document.createElement('div');

  // use spread here to clone defaults since HIG.Button mutates this object
  const higNav = new HIG.GlobalNav();

  higNav.mount(higContainer);

  const higSideNav = new higNav.partials.SideNav();
  higNav.addSideNav(higSideNav);

  return { higNav, higSideNav, higContainer };
}

describe('<SectionList>', () => {
  it('can render a list of <Section> elements', () => {
    const { higSideNav, higContainer } = higContext();

    const section1Defaults = {
      headerLabel: 'Project',
      headerName: 'Thunderstorm'
    };

    const section1 = new higSideNav.partials.Section(section1Defaults);

    const collapse1 = new section1.partials.Collapse();

    higSideNav.addSection(section1);
    section1.addCollapse(collapse1)

    const section2Defaults = {
      headerLabel: 'Project',
      headerName: 'Boo Ya'
    };

    const section2 = new higSideNav.partials.Section(section2Defaults);
    const collapse2 = new section2.partials.Collapse();

    higSideNav.addSection(section2);
    section2.addCollapse(collapse2);

    const reactContainer = document.createElement('div');
    const wrapper = mount(
      <Context>
        <Section {...section1Defaults} />
        <Section {...section2Defaults} />
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

  it('can insert a <Section> before and after another <Section> one', () => {
    const { higSideNav, higContainer } = higContext();

    const section1Defaults = {
      headerLabel: 'Label 1',
      headerName: 'Name 1'
    };

    const section1 = new higSideNav.partials.Section(section1Defaults);
  


    // DELIBERATELY DON'T ADD SECTION 1

    const section2Defaults = {
      headerLabel: 'Label 2',
      headerName: 'Name 2'
    };

    const section2 = new higSideNav.partials.Section(section2Defaults);
    
   
    const collapse2 = new section2.partials.Collapse();
    higSideNav.addSection(section2);
    section2.addCollapse(collapse2);

    
   

    // ADD SECTION 1 before SECTION 2

    higSideNav.addSection(section1, section2);
    const collapse1 = new section1.partials.Collapse();
    section1.addCollapse(collapse1)

    class CustomComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = { showingItemBefore: false, showingItemAfter: false };
      }

      render() {
        return (
          <Context>
            {this.state.showingItemBefore && <Section {...section1Defaults} />}
            <Section {...section2Defaults} />
            {this.state.showingItemAfter &&
              <Section headerLabel="last label" headerName="last name" />}
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
      <GlobalNav>
        <GlobalNav.SideNav>
          <SectionList>
            <div>Hello world!</div>
          </SectionList>
        </GlobalNav.SideNav>
      </GlobalNav>
    );

    expect(console.error).toBeCalledWith(
      expect.stringMatching(
        /'div' is not a valid child of SectionList. Children should be of type 'Section'/
      )
    );
  });

  it('can not render HTML text as children', () => {
    global.console.error = jest.fn();

    mount(
      <GlobalNav>
        <GlobalNav.SideNav>
          <SectionList>
            Hello world!
          </SectionList>
        </GlobalNav.SideNav>
      </GlobalNav>
    );

    expect(console.error).toBeCalledWith(
      expect.stringMatching(
        /'Hello world!' is not a valid child of SectionList. Children should be of type 'Section'/
      )
    );
  });
});
