import React, { Component } from 'react';
import { mount } from 'enzyme';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import SideNav from '../SideNav';

describe('<SideNav>', () => {
  class Context extends Component {
    static defaultProps = {
      modules: [
        { id: 'mod-1', title: 'Flora', groupId: 'group-1', icon: 'assets' },
        { id: 'mod-2', title: 'Fauna', groupId: 'group-2', icon: 'assets' }
      ],
      submodules: [
        { id: 'sub-1', moduleId: 'mod-1', title: 'Rose', icon: 'assets' },
        { id: 'sub-2', moduleId: 'mod-1', title: 'Wheat', icon: 'assets' },
        { id: 'sub-3', moduleId: 'mod-2', title: 'Goat', icon: 'assets' },
        { id: 'sub-3', moduleId: 'mod-2', title: 'Wolf', icon: 'assets' },
      ]
    }

    render() {
        return (
          <GlobalNavAdapter>
          <SideNav {...this.props}/>
        </GlobalNavAdapter>
      );
    }
  }

  describe('with a query', () => {
    describe('matching a module', () => {
      pending('it shows the module');
    });

    describe('matching a submodule', () => {
      pending('it shows the submodule and the parent');
    });
  });

  describe('with activeModuleId', () => {
    describe('matching a module', () => {
      pending('passes active to the module');
    });

    describe('matching a submodule', () => {
      pending('passes active to the submodule and its parent');
    });
  });

  describe('with searchable', () => {
    describe('true', () => {
      pending('renders a search field');
    });

    describe('false', () => {
      pending('does not render a search field');
    });
  });

  describe('with links', () => {
    pending('renders links');
  });

  describe('other props', () => {
    pending('passes headerLabel');
    pending('passes superHeaderLabel');
    pending('passes headerLink');
    pending('passes superHeaderLink');
    pending('passes onHeaderClick');
    pending('passes onSuperHeaderClick');
  });
});
