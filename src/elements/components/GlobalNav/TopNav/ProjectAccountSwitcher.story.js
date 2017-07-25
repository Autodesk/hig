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
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { select, boolean, text } from '@storybook/addon-knobs';

import GlobalNav from '../../../../adapters/GlobalNav/GlobalNavAdapter';

const SideNav = GlobalNav.SideNav;
const Search = GlobalNav.SideNav.Search;
const SectionList = GlobalNav.SideNav.SectionList;
const Section = GlobalNav.SideNav.SectionList.Section;
const Collapse = GlobalNav.SideNav.SectionList.Section.SectionCollapse;
const Group = GlobalNav.SideNav.SectionList.Section.Group;
const Module = GlobalNav.SideNav.SectionList.Section.Group.Module;
const ModuleCollapse = GlobalNav.SideNav.SectionList.Section.Group.Module.ModuleCollapse;
const Submodule = GlobalNav.SideNav.SectionList.Section.Group.Module.Submodule;
const TopNav = GlobalNav.TopNav;
const Profile = TopNav.Profile;
const Shortcut = TopNav.Shortcut;
const Help = TopNav.Help;
const TopNavSearch = TopNav.Search;
const ProjectAccountSwitcher = GlobalNav.TopNav.ProjectAccountSwitcher;
const Account = GlobalNav.TopNav.ProjectAccountSwitcher.Account;
const Project = GlobalNav.TopNav.ProjectAccountSwitcher.Project;
const SubNav = GlobalNav.SubNav;
const Tabs = GlobalNav.SubNav.Tabs;
const Tab = GlobalNav.SubNav.Tabs.Tab;
const Slot = GlobalNav.Slot;

import logo from '../../../../images/bim-logo.png';
import profileImage from '../../../../images/profileImage.png';
import project1 from '../../../../images/project-1.png';
import project2 from '../../../../images/project-2.png';
import project3 from '../../../../images/project-3.png';
import project4 from '../../../../images/project-4.png';

storiesOf('ProjectAccountSwitcher', module)
  .addWithInfo('with multiple projects and accounts', '', () => {
    return (
      <GlobalNav>
        <TopNav logo={logo}>
          <ProjectAccountSwitcher
            activeLabel="Hospital Builders / Oakland Medical Center"
            activeImage={project1}
            activeType={'project'}
            open={true}
            onClickOutside={action('clicked outside')}
            onClick={action('clicked')}
            showCaret={true}
          >
            <Account image={project1} label="Hospital Builders" active={true} />
            <Account image={project2} label="DPI Construction" />
            <Project
              image={project3}
              label="Oakland Medical Center"
              active={true}
            />
            <Project image={project4} label="Stanford Hospital" />
          </ProjectAccountSwitcher>
          <Profile />
        </TopNav>
        <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger" />
        <Slot>
          <p>
            Raw denim flexitarian green juice kinfolk. Umami hammock trust fund everyday carry, woke wolf viral sriracha austin.
            Fingerstache affogato messenger bag salvia, cray iPhone bushwick blue bottle marfa gentrify dreamcatcher pop-up.
            Slow-carb etsy enamel pin cronut, raclette post-ironic hashtag. Hoodie dreamcatcher enamel pin lumbersexual before
            they sold out, authentic selvage tumblr vinyl. Hot chicken chillwave coloring book fixie vice venmo echo park
            portland. Tote bag master cleanse cronut banjo banh mi pitchfork, celiac photo booth.
          </p>
        </Slot>
      </GlobalNav>
    );
  })
  .addWithInfo('with a single account and project', ``, () => {
    return (
      <GlobalNav>
        <TopNav logo={logo}>
          <ProjectAccountSwitcher
            activeLabel="Hospital Builders / Oakland Medical Center"
            activeImage={project1}
            activeType={'project'}
            open={false}
            onClickOutside={null}
            onClick={null}
            showCaret={false}
          >
            <Account image={project1} label="Hospital Builders" />
            <Project image={project3} label="Oakland Medical Center" />
          </ProjectAccountSwitcher>
          <Profile />
        </TopNav>
        <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger" />
        <Slot>
          <p>
            Raw denim flexitarian green juice kinfolk. Umami hammock trust fund everyday carry, woke wolf viral sriracha austin.
            Fingerstache affogato messenger bag salvia, cray iPhone bushwick blue bottle marfa gentrify dreamcatcher pop-up.
            Slow-carb etsy enamel pin cronut, raclette post-ironic hashtag. Hoodie dreamcatcher enamel pin lumbersexual before
            they sold out, authentic selvage tumblr vinyl. Hot chicken chillwave coloring book fixie vice venmo echo park
            portland. Tote bag master cleanse cronut banjo banh mi pitchfork, celiac photo booth.
          </p>
        </Slot>
      </GlobalNav>
    );
  });
