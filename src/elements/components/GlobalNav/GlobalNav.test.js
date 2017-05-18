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

describe('<GlobalNav>', () => {
  /**
     * Creates a hig.web GlobalNav and returns the instance and it's container
     */
  function createHigNav() {
    const higContainer = document.createElement('div');

    // use spread here to clone defaults since HIG.Button mutates this object
    const higNav = new HIG.GlobalNav();

    higNav.mount(higContainer);

    return { higNav, higContainer };
  }

  it('renders the global nav', () => {
    const { higNav, higContainer } = createHigNav();

    const reactContainer = document.createElement('div');
    const wrapper = mount(<GlobalNav />, { attachTo: reactContainer });

    expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

    expect(reactContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  });

  describe('sideNavOpen prop', () => {
    it('is equal to showSideNav', () => {
      const { higNav, higContainer } = createHigNav();
      const reactContainer = document.createElement('div');
      const wrapper = mount(<GlobalNav />, { attachTo: reactContainer });

      higNav.showSideNav();

      wrapper.setProps({ sideNavOpen: true });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );

      higNav.hideSideNav();
      wrapper.setProps({ sideNavOpen: false });

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it('can showSideNav by default', () => {
      const { higNav, higContainer } = createHigNav();
      const reactContainer = document.createElement('div');
      const wrapper = mount(<GlobalNav sideNavOpen={true} />, {
        attachTo: reactContainer
      });

      higNav.showSideNav();

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });
  });

  describe('<SideNav>', () => {
    it('can render the SideNav by default', () => {
      const { higNav, higContainer } = createHigNav();

      const sideNav = new higNav.partials.SideNav();
      higNav.addSideNav(sideNav);

      const reactContainer = document.createElement('div');
      const wrapper = mount(
        <GlobalNav>
          <GlobalNav.SideNav />
        </GlobalNav>,
        {
          attachTo: reactContainer
        }
      );

      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

      expect(reactContainer.firstChild.outerHTML).toEqual(
        higContainer.firstChild.outerHTML
      );
    });

    it('can only render a single SideNav', () => {
      expect(() => {
        mount(
          <GlobalNav>
            <GlobalNav.SideNav />
            <GlobalNav.SideNav />
          </GlobalNav>
        );
      }).toThrowError(/only one SideNav is allowed/);
    });

    describe('<Sections>', () => {
      it('can render a <Sections> by default', () => {
        const { higNav, higContainer } = createHigNav();

        const sideNav = new higNav.partials.SideNav();
        higNav.addSideNav(sideNav);

        const reactContainer = document.createElement('div');
        const wrapper = mount(
          <GlobalNav>
            <GlobalNav.SideNav>
              <GlobalNav.SideNav.SectionList />
            </GlobalNav.SideNav>
          </GlobalNav>,
          {
            attachTo: reactContainer
          }
        );

        expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

        expect(reactContainer.firstChild.outerHTML).toEqual(
          higContainer.firstChild.outerHTML
        );
      });

      it('can only render a single <Sections>', () => {
        expect(() => {
          mount(
            <GlobalNav>
              <GlobalNav.SideNav>
                <GlobalNav.SideNav.SectionList />
                <GlobalNav.SideNav.SectionList />
              </GlobalNav.SideNav>
            </GlobalNav>
          );
        }).toThrowError(/only one Sections is allowed/);
      });

      describe('<Section>', () => {
        it('can render a <Section> by default', () => {
          const { higNav, higContainer } = createHigNav();

          const sideNav = new higNav.partials.SideNav();
          higNav.addSideNav(sideNav);

          const sectionDefaults = {
            headerLabel: 'Project',
            headerName: 'Thunderstorm'
          };

          const section1 = new sideNav.partials.Section(sectionDefaults);

          sideNav.addSection(section1);

          const reactContainer = document.createElement('div');
          const wrapper = mount(
            <GlobalNav>
              <GlobalNav.SideNav>
                <GlobalNav.SideNav.SectionList>
                  <GlobalNav.SideNav.SectionList.Item {...sectionDefaults} />
                </GlobalNav.SideNav.SectionList>

              </GlobalNav.SideNav>
            </GlobalNav>,
            {
              attachTo: reactContainer
            }
          );

          expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

          expect(reactContainer.firstChild.outerHTML).toEqual(
            higContainer.firstChild.outerHTML
          );
        });

        it('can render multiple sections', () => {
          const { higNav, higContainer } = createHigNav();

          const sideNav = new higNav.partials.SideNav();
          higNav.addSideNav(sideNav);

          const section1Defaults = {
            headerLabel: 'Project',
            headerName: 'Thunderstorm'
          };

          const section1 = new sideNav.partials.Section(section1Defaults);

          sideNav.addSection(section1);

          const section2Defaults = {
            headerLabel: 'Project',
            headerName: 'Boo Ya'
          };

          const section2 = new sideNav.partials.Section(section2Defaults);

          sideNav.addSection(section2);

          const reactContainer = document.createElement('div');
          const wrapper = mount(
            <GlobalNav>
              <GlobalNav.SideNav>
                <GlobalNav.SideNav.SectionList>
                  <GlobalNav.SideNav.SectionList.Item {...section1Defaults} />
                  <GlobalNav.SideNav.SectionList.Item {...section2Defaults} />
                </GlobalNav.SideNav.SectionList>
              </GlobalNav.SideNav>
            </GlobalNav>,
            {
              attachTo: reactContainer
            }
          );

          expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

          expect(reactContainer.firstChild.outerHTML).toEqual(
            higContainer.firstChild.outerHTML
          );
        });

        it('can update to have a section before the other section', () => {
          const { higNav, higContainer } = createHigNav();

          const sideNav = new higNav.partials.SideNav();
          higNav.addSideNav(sideNav);

          const section1Defaults = {
            headerLabel: 'Label 1',
            headerName: 'Name 1'
          };

          const section1 = new sideNav.partials.Section(section1Defaults);

          // DELIBERATELY DON'T ADD SECTION 1

          const section2Defaults = {
            headerLabel: 'Label 2',
            headerName: 'Name 2'
          };

          const section2 = new sideNav.partials.Section(section2Defaults);

          sideNav.addSection(section2);

          // ADD SECTION 1 before SECTION 2

          sideNav.addSection(section1, section2);

          class CustomComponent extends React.Component {
            constructor(props) {
              super(props);
              this.state = { showingItem: false };
            }

            render() {
              return (
                <GlobalNav>
                  <GlobalNav.SideNav>
                    <GlobalNav.SideNav.SectionList>
                      {this.state.showingItem &&
                        <GlobalNav.SideNav.SectionList.Item
                          {...section1Defaults}
                        />}
                      <GlobalNav.SideNav.SectionList.Item
                        {...section2Defaults}
                      />
                    </GlobalNav.SideNav.SectionList>
                  </GlobalNav.SideNav>

                </GlobalNav>
              );
            }
          }

          const reactContainer = document.createElement('div');
          const wrapper = mount(<CustomComponent />, {
            attachTo: reactContainer
          });

          expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

          wrapper.setState({ showingItem: true });

          expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();

          expect(reactContainer.firstChild.outerHTML).toEqual(
            higContainer.firstChild.outerHTML
          );
        });

        it('can update the section headerLabel');

        it('can update the section headerName');
      });
    });
  });
});
