import React, { Component } from 'react';
import { mount } from 'enzyme';

import GlobalNavAdapter from '../../../../adapters/GlobalNav/NewGlobalNavAdapter';
import SideNavAdapter from '../../../../adapters/GlobalNav/SideNav/NewSideNavAdapter';
import SideNav, { Link, Module, Submodule, Search } from '../SideNav';

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
      ],
      onModuleChange: jest.fn()
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
      it('it shows the module', () => {
        const wrapper = mount(<Context query="Flo" />);
        expect(wrapper.find(Module).length).toEqual(1);
        expect(wrapper.find(Module)).toHaveProp('title', 'Flora');
      });
    });

    describe('matching a submodule', () => {
      it('it shows the submodule and the parent', () => {
        const wrapper = mount(<Context query="Ros" />);
        expect(wrapper.find(Module).length).toEqual(1);
        expect(wrapper.find(Module)).toHaveProp('title', 'Flora');
        expect(wrapper.find(Submodule).length).toEqual(1);
        expect(wrapper.find(Submodule)).toHaveProp('title', 'Rose');
      });
    });
  });

  describe('with activeModuleId', () => {
    describe('matching a module', () => {
      it('passes active to the module', () => {
        const wrapper = mount(<Context activeModuleId="mod-1" />);
        expect(wrapper.find(Module).first()).toHaveProp('active', true);
      });
    });

    describe('matching a submodule', () => {
      it('passes active to the submodule and its parent', () => {
        const wrapper = mount(<Context activeModuleId="sub-1" />);
        expect(wrapper.find(Submodule).first()).toHaveProp('active', true);
        expect(wrapper.find(Module).first()).toHaveProp('active', true);
      });
    });
  });

  describe('with searchable', () => {
    describe('true', () => {
      it('renders a search field', () => {
        const wrapper = mount(<Context searchable={true} />);
        expect(wrapper.find(Search).length).toEqual(1);
      });
    });

    describe('false', () => {
      it('does not render a search field', () => {
        const wrapper = mount(<Context searchable={false} />);
        expect(wrapper.find(Search).length).toEqual(0);
      });
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
