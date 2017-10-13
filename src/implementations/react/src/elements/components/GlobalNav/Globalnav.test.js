import React from 'react';
import { mount } from 'enzyme';
import GlobalNav, { SideNav, SubNav, Tabs } from './index.js';
import TopNav, { ProjectAccountSwitcher } from './TopNav';
import TabAdapter from '../../../adapters/GlobalNav/SubNav/TabAdapter';
import GlobalNavAdapter from '../../../adapters/GlobalNav/GlobalNavAdapter';

function Context(props) {
  const renderedProps = {
    onModuleChange: () => {},
    ...props
  };
  return <GlobalNav {...renderedProps} />;
}

describe('<GlobalNav>', () => {
  describe('with GlobalNav props', () => {
    it('passes sideNavOpen', () => {
      const wrapper = mount(<Context sideNavOpen />);
      expect(wrapper.find(GlobalNavAdapter)).toHaveProp('sideNavOpen', true);
    });
  });

  describe('with ProjectAccountSwitcher props', () => {
    it('passes accounts', () => {
      const accounts = [
        { id: '1', label: 'Foo', image: 'https://images/accounts/foo.png' }
      ];
      const topNavProps = {
        projectAccountSwitcher: { accounts }
      };
      const wrapper = mount(<Context topNav={topNavProps} />);
      expect(wrapper.find(ProjectAccountSwitcher)).toHaveProp(
        'accounts',
        accounts
      );
    });

    it('passes activeAccountId', () => {
      const accounts = [
        { id: '1', label: 'Foo', image: 'https://images/accounts/foo.png' }
      ];
      const topNavProps = {
        projectAccountSwitcher: {
          accounts,
          activeAccountId: '1'
        }
      };
      const wrapper = mount(<Context topNav={topNavProps} />);
      expect(wrapper.find(ProjectAccountSwitcher)).toHaveProp(
        'activeAccountId',
        '1'
      );
    });

    it('passes activeProjectId', () => {
      const projects = [
        { id: '1', label: 'Foo', image: 'https://images/projects/foo.png' }
      ];
      const topNavProps = {
        projectAccountSwitcher: {
          projects,
          activeProjectId: '1'
        }
      };
      const wrapper = mount(<Context topNav={topNavProps} />);
      expect(wrapper.find(ProjectAccountSwitcher)).toHaveProp(
        'activeProjectId',
        '1'
      );
    });

    it('passes projects', () => {
      const projects = [
        { id: '1', label: 'Foo', image: 'https://images/projects/foo.png' }
      ];
      const topNavProps = {
        projectAccountSwitcher: {
          projects
        }
      };
      const wrapper = mount(<Context topNav={topNavProps} />);
      expect(wrapper.find(ProjectAccountSwitcher)).toHaveProp(
        'projects',
        projects
      );
    });
  });

  describe('with TopNav props', () => {
    it('passes logo', () => {
      const topNavProps = {
        logo: 'https:/images/logo.png',
        logoLink: '/'
      };
      const wrapper = mount(<Context topNav={topNavProps} />);
      expect(wrapper.find(TopNav)).toHaveProp('logo', 'https:/images/logo.png');
      expect(wrapper.find(TopNav)).toHaveProp('logoLink', '/');
    });
  });

  describe('with SideNav props', () => {
    it('passes activeModuleId', () => {
      const wrapper = mount(<Context activeModuleId="1" />);
      expect(wrapper.find(SideNav)).toHaveProp('activeModuleId', '1');
    });

    it('passes modules', () => {
      const modules = [{ id: '1', title: 'Foo', icon: 'assets' }];
      const wrapper = mount(<Context modules={modules} />);
      expect(wrapper.find(SideNav)).toHaveProp('modules', modules);
    });

    it('passes submodules', () => {
      const submodules = [{ id: 'B', title: 'Foobar', moduleId: '1' }];
      const wrapper = mount(<Context submodules={submodules} />);
      expect(wrapper.find(SideNav)).toHaveProp('submodules', submodules);
    });

    it('passes other side nav props', () => {
      const sideNavProps = {
        headerLabel: 'General Hospital',
        headerLink: 'https://accounts.something.com/general-hospital',
        searchable: true
      };
      const wrapper = mount(<Context sideNav={sideNavProps} />);

      expect(wrapper.find(SideNav)).toHaveProp(
        'headerLabel',
        'General Hospital'
      );
      expect(wrapper.find(SideNav)).toHaveProp(
        'headerLink',
        'https://accounts.something.com/general-hospital'
      );
      expect(wrapper.find(SideNav)).toHaveProp('searchable', true);
    });

    it('passes onModuleChange', () => {
      const callback = jest.fn();
      const wrapper = mount(<Context onModuleChange={callback} />);
      expect(wrapper.find(SideNav)).toHaveProp('onModuleChange', callback);
    });
  });

  describe('for SubNav', () => {
    const modules = [{ id: 'mod-1', title: 'Settings', icon: 'settings' }];
    const submodules = [
      { id: 'sub-1', moduleId: 'mod-1', title: 'Usage' },
      { id: 'sub-2', moduleId: 'mod-1', title: 'Battery' }
    ];

    describe('with an active module', () => {
      describe('with submodules', () => {
        let wrapper;
        beforeEach(() => {
          wrapper = mount(<Context
            modules={modules}
            submodules={submodules}
            activeModuleId="mod-1"
            showSubNav
          />);
        });

        it('passes title to SubNav', () => {
          expect(wrapper.find(SubNav)).toHaveProp(
            'moduleIndicatorName',
            'Settings'
          );
        });

        it('passes icon to SubNav', () => {
          expect(wrapper.find(SubNav)).toHaveProp(
            'moduleIndicatorIcon',
            'settings'
          );
        });

        it('shows a tab for each submodule', () => {
          const tabLabels = wrapper
            .find(TabAdapter)
            .map(tab => tab.prop('label'))
            .sort();
          const submoduleLabels = submodules.map(s => s.title).sort();

          expect(tabLabels).toEqual(submoduleLabels);
        });
      });

      describe('without submodules', () => {
        let wrapper;
        beforeEach(() => {
          wrapper = mount(<Context
            modules={modules}
            submodules={[]}
            activeModuleId="mod-1"
            showSubNav
          />);
        });

        it('passes label to the SubNav', () => {
          expect(wrapper.find(SubNav)).toHaveProp(
            'moduleIndicatorName',
            'Settings'
          );
        });

        it('passes icon to SubNav', () => {
          expect(wrapper.find(SubNav)).toHaveProp(
            'moduleIndicatorIcon',
            'settings'
          );
        });

        it('does not render tabs', () => {
          expect(wrapper.find(Tabs).length).toEqual(0);
        });
      });
    });

    describe('with an active submodule', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(<Context
          modules={modules}
          submodules={submodules}
          activeModuleId="sub-1"
          showSubNav
        />);
      });

      it('passes the parents title to SubNav', () => {
        expect(wrapper.find(SubNav)).toHaveProp(
          'moduleIndicatorName',
          'Settings'
        );
      });

      it('passes the parents icon to SubNav', () => {
        expect(wrapper.find(SubNav)).toHaveProp('moduleIndicatorIcon', 'settings');
      });

      it('shows a tab for each sibling submodule', () => {
        const tabLabels = wrapper
          .find(TabAdapter)
          .map(tab => tab.prop('label'))
          .sort();
        const submoduleLabels = submodules.map(s => s.title).sort();

        expect(tabLabels).toEqual(submoduleLabels);
      });

      describe('with flag for SubNav', () => {
        beforeEach(() => {
          wrapper = mount(<Context
            modules={modules}
            submodules={submodules}
            activeModuleId="mod-1"
            showSubNav={false}
          />);
        });

        it('does not render SubNave', () => {
          expect(wrapper.find(SubNav).length).toEqual(0);
        });
      });
    });
  });
});
