/**
Copyright 2016 Autodesk,Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Button, GlobalNav } from './react-hig';

import 'hig.web/dist/hig.css';
import './index.css';

import logo from './images/bim-logo.png';
import profileImage from './images/profileImage.png';
import TopNavFixtures from './fixtures/topNavFixtures';

const SideNav = GlobalNav.SideNav;
const Search = GlobalNav.SideNav.Search;
const SectionList = GlobalNav.SideNav.SectionList;
const Section = GlobalNav.SideNav.SectionList.Section;
const Group = GlobalNav.SideNav.SectionList.Section.Group;
const Module = GlobalNav.SideNav.SectionList.Section.Group.Module;
const Submodule = GlobalNav.SideNav.SectionList.Section.Group.Module.Submodule;
const TopNav = GlobalNav.TopNav;
const Profile = GlobalNav.TopNav.Profile;
const Shortcut = GlobalNav.TopNav.Shortcut;
const Help = GlobalNav.TopNav.Help;
const ProjectAccountSwitcher = GlobalNav.TopNav.ProjectAccountSwitcher;
const Account = GlobalNav.TopNav.ProjectAccountSwitcher.Account;
const Project = GlobalNav.TopNav.ProjectAccountSwitcher.Project;
const TopNavSearch = GlobalNav.TopNav.Search;
const SubNav = GlobalNav.SubNav;
const Tabs = GlobalNav.SubNav.Tabs;
const Tab = GlobalNav.SubNav.Tabs.Tab;
const Slot = GlobalNav.Slot;

const topNavFixtures = new TopNavFixtures();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonLabel: 'Toggle HIG Menu',
      fn: false,
      group1: true,
      group3: true,
      open: false,
      profileFlyoutOpen: false,
      activeTab: 0,
      activeProjectOrAccount: 0,
      projectOrAcccountTarget: topNavFixtures.accountList()[0] ||
        topNavFixtures.projectList()[0],
      tabs: [{ label: 'One', id: 0 }, { label: 'Two', id: 1 }],
      searchPlaceholder: 'search for...',
      projects: topNavFixtures.projectList(),
      accounts: topNavFixtures.accountList()
    };
  }

  handleChange = event => {
    const buttonLabel = event.target.value;
    this.setState(() => {
      return { buttonLabel };
    });
  };

  handleInputChange = event => {
    console.log("I'm listening to an input change");
  };

  toggleSideNav = event => {
    this.setState({ open: !this.state.open });
  };

  openProfileFlyout = event => {
    this.setState({ profileFlyoutOpen: true });
  };

  closeProfileFlyout = event => {
    this.setState({ profileFlyoutOpen: false });
  };

  profileSignOutClick = event => {
    console.log('Profile Sign Out button clicked!');
  };

  addTabBefore = () => {
    const nextLabel = Math.floor(Math.random() * 100000, 5);
    const nextTabs = Array.from(this.state.tabs);
    nextTabs.unshift({ label: nextLabel.toString(), id: nextLabel });
    this.setState({ tabs: nextTabs });
  };

  addTabAfter = () => {
    const nextLabel = Math.floor(Math.random() * 100000, 5);
    const nextTabs = Array.from(this.state.tabs);
    nextTabs.push({ label: nextLabel.toString(), id: nextLabel });
    this.setState({ tabs: nextTabs });
  };

  removeTab = () => {
    const nextTabs = Array.from(this.state.tabs);
    nextTabs.pop();
    this.setState({ tabs: nextTabs });
  };

  setActiveTab = activeTabIndex => {
    this.setState({ activeTab: activeTabIndex });
  };

  setActiveProjectOrAccount = activeProjectOrAccountItem => {
    this.setState({ activeProjectOrAccount: activeProjectOrAccountItem.id });
    this.setProjectOrAccountTarget(activeProjectOrAccountItem);
  };

  setProjectOrAccountTarget = targetItem => {
    if (targetItem.type === 'account') {
      this.state.accounts.forEach(
        function(account) {
          if (account.id === targetItem.id) {
            this.setState({ projectOrAcccountTarget: account });
          }
        }.bind(this)
      );
    }

    if (targetItem.type === 'project') {
      this.state.projects.forEach(
        function(project) {
          if (project.id === targetItem.id) {
            this.setState({ projectOrAcccountTarget: project });
          }
        }.bind(this)
      );
    }
  };

  singleProjectOrAccount = () => {
    // one of these is empty/undefined and the other has only one item
    var projectsIsEmpty = this.state.projects === undefined ||
      this.state.projects.length === 0;
    var accountsIsEmpty = this.state.accounts === undefined ||
      this.state.accounts.length === 0;
    if (projectsIsEmpty && !accountsIsEmpty) {
      var accountsHasOneItem = this.state.accounts.length === 1;
    } else if (!projectsIsEmpty && accountsIsEmpty) {
      var projectsHasOneItem = this.state.projects.length === 1;
    } else {
      accountsHasOneItem = (projectsHasOneItem = false);
    }
    if (accountsHasOneItem || projectsHasOneItem) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div>
        <GlobalNav sideNavOpen={this.state.open}>
          <SideNav>
            <SectionList>
              <Section headerLabel="Project" headerName="ThunderStorm">
                {topNavFixtures.menu().sections[0].groups.map((group, i) => {
                  return <Group key={i}>
                    {group.modules.map(module => {
                      return <Module
                        icon={module.icon}
                        contentImage={module.contentImage}
                        title={module.label}
                        key={module.label}
                      >
                        {module.submodules.map(submodule => {
                          return <Submodule
                            title={submodule.label}
                            link="#"
                            key={submodule.label}
                          />
                        })}
                      </Module>
                    })}
                  </Group>
                })}
              </Section>
              <Section headerLabel="Account" headerName="GlobalConstruction">
                {topNavFixtures.menu().sections[1].groups.map((group, i) => {
                  return <Group key={i}>
                    {group.modules.map(module => {
                      return <Module
                        icon={module.icon}
                        contentImage={module.contentImage}
                        title={module.label}
                        key={module.label}
                      >
                        {module.submodules.map(submodule => {
                          return <Submodule
                            title={submodule.label}
                            link="#"
                            key={submodule.label}
                          />
                        })}
                      </Module>
                    })}
                  </Group>
                })}
              </Section>

            </SectionList>
             <Search placeholder="Find module or submodule" />
          </SideNav>
          <TopNav
            logo={logo}
            logoLink="http://autodesk.com"
            onHamburgerClick={this.toggleSideNav}
          >
            {this.singleProjectOrAccount()
              ? <ProjectAccountSwitcher
                  activeLabel={this.state.projectOrAcccountTarget.label}
                  activeImage={this.state.projectOrAcccountTarget.image}
                  activeType={this.state.projectOrAcccountTarget.type}
                  hideProjectAccountFlyout={true}
                />
              : <ProjectAccountSwitcher
                  activeLabel={this.state.projectOrAcccountTarget.label}
                  activeImage={this.state.projectOrAcccountTarget.image}
                  activeType={this.state.projectOrAcccountTarget.type}
                  hideProjectAccountFlyout={false}
                >
                  {this.state.projects.map((project, i) => {
                    return (
                      <Project
                        image={project.image}
                        label={project.label}
                        key={project.id}
                        active={
                          this.state.activeProjectOrAccount === project.id
                        }
                        onClick={this.setActiveProjectOrAccount.bind(this, {
                          id: project.id,
                          type: project.type
                        })}
                      />
                    );
                  })}
                  {this.state.accounts.map((account, i) => {
                    return (
                      <Account
                        image={account.image}
                        label={account.label}
                        key={account.id}
                        active={
                          this.state.activeProjectOrAccount === account.id
                        }
                        onClick={this.setActiveProjectOrAccount.bind(this, {
                          id: account.id,
                          type: account.type
                        })}
                      />
                    );
                  })}
                </ProjectAccountSwitcher>}

            <Shortcut icon="gear" title="Gears for Fears" link="/gears" />

            <Help title="HELLLP MEEEE!!!!" link="/help" />

            <Profile
              open={this.state.profileFlyoutOpen}
              image={profileImage}
              signOutLabel="Sign Off"
              profileSettingsLabel="Preferences"
              profileSettingsLink="http://www.autodesk.com"
              onProfileImageClick={this.openProfileFlyout}
              onProfileClickOutside={this.closeProfileFlyout}
              onSignOutClick={this.profileSignOutClick}
              name="Jane Doe"
              email="jane.doe@example.com"
            />

            <TopNavSearch
              placeholder={this.state.searchPlaceholder}
              onInput={this.handleInputChange}
            />

          </TopNav>
          <SubNav
            moduleIndicatorName="Documents Library"
            moduleIndicatorIcon="hamburger"
          >
            <Tabs>
              {this.state.tabs.map((tab, i) => {
                return (
                  <Tab
                    key={tab.id}
                    label={tab.label}
                    active={this.state.activeTab === tab.id}
                    onClick={this.setActiveTab.bind(this, tab.id)}
                  />
                );
              })}
            </Tabs>
          </SubNav>

          <Slot>

            <input
              type="text"
              value={this.state.buttonLabel}
              onChange={this.handleChange}
            />

            <Button title="Add tab before" onClick={this.addTabBefore} />
            <Button title="Add tab after" onClick={this.addTabAfter} />
            <Button title="Remove tab" onClick={this.removeTab} />

            {topNavFixtures.hipsterContent().map((paragraph, i) => {
              return <p key={i} >{paragraph}</p>;
            })}
          </Slot>
        </GlobalNav>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
