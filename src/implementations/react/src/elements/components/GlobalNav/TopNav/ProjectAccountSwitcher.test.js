import React, { Component } from 'react';
import { mount } from 'enzyme';

import ProjectAccountSwitcher from './ProjectAccountSwitcher';
import Project from './Project';
import Account from './Account';
import GlobalNavAdapter from '../../../../adapters/GlobalNav/NewGlobalNavAdapter';
import TopNavAdapter from '../../../../adapters/GlobalNav/TopNav/NewTopNavAdapter';
import ProjectAccountSwitcherAdapter from '../../../../adapters/GlobalNav/TopNav/NewProjectAccountSwitcherAdapter';

class Context extends Component {
  static defaultProps = {
    accounts: [],
    projects: []
  }

  render() {
    return (
      <GlobalNavAdapter>
        <TopNavAdapter>
          <ProjectAccountSwitcher {...this.props} />
        </TopNavAdapter>
      </GlobalNavAdapter>
    )
  }
}

describe('<ProjectAccountSwitcher>', () => {
  describe('configuring the flyout', () => {
    let wrapper;

    describe('with just one account', () => {

      beforeEach(() => {
        const accounts= [
          { id: '1', label: 'My account' }
        ];
        wrapper = mount(<Context accounts={accounts} />);
      });

      it('does not show the caret', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).not.toHaveProp('showCaret');
      });

      it('does not add click handlers', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).not.toHaveProp('onClick');
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).not.toHaveProp('onClickOutside');
      });
    });

    describe('with just one project', () => {

      beforeEach(() => {
        const projects= [
          { id: '1', label: 'My project' }
        ];
        wrapper = mount(<Context projects={projects} />);
      });

      it('does not show the caret', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).not.toHaveProp('showCaret');
      });

      it('does not add click handlers', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).not.toHaveProp('onClick');
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).not.toHaveProp('onClickOutside');
      });
    });

    describe('with more than one account', () => {
      beforeEach(() => {
        const accounts= [
          { id: '1', label: 'My account' },
          { id: '2', label: 'Another account' }
        ];
        wrapper = mount(<Context accounts={accounts} />);
      });

      it('shows the caret', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('showCaret', true);
      });

      it('passes click handlers', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter).prop('onClick')).toBeInstanceOf(Function)
        expect(wrapper.find(ProjectAccountSwitcherAdapter).prop('onClickOutside')).toBeInstanceOf(Function)
      });
    });

    describe('with more than one project', () => {

      beforeEach(() => {
        const projects= [
          { id: '1', label: 'My project' },
          { id: '2', label: 'Another project' }
        ];
        wrapper = mount(<Context projects={projects} />);
      });

      it('shows the caret', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('showCaret', true);
      });

      it('passes click handlers', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter).prop('onClick')).toBeInstanceOf(Function)
        expect(wrapper.find(ProjectAccountSwitcherAdapter).prop('onClickOutside')).toBeInstanceOf(Function)
      });
    });
  });

  describe('showing the active item', () => {
    const accounts = [
      { id: '1', label: 'Global Construction', image: '/images/accounts/1.png' },
      { id: '2', label: 'HDR Remodelling', image: '/images/accounts/2.png' }
    ];
    const projects = [
      { id: 'A', label: 'General Hospital', image: '/images/projects/A.png' },
      { id: 'B', label: 'Rinky-Dink Rollerrink', image: '/images/projects/B.png' }
    ];

    describe('with nothing active', () => {
      it('activates the first project, account, or both', () => {
        const wrapper = mount(<Context accounts={accounts} projects={projects} />);
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeLabel', 'Global Construction / General Hospital');
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeImage', '/images/projects/A.png');
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeType', 'project');
      });
    });

    describe('with an account active', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(<Context accounts={accounts} projects={[]} activeAccountId="1" />);
      });

      it('passes the account label', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeLabel', 'Global Construction');
      });

      it('passes the account image', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeImage', '/images/accounts/1.png');
      });

      it('passes the account type', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeType', 'account');
      });
    });

    describe('with a project active', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(<Context accounts={[]} projects={projects} activeAccountId="1" />);
      });

      it('passes the project label', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeLabel', 'General Hospital');
      });

      it('passes the project image', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeImage', '/images/projects/A.png');
      });

      it('passes the project type', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeType', 'project');
      });
    });

    describe('with an account and project active', () => {
      let wrapper;
      beforeEach(() => {
        wrapper = mount(<Context accounts={accounts} projects={projects} activeAccountId="1" />);
      });

      it('passes a blended label', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeLabel', 'Global Construction / General Hospital');
      });

      it('passes the project image', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeImage', '/images/projects/A.png');
      });

      it('passes the project type', () => {
        expect(wrapper.find(ProjectAccountSwitcherAdapter)).toHaveProp('activeType', 'project');
      });
    });
  });

  describe('passing props', () => {
    let wrapper;
    const accounts = [
      { id: '1', label: 'Global Construction', image: '/images/accounts/1.png' },
      { id: '2', label: 'HDR Remodelling', image: '/images/accounts/2.png' }
    ];
    const projects = [
      { id: 'A', label: 'General Hospital', image: '/images/projects/A.png' },
      { id: 'B', label: 'Rinky-Dink Rollerrink', image: '/images/projects/B.png' }
    ];

    beforeEach(() => {
      wrapper = mount(<Context projects={projects} accounts={accounts} />);
    });

    it('passes projects', () => {
      expect(wrapper.find(Project).at(0)).toHaveProp('label', 'General Hospital');
      expect(wrapper.find(Project).at(1)).toHaveProp('label', 'Rinky-Dink Rollerrink');
    });

    it('passes accounts', () => {
      expect(wrapper.find(Account).at(0)).toHaveProp('label', 'Global Construction');
      expect(wrapper.find(Account).at(1)).toHaveProp('label', 'HDR Remodelling');
    });

    it('sets click listener on an account', () => {
      expect(wrapper.find(Account).first().prop('onClick')).toBeInstanceOf(Function);
    });

    it('sets click listener on an project', () => {
      expect(wrapper.find(Project).first().prop('onClick')).toBeInstanceOf(Function);
    });
  });

});
