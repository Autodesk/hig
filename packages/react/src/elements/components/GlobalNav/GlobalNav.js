import React, { Component } from "react";
import PropTypes from "prop-types";

import GlobalNavAdapter from "../../../adapters/GlobalNav/GlobalNavAdapter";
import TopNavAdapter from "../../../adapters/GlobalNav/TopNav/TopNavAdapter";
import Search from "./TopNav/Search";
import SubNavAdapter from "../../../adapters/GlobalNav/SubNav/SubNavAdapter";
import HelpAdapter from "../../../adapters/GlobalNav/TopNav/HelpAdapter";
import GroupAdapter from "../../../adapters/GlobalNav/TopNav/GroupAdapter";
import OptionAdapter from "../../../adapters/GlobalNav/TopNav/OptionAdapter";
import SideNav from "./SideNav";
import Tabs from "./SubNav/Tabs";
import ProjectAccountSwitcher from "./TopNav/ProjectAccountSwitcher";
import Notifications from "./TopNav/Notifications";
import Notification from "./TopNav/Notification";

export default class GlobalNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: this.props.sideNavOpenByDefault || false
    };
  }

  handleHamburgerClick = event => {
    this.props.onHamburgerClick(event);
    this.setState({ sideNavOpen: !this.state.sideNavOpen });
  };

  showProjectAccountSwitcher() {
    const topNav = this.props.topNav || {};
    const projectAccountSwitcher = topNav.projectAccountSwitcher || {};
    const accounts = projectAccountSwitcher.accounts || [];
    const projects = projectAccountSwitcher.projects || [];
    return accounts.length > 0 || projects.length > 0;
  }

  showHelp() {
    return (
      this.props.topNav.help &&
      this.props.topNav.help.groups &&
      this.props.topNav.help.groups.length > 0
    );
  }

  showNotifications() {
    return (
      this.props.topNav.notifications &&
      this.props.topNav.notifications.notifications
    );
  }

  renderedSideNavOpen() {
    if (this.props.sideNavOpen !== undefined) {
      return this.props.sideNavOpen;
    }
    return this.state.sideNavOpen;
  }

  renderedActiveModule() {
    const activeSubmodule =
      this.props.submodules.find(s => s.id === this.props.activeModuleId) || {};
    const activeModule = this.props.modules.find(
      m =>
        m.id === activeSubmodule.moduleId || m.id === this.props.activeModuleId
    );

    if (activeModule === undefined) {
      return null;
    }

    activeModule.submodules = this.props.submodules.filter(
      s => s.moduleId === activeModule.id
    );
    return activeModule;
  }

  renderTab = submodule => (
    <Tabs.Tab id={submodule.id} label={submodule.title} key={submodule.id} />
  );

  /* eslint-disable react/no-array-index-key */
  render() {
    const activeModule = this.renderedActiveModule();

    return (
      <div>
        <GlobalNavAdapter sideNavOpen={this.renderedSideNavOpen()}>
          <TopNavAdapter
            onHamburgerClick={this.handleHamburgerClick}
            {...this.props.topNav}
          >
            <Search
              options={this.props.topNav.searchOptions}
              onInput={this.props.topNav.onSearchInput}
              onSubmit={this.props.topNav.onSearchSubmit}
              value={this.props.topNav.searchValue}
            />
            {this.showProjectAccountSwitcher() ? (
              <ProjectAccountSwitcher
                {...this.props.topNav.projectAccountSwitcher}
              />
            ) : null}
            {this.showHelp() ? (
              <HelpAdapter {...this.props.topNav.help}>
                {(this.props.topNav.help.groups || []).map((groupProps, i) => (
                  <GroupAdapter key={i} {...groupProps}>
                    {(groupProps.options || []).map(optionProps => (
                      <OptionAdapter key={optionProps.name} {...optionProps} />
                    ))}
                  </GroupAdapter>
                ))}
              </HelpAdapter>
            ) : null}
            {this.showNotifications() ? (
              <Notifications {...this.props.topNav.notifications}>
                {(this.props.topNav.notifications.notifications || []).map(
                  notificationProps => (
                    <Notification
                      unread={notificationProps.unread}
                      key={notificationProps.id}
                      onLinkClick={notificationProps.onLinkClick}
                      id={notificationProps.id}
                      title={notificationProps.title}
                    >
                      {notificationProps.children
                        ? notificationProps.children
                        : null}
                    </Notification>
                  )
                )}
              </Notifications>
            ) : null}
          </TopNavAdapter>
          <SideNav
            activeModuleId={this.props.activeModuleId}
            modules={this.props.modules}
            onModuleChange={this.props.onModuleChange}
            submodules={this.props.submodules}
            {...this.props.sideNav}
          />
          {activeModule && this.props.showSubNav ? (
            <SubNavAdapter
              moduleIndicatorName={activeModule.title}
              moduleIndicatorIcon={activeModule.icon}
            >
              {activeModule.submodules.length > 0 ? (
                <Tabs
                  selectedTabId={this.props.activeModuleId}
                  onChange={this.props.onModuleChange}
                >
                  {activeModule.submodules.map(this.renderTab)}
                </Tabs>
              ) : null}
            </SubNavAdapter>
          ) : null}
          {this.props.children ? this.props.children : null}
        </GlobalNavAdapter>
      </div>
    );
  }
  /* eslint-enable react/no-array-index-key */
}

GlobalNav.propTypes = {
  /**
   * Id of the active module or submodule
   */
  activeModuleId: PropTypes.string,
  /**
   * Page content
   */
  children: PropTypes.node,
  /**
   * Called when the user clicks on the 'hamburger' button in order to toggle the menu
   */
  onHamburgerClick: PropTypes.func,
  /**
   * Called when the user selects a module or submodule
   */
  onModuleChange: PropTypes.func.isRequired,
  /**
   * When true, shows the Subnav below the Topnav
   */
  showSubNav: PropTypes.bool,
  /**
   * When true, Sidenav is open
   */
  sideNavOpen: PropTypes.bool,
  /**
   * Initial open state of the side nav, user actions will override
   */
  sideNavOpenByDefault: PropTypes.bool,
  /**
   * A list of modules to appear in the sidenav
   */
  modules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  /**
   * A list of submodules to appear in the sidenav
   */
  submodules: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ),
  /**
   * Options to configure the Topnav
   */
  topNav: PropTypes.shape({
    logo: PropTypes.string,
    logoLink: PropTypes.string,
    projectAccountSwitcher: PropTypes.shape({
      accounts: PropTypes.array,
      projects: PropTypes.array,
      projectTitle: PropTypes.string,
      accountTitle: PropTypes.string,
      onProjectClick: PropTypes.func,
      onAccountClick: PropTypes.func,
      activeProjectId: PropTypes.string,
      activeAccountId: PropTypes.string
    }),
    help: PropTypes.shape({
      groups: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string
        })
      )
    })
  }),
  /**
   * Options to configure the Sidenav
   */
  sideNav: PropTypes.shape({
    copyright: PropTypes.string,
    headerLabel: PropTypes.string,
    headerLink: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.object),
    onHeaderClick: PropTypes.func,
    onSuperHeaderClick: PropTypes.func,
    superHeaderLabel: PropTypes.string,
    superHeaderLink: PropTypes.string
  })
};

GlobalNav.defaultProps = {
  modules: [],
  submodules: [],
  topNav: {},
  sideNav: {},
  onHamburgerClick: () => {}
};
