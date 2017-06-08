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

const SideNav = GlobalNav.SideNav;
const SectionList = GlobalNav.SideNav.SectionList;
const Section = GlobalNav.SideNav.SectionList.Item;
const Group = GlobalNav.SideNav.SectionList.Item.Group;
const Item = GlobalNav.SideNav.SectionList.Item.Group.Item;
const TopNav = GlobalNav.TopNav;
const Profile = GlobalNav.TopNav.Profile;
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
      open: false,
      profileFlyoutOpen: false,
      isOpen: false,
      activeTab: 0,
      activeProjectOrAccount: 0,
      projectOrAcccountTarget: { label: 'Oakwood Medical Center', image: '../../../tests/project-1.png', id: 0, type: 'project'},
      tabs: [{ label: 'One', id: 0 }, { label: 'Two', id: 1 }],
      projects: [
        { label: 'Oakwood Medical Center', image: '../../../tests/project-1.png', id: 0, type: 'project'},
        { label: 'Colorado Myrtle Shield Apartments', image: '../../../tests/project-2.png', id: 2 , type: 'project'},
        { label: 'Grey Pillars', image: '../../../tests/project-3.png', id: 4, type: 'project'},
        { label: 'Keystone Apartments', id: 6, type: 'project' },
        { label: 'Pleasant Park', image: '../../../tests/project-4.png', id: 8, type: 'project' }
      ],
      accounts: [
        { label: 'Oakwood Medical Center', image: '../../../tests/project-1.png', id: 1, type: 'account'},
        { label: 'Colorado Myrtle Shield Apartments', image: '../../../tests/project-2.png', id: 3, type: 'account' },
        { label: 'Grey Pillars', image: '../../../tests/project-3.png', id: 5, type: 'account' },
        { label: 'Keystone Apartments', id: 7, type: 'account' },
        { label: 'Pleasant Park', image: '../../../tests/project-4.png', id: 9, type: 'account' }
      ]

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

  openProjectAccountSwitcher = event => {
    this.setState({ isOpen: true });
  };

  closeProjectAccountSwitcher = event => {
    this.setState({ isOpen: false });
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
    this.setState({ activeProjectOrAccount: activeProjectOrAccountItem.id })
    this.setProjectOrAccountTarget(activeProjectOrAccountItem);
  }

  setProjectOrAccountTarget = targetItem => {
    if (targetItem.type === 'account') {
      this.state.accounts.forEach(function(account){
        if (account.id === targetItem.id) {
          this.setState({projectOrAcccountTarget: account})
        }
      }.bind(this))
    }

    if (targetItem.type === 'project') {
      this.state.projects.forEach(function(project){
        if (project.id === targetItem.id) {
          this.setState({projectOrAcccountTarget: project})
        }
      }.bind(this))
    }
  }

    
  render() {
    return (
      <div>
        <GlobalNav sideNavOpen={this.state.open}>
          <SideNav>
            <SectionList>
              <Section headerLabel="Project" headerName="ThunderStorm">
                <Group>
                  {this.state.group1 &&
                    <Item
                      icon="project-management"
                      title="Item 1"
                      link="#"
                      onClick={() => alert('item 1 clicked')}
                    />}
                  <Item icon="project-management" title="Item 2" link="#" />

                  {this.state.group1 &&
                    <Item icon="project-management" title="Item 3" link="#" />}
                </Group>

                <Group>
                  <Item
                    icon="project-management"
                    title={this.state.buttonLabel}
                    link="#"
                  />
                </Group>
              </Section>

              <Section headerLabel="Project" headerName="Thunderstorm">
                <Group>
                  <Item
                    icon="project-management"
                    title="Toggle Group 1"
                    onClick={this.toggleGroup1}
                  />
                  <Item icon="project-management" title="Item 2" link="#" />
                </Group>
              </Section>
            </SectionList>
          </SideNav>
          <TopNav
            logo={logo}
            logoLink="http://autodesk.com"
            onHamburgerClick={this.toggleSideNav}
          >
            <ProjectAccountSwitcher
              activeLabel={this.state.projectOrAcccountTarget.label}
              activeImage={this.state.projectOrAcccountTarget.image}
              activeType="account"
              isOpen={this.state.isOpen}
              onClickOutside={this.closeProjectAccountSwitcher}
              onClick={this.openProjectAccountSwitcher}
            >
              {this.state.projects.map((project, i) => {
                return (
                  <Project
                    image={project.image}
                    label={project.label}
                    key={project.id}
                    active={this.state.activeProjectOrAccount === project.id}
                    onClick={this.setActiveProjectOrAccount.bind(this, {id: project.id, type: project.type} )}
                  />
                );
              })}
              {this.state.accounts.map((account, i) => {
                return (
                  <Account
                    image={account.image}
                    label={account.label}
                    key={account.id}
                    active={this.state.activeProjectOrAccount === account.id}
                    onClick={this.setActiveProjectOrAccount.bind(this, {id: account.id, type: account.type})}
                  />
                );
              })}

            </ProjectAccountSwitcher>
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
