import React, { Component } from 'react';
import PropTypes from 'prop-types';

import GlobalNavAdapter from '../../../adapters/GlobalNav/GlobalNavAdapter';
import TopNavAdapter from '../../../adapters/GlobalNav/TopNav/TopNavAdapter';
import SubNavAdapter from '../../../adapters/GlobalNav/SubNav/SubNavAdapter';
import SideNav from './SideNav';
import Slot from './Slot';
import Tabs from './SubNav/Tabs';
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
      accounts: PropTypes.any,
      projects: PropTypes.any,
      projectTitle: PropTypes.string,
      accountTitle: PropTypes.string,
      onProjectClick: PropTypes.func,
      onAccountClick: PropTypes.func,
      activeProjectId: PropTypes.any,
      activeAccountId: PropTypes.any,
    }),
    
    showSubNav: PropTypes.bool
  }

  static defaultProps = {
    modules: [],
    submodules: []
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

  renderedActiveModule() {
    const activeSubmodule = this.props.submodules.find(s => s.id === this.props.activeModuleId) || {};
    const activeModule = this.props.modules.find(m => m.id === activeSubmodule.moduleId || m.id === this.props.activeModuleId);

    if (activeModule === undefined) {
      return null;
    }

    activeModule.submodules = this.props.submodules.filter(s => s.moduleId === activeModule.id);
    return activeModule;
  }

  showProjectAccountSwitcher(){
   return ( this.props.topNav.accounts && this.props.topNav.accounts.length > 0 || this.props.topNav.projects && this.props.topNav.projects.length > 0)
  }

  renderTab = (submodule) => {
    return (
      <Tabs.Tab
        id={submodule.id}
        label={submodule.title}
        key={submodule.id}
      />
    );
  }

  render() {
    const activeModule = this.renderedActiveModule();

    return (
      <GlobalNavAdapter sideNavOpen={this.renderedSideNavOpen()} >
        <TopNavAdapter
          onHamburgerClick={this.toggleSideNavOpen}
          {...this.props.topNav}
        >
        {this.showProjectAccountSwitcher() 
          ? <ProjectAccountSwitcher
              accounts={this.props.topNav.accounts}
              projects={this.props.topNav.projects}
              accountTitle={this.props.topNav.accountTitle}
              projectTitle={this.props.topNav.projectTitle}
              activeProjectId={this.props.topNav.activeProjectId}
              activeAccountId={this.props.topNav.activeAccountId}
              onProjectClick={this.props.topNav.onProjectClick}
              onAccountClick={this.props.topNav.onAccountClick}
            />
          : null}
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
        {activeModule && this.props.showSubNav
          ? <SubNavAdapter
              moduleIndicatorName={activeModule.title}
              moduleIndicatorIcon={activeModule.icon}
            >
              {activeModule.submodules.length > 0
                ? <Tabs
                    selectedTabId={this.props.activeModuleId}
                    onChange={this.props.onModuleChange}
                    >
                      {activeModule.submodules.map(this.renderTab)}
                  </Tabs>
                : null}
            </SubNavAdapter>
          : null}
        {this.props.children
          ? <Slot>{this.props.children}</Slot>
          : null}
      </GlobalNavAdapter>
    )
  }
}

export default GlobalNav;

