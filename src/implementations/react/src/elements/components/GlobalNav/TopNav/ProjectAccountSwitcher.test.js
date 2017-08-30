import React, { Component } from 'react';
import { mount } from 'enzyme';

import ProjectAccountSwitcher from './ProjectAccountSwitcher';
import GlobalNavAdapter from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNavAdapter from '../../../../adapters/GlobalNav/TopNav/TopNavAdapter';
import ProjectAccountSwitcherAdapter from '../../../../adapters/GlobalNav/TopNav/ProjectAccountSwitcherAdapter';

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
    describe('with nothing active', () => {
      pending('???');
    });

    describe('with an account active', () => {
      pending('passes the account label');
      pending('passes the account image');
      pending('passes the account type');
    });

    describe('with a project active', () => {
      pending('passes the project label');
      pending('passes the project image');
      pending('passes the project type');
    });

    describe('with an account and project active', () => {
      pending('passes a blended label');
      pending('passes the project image');
      pending('passes the project type');
    });
  });

  describe('passing props', () => {
    pending('passes projects');
    pending('passes accounts');
  });
});
