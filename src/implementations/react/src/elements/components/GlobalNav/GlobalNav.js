import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GlobalNavAdapter from '../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNavAdapter from '../../../adapters/GlobalNav/TopNav/TopNavAdapter';
import SubNavAdapter from '../../../adapters/GlobalNav/SubNav/SubNavAdapter';
import SideNav from './SideNav';
import Slot from './Slot';
import ProjectAccountSwitcher from './TopNav/ProjectAccountSwitcher';

class GlobalNav extends Component {
  static propTypes = {
    sideNav: PropTypes.shape({
      copyright: PropTypes.string,
      headerLabel: PropTypes.string,
      headerLink: PropTypes.string,
      links: PropTypes.arrayOf(PropTypes.object),
      onHeaderClick: PropTypes.func,
      onSuperHeaderClick: PropTypes.func,
      superHeaderLabel: PropTypes.string,
      superHeaderLink: PropTypes.string,
    }),
    onModuleChange: PropTypes.func.isRequired,
    modules: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      }),
    ),
    submodules: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })),
    topNav: PropTypes.shape({
      logo: PropTypes.string,
      logoLink: PropTypes.string,
    }),
    accounts: PropTypes.any,
    projects: PropTypes.any,
    activeProjectId: PropTypes.any,
    activeAccountId: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleSideNavOpen = () => {
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
  }

  renderedSideNavOpen() {
    if(this.props.sideNavOpen !== undefined) {
      return this.props.sideNavOpen;
    }
    return this.state.sideNavOpen;
  }

  render() {
    return (
      <GlobalNavAdapter sideNavOpen={this.renderedSideNavOpen()}>
        <TopNavAdapter
          onHamburgerClick={this.toggleSideNavOpen}
          {...this.props.topNav}
        >
          <ProjectAccountSwitcher
            accounts={this.props.accounts}
            projects={this.props.projects}
            activeProjectId={this.props.activeProjectId}
            activeAccountId={this.props.activeAccountId}
          />
        </TopNavAdapter>
        <SideNav
          activeModuleId={this.props.activeModuleId}
          activeSubmoduleId={this.props.activeSubmoduleId}
          modules={this.props.modules}
          onModuleChange={this.props.onModuleChange}
          onSubmoduleChange={this.props.onSubmoduleChange}
          submodules={this.props.submodules}
          {...this.props.sideNav}
        />
        <SubNavAdapter />
        {this.props.children
          ? <Slot>{this.props.children}</Slot>
          : null}
      </GlobalNavAdapter>
    )
  }
}

export default GlobalNav;

