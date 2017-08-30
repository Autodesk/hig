import React, { Component } from 'react';
import { mount } from 'enzyme';

import ProjectAccountSwitcher from './ProjectAccountSwitcher';
import GlobalNavAdapter from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNavAdapter from '../../../../adapters/GlobalNav/TopNav/TopNavAdapter';

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
    describe('with just one account', () => {
      pending('does not show the caret');
      pending('does not add click handlers');
    });

    describe('with just one project', () => {
      pending('does not show the caret');
      pending('does not pass click handlers');
    });

    describe('with more than one account', () => {
      pending('shows the caret');
      pending('passes click handlers');
    });

    describe('with more than one project', () => {
      pending('shows the caret');
      pending('passes click handlers');
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