import React, { Component } from 'react';
import { mount } from 'enzyme';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import SideNavAdapter from '../../../../adapters/GlobalNav/SideNav/SideNavAdapter';
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
        { id: 'sub-4', moduleId: 'mod-2', title: 'Wolf', icon: 'assets' },
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
    it('renders links', () => {
      const links = [];
      const wrapper = mount(<Context links={links} />);
      expect(wrapper.find(Link).first());
    });
  });

  describe('with other props', () => {
    it('passes headerLabel', () => {
      const wrapper = mount(<Context headerLabel="My Project" />)
      expect(wrapper.find(SideNavAdapter)).toHaveProp('headerLabel', 'My Project');
    });

    it('passes superHeaderLabel', () => {
      const wrapper = mount(<Context superHeaderLabel="Global Construction" />)
      expect(wrapper.find(SideNavAdapter)).toHaveProp('superHeaderLabel', 'Global Construction');
    });

    it('passes headerLink', () => {
      const wrapper = mount(<Context headerLink="https://my-project.com" />);
      expect(wrapper.find(SideNavAdapter)).toHaveProp('headerLink', 'https://my-project.com');
    });

    it('passes superHeaderLink', () => {
      const wrapper = mount(<Context superHeaderLink="https://my-account.com" />);
      expect(wrapper.find(SideNavAdapter)).toHaveProp('superHeaderLink', 'https://my-account.com');
    });

    it('passes onHeaderClick', () => {
      const callback = jest.fn();
      const wrapper = mount(<Context onHeaderClick={callback} />);
      expect(wrapper.find(SideNavAdapter)).toHaveProp('onHeaderClick', callback);
    });

    it('passes onSuperHeaderClick', () => {
      const callback = jest.fn();
      const wrapper = mount(<Context onSuperHeaderClick={callback} />);
      expect(wrapper.find(SideNavAdapter)).toHaveProp('onSuperHeaderClick', callback);
    });

  });
});
