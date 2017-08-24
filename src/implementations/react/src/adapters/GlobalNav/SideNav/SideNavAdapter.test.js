import { mount } from 'enzyme';
import * as HIG from 'hig-vanilla';
import React from 'react';

import GlobalNav from '../GlobalNavAdapter';
import SideNav from './SideNavAdapter';
import Search from './SearchAdapter';
import Group from './GroupAdapter';
import Module from './ModuleAdapter';
import Submodule from './SubmoduleAdapter';

describe('<SideNav>', () => {
  function createHigComponent(defaults = {}) {
    const higContainer = document.createElement('div');
    const globalNav = new HIG.GlobalNav();
    const sideNav = new globalNav.partials.SideNav(defaults);

    globalNav.mount(higContainer);
    globalNav.addSideNav(sideNav);

    return { higComponent: sideNav, higContainer };
  }

  function Context(props) {
    return (
      <GlobalNav>
        <SideNav {...props} />
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

  it('renders without defaults', () => {
    const { higComponent, higContainer } = createHigComponent({});
    const { orionWrapper, orionContainer } = createOrionComponent({});

    expect(orionContainer.firstChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  });

  it('renders when configured with defaults', () => {
    const defaults = {
      copyright: "Copyright @ 2017",
      headerLabel: "My lovely project",
      headerLink: "http://my-project-url.com",
      superHeaderLabel: "My lovely account",
      superHeaderLink: "http://my-account-url.com"
    };
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionWrapper, orionContainer } = createOrionComponent(defaults);

    expect(orionContainer.firstChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  });

  it('renders when configured with updated props', () => {
    const defaults = {
      copyright: "Copyright @ 2017",
      headerLabel: "My lovely project",
      headerLink: "http://my-project-url.com",
      superHeaderLabel: "My lovely account",
      superHeaderLink: "http://my-account-url.com"
    };
    const nextProps = {
      copyright: "Copyright @ 2018",
      headerLabel: "My updated project",
      headerLink: "http://my-updated-project-url.com",
      superHeaderLabel: "My updated account",
      superHeaderLink: "http://my-updated-account-url.com"
    }
    const { higComponent, higContainer } = createHigComponent(defaults);
    const { orionWrapper, orionContainer } = createOrionComponent(defaults);

    orionWrapper.setProps(nextProps);
    higComponent.setCopyright(nextProps.copyright);
    higComponent.setHeaderLabel(nextProps.headerLabel);
    higComponent.setHeaderLink(nextProps.headerLink);
    higComponent.setSuperHeaderLabel(nextProps.superHeaderLabel);
    higComponent.setSuperHeaderLink(nextProps.superHeaderLink);

    expect(orionContainer.firstChild.outerHTML).toMatchSnapshot();

    expect(orionContainer.firstChild.outerHTML).toEqual(
      higContainer.firstChild.outerHTML
    );
  });

  describe('<SideNav> with search', () => {
    const Context = props => {
      return (
        <GlobalNav>
          <SideNav>
            <Group>
              <Module title={props.moduleTitle} icon="assets">
                <Submodule title={props.submoduleTitle1} icon="assets" />
                <Submodule title={props.submoduleTitle2} icon="assets" />
              </Module>
            </Group>
            <Search query={props.query} />
          </SideNav>
        </GlobalNav>
      );
    };

    function setupReactContext(props) {
      const reactContainer = document.createElement('div');
      mount(<Context {...props} />, { attachTo: reactContainer });
      return { reactContainer };
    }

    it('renders children correctly', () => {
      const props = {
        placeholder: 'Search Here',
        headerLabel: 'Oakland Medical Center',
        headerName: 'Thunderstorm',
        moduleTitle: 'Document Workflow',
        submoduleTitle1: 'Document',
        submoduleTitle2: 'Workflow'
      };
      const { reactContainer } = setupReactContext(props);
      expect(reactContainer.firstChild.outerHTML).toMatchSnapshot();
    });
  });
});
