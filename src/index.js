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
import project1 from './images/project-1.png';
import project2 from './images/project-2.png';
import project3 from './images/project-3.png';
import project4 from './images/project-4.png';

import profileImage from './images/profileImage.png';

const SideNav = GlobalNav.SideNav;
const SectionList = GlobalNav.SideNav.SectionList;
const Section = GlobalNav.SideNav.SectionList.Section;
const Collapse = GlobalNav.SideNav.SectionList.Section.Collapse;
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
const SubNav = GlobalNav.SubNav;
const Tabs = GlobalNav.SubNav.Tabs;
const Tab = GlobalNav.SubNav.Tabs.Tab;
const Slot = GlobalNav.Slot;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      buttonLabel: 'Toggle HIG Menu',
      fn: false,
      group1: true,
      group3: true,
      section1Collapsed: true,
      section2Collapsed: true,
      open: false,
      profileFlyoutOpen: false,
      activeTab: 0,
      activeProjectOrAccount: 0,
      projectOrAcccountTarget: this.accountList()[0] || this.projectList()[0],
      tabs: [{ label: 'One', id: 0 }, { label: 'Two', id: 1 }],
      projects: this.projectList(),
      accounts: this.accountList()
    };
  }

  handleChange = event => {
    const buttonLabel = event.target.value;
    this.setState(() => {
      return { buttonLabel };
    });
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

  fn1 = () => this.setState({ fn: true });

  fn2 = () => this.setState({ fn: false });
  toggleGroup1 = () => this.setState({ group1: !this.state.group1 });

  toggleGroup3 = () => this.setState({ group3: !this.state.group3 });

  toggleSection1 = () =>
    this.setState({ section1Collapsed: !this.state.section1Collapsed });

  toggleSection2 = () =>
    this.setState({ section2Collapsed: !this.state.section2Collapsed });

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

  projectList = () => {
    return [
      {
        label: 'Oakwood Medical Center',
        image: project2,
        id: 0,
        type: 'project'
      },
      {
        label: 'Colorado Myrtle Shield Apartments',
        image: project3,
        id: 2,
        type: 'project'
      },
      {
        label: 'Grey Pillars',
        image: project4,
        id: 4,
        type: 'project'
      },
      {
        label: 'Keystone Apartments',
        id: 6,
        type: 'project'
      },
      {
        label: 'Pleasant Park',
        image: project1,
        id: 8,
        type: 'project'
      }
    ];
  };

  accountList = () => {
    return [
      {
        label: 'Oakwood Medical Center',
        image: project1,
        id: 1,
        type: 'account'
      },
      {
        label: 'Colorado Myrtle Shield Apartments',
        image: project2,
        id: 3,
        type: 'account'
      },
      {
        label: 'Grey Pillars',
        image: project3,
        id: 5,
        type: 'account'
      },
      {
        label: 'Keystone Apartments',
        id: 7,
        type: 'account'
      },
      {
        label: 'Pleasant Park',
        image: project4,
        id: 9,
        type: 'account'
      }
    ];
  };

  menu = () => {
    return {
      sections: [
        {
          label: 'Project',
          name: 'Oakwood Medical Center',
          groups: [
            {
              modules: [
                {
                  icon: 'insight',
                  label: 'Insight',
                  submodules: [
                    {
                      label: 'Overview',
                      contentImage: 'content/Oakwood__Insight__Overview@2x.png'
                    },
                    {
                      label: 'Risk',
                      contentImage: 'content/Oakwood__Insight__Risk@2x.png'
                    },
                    {
                      label: 'Quality',
                      contentImage: 'content/Oakwood__Insight__Quality@2x.png'
                    },
                    {
                      label: 'Reports',
                      contentImage: 'content/Oakwood__Insight__Reports@2x.png'
                    }
                  ]
                }
              ]
            },
            {
              // end group 1
              modules: [
                {
                  icon: 'construction-management',
                  label: 'Authoring Collaboration',
                  submodules: [
                    {
                      label: 'Cloud Work Sharing',
                      contentImage: 'content/Oakwood__AuthoringCollaboration__CloudWorkSharing@2x.png'
                    },
                    {
                      label: 'Fluent',
                      contentImage: 'content/Oakwood__AuthoringCollaboration__Fluent@2x.png'
                    },
                    {
                      label: 'Approvals',
                      contentImage: 'content/Oakwood__AuthoringCollaboration__Approvals@2x.png'
                    }
                  ]
                },
                {
                  icon: 'document-management',
                  label: 'Document Management',
                  submodules: [
                    {
                      type: 'submodule',
                      label: 'Document Workflow',
                      contentImage: 'content/Oakwood__DocumentManagement__DocumentWorkflow@2x.png'
                    }
                  ]
                },
                {
                  icon: 'placeholder',
                  label: 'Model Coordination',
                  submodules: [
                    {
                      label: 'Overview',
                      contentImage: 'content/Oakwood__ModelCoordination__Overview@2x.png'
                    },
                    {
                      label: 'Models',
                      contentImage: 'content/Oakwood__ModelCoordination__Models@2x.png'
                    },
                    {
                      label: 'Checklists',
                      contentImage: 'content/Oakwood__ModelCoordination__Checklists@2x.png'
                    },
                    {
                      label: 'Clashes',
                      contentImage: 'content/Oakwood__ModelCoordination__Clashes@2x.png'
                    },
                    {
                      label: 'Issues',
                      contentImage: 'content/Oakwood__ModelCoordination__Issues@2x.png'
                    }
                  ]
                },
                {
                  icon: 'project-management',
                  label: 'Project Management',
                  submodules: [
                    {
                      label: 'RFIs',
                      contentImage: 'content/Oakwood__ProjectManagement__RFIs@2x.png'
                    },
                    {
                      label: 'Submittals',
                      contentImage: 'content/Oakwood__ProjectManagement__Submittals@2x.png'
                    },
                    {
                      label: 'Daily Log',
                      contentImage: 'content/Oakwood__ProjectManagement__DailyLog@2x.png'
                    }
                  ]
                },
                {
                  icon: 'quantities',
                  label: 'Quantities',
                  submodules: [
                    {
                      label: '2D',
                      contentImage: 'content/Oakwood__Quantities__2D@2x.png'
                    },
                    {
                      label: '3D',
                      contentImage: 'content/Oakwood__Quantities__3D@2x.png'
                    }
                  ]
                },
                {
                  icon: 'cost-control',
                  label: 'Cost Control',
                  submodules: [
                    {
                      label: 'Bid Management',
                      contentImage: 'content/Oakwood__CostControl__BidManagement@2x.png'
                    },
                    {
                      label: 'Estimating',
                      contentImage: 'content/Oakwood__CostControl__Estimating@2x.png'
                    },
                    {
                      label: 'Budget',
                      contentImage: 'content/Oakwood__CostControl__Budget@2x.png'
                    },
                    {
                      label: 'Change Orders',
                      contentImage: 'content/Oakwood__CostControl__ChangeOrders@2x.png'
                    },
                    {
                      label: 'Pay Applications',
                      contentImage: 'content/Oakwood__CostControl__PayApplications@2x.png'
                    }
                  ]
                },
                {
                  icon: 'schedule',
                  label: 'Schedule',
                  submodules: [
                    {
                      label: 'Master Schedule',
                      contentImage: 'content/Oakwood__Schedule__MasterSchedule@2x.png'
                    },
                    {
                      label: 'Production Plan',
                      contentImage: 'content/Oakwood__Schedule__ProductionPlan@2x.png'
                    }
                  ]
                },
                {
                  icon: 'field',
                  label: 'Field',
                  submodules: [
                    {
                      label: 'Quality',
                      contentImage: 'content/Oakwood__Field__Quality@2x.png'
                    },
                    {
                      label: 'Safety',
                      contentImage: 'content/Oakwood__Field__Safety@2x.png'
                    },
                    {
                      label: 'Commissioning',
                      contentImage: 'content/Oakwood__Field__Commissioning@2x.png'
                    },
                    {
                      label: 'Checklists',
                      contentImage: 'content/Oakwood__Field__Checklists@2x.png'
                    },
                    {
                      label: 'Issues',
                      contentImage: 'content/Oakwood__Field__Issues@2x.png'
                    },
                    {
                      label: 'Activities',
                      contentImage: 'content/Oakwood__Field__Activities@2x.png'
                    }
                  ]
                },
                {
                  icon: 'layout',
                  label: 'Layout',
                  contentImage: 'content/Oakwood__Layout@2x.png',
                  submodules: []
                },
                {
                  icon: 'buildingops',
                  label: 'Building Ops',
                  contentImage: 'content/Oakwood__BuildingOps@2x.png',
                  submodules: []
                }
              ]
            },
            {
              // end group 2
              modules: [
                {
                  icon: 'library',
                  label: 'Library',
                  contentImage: 'content/Oakwood__Library@2x.png',
                  submodules: []
                },
                {
                  icon: 'photos',
                  label: 'Photos',
                  contentImage: 'content/Oakwood__Photos@2x.png',
                  submodules: []
                },
                {
                  icon: 'assets',
                  label: 'Assets',
                  contentImage: 'content/Oakwood__Assets@2x.png',
                  submodules: []
                },
                {
                  icon: 'locations',
                  label: 'Location',
                  contentImage: 'content/Oakwood__Locations@2x.png',
                  submodules: []
                }
              ]
            },
            {
              // end group 3
              modules: [
                {
                  icon: 'project-admin',
                  label: 'Project Admin',
                  contentImage: 'content/Oakwood__ProjectAdmin@2x.png',
                  submodules: []
                }
              ]
            }
          ]
        },
        {
          // end section 1
          label: 'Account',
          name: 'Global Construction',
          groups: [
            {
              modules: [
                {
                  icon: 'insight',
                  label: 'Insight',
                  contentImage: 'content/GlobalConstruction__Insight@2x.png',
                  submodules: []
                },
                {
                  icon: 'field',
                  label: 'Field',
                  submodules: [
                    {
                      label: 'Checklists Templates',
                      contentImage: 'content/GlobalConstruction__Field__ChecklistsTemplates@2x.png'
                    },
                    {
                      label: 'Issues Templates',
                      contentImage: 'content/GlobalConstruction__Field__IssuesTemplates@2x.png'
                    }
                  ]
                },
                {
                  icon: 'account-admin',
                  label: 'Account Admin',
                  submodules: [
                    {
                      label: 'Projects',
                      contentImage: 'content/GlobalConstruction__AccountAdmin__Projects@2x.png'
                    },
                    {
                      label: 'Members',
                      contentImage: 'content/GlobalConstruction__AccountAdmin__Members@2x.png'
                    },
                    {
                      label: 'Companies',
                      contentImage: 'content/GlobalConstruction__AccountAdmin__Companies@2x.png'
                    },
                    {
                      label: 'Services',
                      contentImage: 'content/GlobalConstruction__AccountAdmin__Services@2x.png'
                    },
                    {
                      label: 'Analytics',
                      contentImage: 'content/GlobalConstruction__AccountAdmin__Analytics@2x.png'
                    },
                    {
                      label: 'Settings',
                      contentImage: 'content/GlobalConstruction__AccountAdmin__Settings@2x.png'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    };
  };

  render() {
    return (
      <div>
        <GlobalNav sideNavOpen={this.state.open}>
          <SideNav>
            <SectionList>
              <Section headerLabel="Project" headerName="ThunderStorm">
                <Collapse
                  onClick={this.toggleSection1}
                  isCollapsed={this.state.section1Collapsed}
                />
                {this.menu().sections[0].groups.map(
                  function(group, i) {
                    return (
                      <Group key={i}>
                        {group.modules.map(
                          function(module) {
                            return (
                              <Module
                                icon={module.icon}
                                contentImage={module.contentImage}
                                title={module.label}
                                submodulesClosed={this.state.section1Collapsed}
                                key={module.label}
                              >
                                {module.submodules.map(function(submodule) {
                                  return (
                                    <Submodule
                                      title={submodule.label}
                                      link="#"
                                      key={submodule.label}
                                    />
                                  );
                                })}
                              </Module>
                            );
                          }.bind(this)
                        )}
                      </Group>
                    );
                  }.bind(this)
                )}
              </Section>
              <Section headerLabel="Account" headerName="GlobalConstruction">
                <Collapse
                  isCollapsed={this.state.section2Collapsed}
                  onClick={this.toggleSection2}
                />
                {this.menu().sections[1].groups.map(
                  function(group, i) {
                    return (
                      <Group key={i}>
                        {group.modules.map(
                          function(module) {
                            return (
                              <Module
                                icon={module.icon}
                                contentImage={module.contentImage}
                                title={module.label}
                                submodulesClosed={this.state.section2Collapsed}
                                key={module.label}
                              >
                                {module.submodules.map(function(submodule) {
                                  return (
                                    <Submodule
                                      title={submodule.label}
                                      link="#"
                                      key={submodule.label}
                                    />
                                  );
                                })}
                              </Module>
                            );
                          }.bind(this)
                        )}
                      </Group>
                    );
                  }.bind(this)
                )}
              </Section>

            </SectionList>
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

            <p>
              Raw denim flexitarian green juice kinfolk. Umami hammock trust fund everyday carry, woke wolf viral sriracha austin. Fingerstache affogato messenger bag salvia, cray iPhone bushwick blue bottle marfa gentrify dreamcatcher pop-up. Slow-carb etsy enamel pin cronut, raclette post-ironic hashtag. Hoodie dreamcatcher enamel pin lumbersexual before they sold out, authentic selvage tumblr vinyl. Hot chicken chillwave coloring book fixie vice venmo echo park portland. Tote bag master cleanse cronut banjo banh mi pitchfork, celiac photo booth.
            </p>

            <p>
              Next level deep v roof party, jianbing pok pok pug butcher vape farm-to-table kombucha. Yr snackwave VHS, wolf poutine actually woke poke flexitarian paleo food truck DIY kale chips viral yuccie. Cornhole tattooed vaporware affogato, gentrify mlkshk portland organic. Swag try-hard cronut hashtag, etsy bespoke chia banjo messenger bag. Mustache umami godard man braid cronut yuccie. YOLO vaporware franzen, gochujang typewriter mixtape brunch salvia paleo lyft. Four dollar toast tumblr mustache thundercats single-origin coffee, freegan flexitarian cold-pressed beard roof party VHS venmo af ugh bushwick.
            </p>

            <p>
              Ethical man bun shoreditch chambray farm-to-table. Celiac readymade tote bag shabby chic chia, franzen poke meggings pop-up williamsburg VHS. Flexitarian cardigan blog yuccie activated charcoal farm-to-table. Iceland activated charcoal aesthetic, chambray offal snackwave austin four loko stumptown roof party humblebrag. Food truck selfies vexillologist, subway tile direct trade fingerstache tofu biodiesel four dollar toast. Literally squid tattooed jean shorts, raw denim echo park blog mustache skateboard seitan XOXO lo-fi cray hammock shabby chic. Live-edge sustainable pug, pinterest celiac kinfolk wayfarers narwhal art party vegan +1.
            </p>

            Helvetica DIY portland, sriracha selvage wolf beard plaid quinoa vegan flexitarian poke. Semiotics fam scenester, plaid synth listicle flexitarian subway tile. Cred everyday carry pop-up, forage viral tbh tilde mustache roof party leggings gastropub unicorn synth. Brunch hoodie williamsburg, selfies plaid jianbing deep v lomo truffaut meggings dreamcatcher kitsch. Mustache deep v fap hashtag, freegan quinoa blue bottle green juice helvetica pickled cronut. Photo booth 90's microdosing vexillologist roof party stumptown. Viral hella pitchfork, aesthetic intelligentsia godard hoodie plaid migas iPhone mlkshk tumeric keffiyeh.

            <p>
              Banh mi pug fanny pack heirloom portland. Humblebrag selvage forage vape organic beard bicycle rights, fam gentrify live-edge. Vape artisan truffaut, celiac prism XOXO drinking vinegar pour-over vinyl chambray lyft venmo. Tattooed edison bulb air plant hot chicken meggings cold-pressed gastropub, tbh tilde hoodie photo booth leggings. Etsy post-ironic fap you probably haven't heard of them, helvetica synth kinfolk listicle mixtape keytar cold-pressed. 90's put a bird on it yr godard prism kogi, live-edge enamel pin hell of photo booth. Raclette portland humblebrag synth af, fashion axe fingerstache ethical snackwave post-ironic cray.
            </p>
            <p>
              Messenger bag listicle skateboard normcore. Roof party food truck authentic dreamcatcher lumbersexual ramps. Man bun drinking vinegar mixtape, disrupt sartorial cray lumbersexual bicycle rights fam brunch celiac lyft. Hella edison bulb poke thundercats taxidermy twee. Lomo biodiesel la croix, pitchfork normcore prism godard coloring book cornhole locavore helvetica. Everyday carry distillery tousled, bespoke irony chartreuse lumbersexual fixie. Unicorn asymmetrical tacos poke, tote bag disrupt sriracha coloring book.
            </p>

            <p>
              Humblebrag narwhal hammock, cornhole biodiesel lomo vegan twee migas enamel pin iPhone vaporware chicharrones vape wolf. Godard XOXO deep v tbh irony, church-key seitan fixie post-ironic asymmetrical literally put a bird on it. Hell of helvetica cornhole lomo forage. Affogato activated charcoal ugh, +1 vape poutine poke artisan listicle before they sold out brunch prism VHS cronut. Craft beer PBR&B vice, synth XOXO green juice bitters narwhal chicharrones pinterest microdosing intelligentsia wayfarers scenester schlitz. Stumptown synth bicycle rights ugh poke, photo booth quinoa cronut pickled meggings tumeric. Yr wayfarers mustache pitchfork, art party bitters craft beer single-origin coffee.
            </p>

            <p>
              Helvetica keytar leggings beard single-origin coffee, mustache organic pabst lumbersexual chartreuse art party waistcoat wolf mixtape 8-bit. Craft beer meggings subway tile hashtag, put a bird on it portland 8-bit cardigan knausgaard. Snackwave try-hard dreamcatcher, XOXO freegan iceland kinfolk readymade microdosing typewriter vegan vinyl live-edge hella direct trade. Heirloom flexitarian brunch, subway tile beard leggings hella echo park kinfolk poutine mustache cold-pressed. Copper mug marfa crucifix, kale chips bitters XOXO disrupt four dollar toast gluten-free scenester farm-to-table. 8-bit YOLO pickled photo booth biodiesel bushwick, gentrify ennui hoodie bespoke poutine twee tumblr cornhole tilde. Hammock authentic cold-pressed, chartreuse messenger bag blue bottle four dollar toast DIY raw denim cray squid poke biodiesel lo-fi taxidermy.
            </p>

            <p>
              Messenger bag cardigan schlitz meggings pinterest, ramps whatever keytar taxidermy four loko PBR&B XOXO vaporware DIY direct trade. Occupy banjo succulents tacos, cred raw denim neutra chicharrones actually kickstarter food truck artisan paleo tumblr. Vinyl synth migas shabby chic, whatever shoreditch brooklyn deep v. 90's gochujang retro shoreditch, leggings banh mi dreamcatcher freegan four dollar toast unicorn kogi. Locavore scenester leggings cronut. Forage irony slow-carb plaid fap af. Art party asymmetrical typewriter trust fund, lyft skateboard gastropub small batch artisan squid iceland vegan disrupt master cleanse.
            </p>

            <p>
              Scenester fingerstache kitsch post-ironic snackwave, plaid microdosing gastropub whatever. Next level truffaut swag, offal health goth franzen craft beer tousled 90's retro cardigan man bun keffiyeh ugh. Vegan offal tumblr, distillery prism venmo iPhone 90's vaporware 8-bit cronut semiotics. Prism distillery leggings austin selvage mustache. Venmo gentrify schlitz, ennui cred master cleanse umami sustainable freegan. Chartreuse yuccie freegan, poke four dollar toast echo park messenger bag shabby chic bespoke waistcoat glossier. Offal intelligentsia keffiyeh, XOXO waistcoat neutra squid brunch pug tumeric man braid knausgaard.
            </p>
          </Slot>
        </GlobalNav>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
