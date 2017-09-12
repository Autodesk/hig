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
import { Button, GlobalNav } from '../hig-react';

import 'hig-vanilla/lib/hig.css';
import './index.css';

import logo from './images/bim-logo.png';
// import profileImage from './images/profileImage.png';
import { projects, accounts } from './fixtures/topNavFixtures';
import { modules, submodules, links } from './fixtures/sideNavFixtures';

import ButtonSection from './sections/ButtonSection';
import DropdownSection from './sections/DropdownSection';
import IconButtonSection from './sections/IconButtonSection';
import CheckboxSection from './sections/CheckboxSection';
import RadioButtonSection from './sections/RadioButtonSection';
import RangeSection from './sections/RangeSection';
import TextFieldSection from './sections/TextFieldSection';
import TextAreaSection from './sections/TextAreaSection';
import PasswordFieldSection from './sections/PasswordFieldSection';
import SpacerSection from './sections/SpacerSection';
import ModalSection from './sections/ModalSection';
import TypographySection from './sections/TypographySection';
import TableSection from "./sections/TableSection";
import TextLinkSection from "./sections/TextLinkSection";
import FlyoutSection from "./sections/FlyoutSection"
import RichTextSection from "./sections/RichTextSection";
import AvatarSection from "./sections/AvatarSection";

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModuleId: '1-2-5'
    };
  }

  navigate = (id) => {
    console.log('Go to', id);
    this.setState({ activeModuleId: id });
  }

  projectClicked = (id) => {
    console.log("project clicked", id);
  }

  accountClicked = (id) => {
    console.log("account clicked", id);
  }

  render() {
    const topNavProps = {
      accounts: accounts,
      projects: projects,
      accountTitle: "Accounts",
      projectTitle: "Projects",
      onProjectClick: this.projectClicked,
      onAccountClick: this.accountClicked,
      logo,
      onLogoClick: function() { console.log('Logo clicked'); }
    }

    const sideNavProps = {
      superHeaderLabel: "HIG",
      headerLabel: "Playground",
      links: links,
      onLogoClick: event => {
        event.preventDefault();
        console.log('Logo clicked');
      },
      searchable: true,
      slot: (
        <div>
          <Button title="Designer Toolkit" link="https://github.com/Autodesk/hig" />
          <p></p>
          <Button title="Git Repository" type="secondary" link="https://github.com/Autodesk/hig" target="_blank" />
        </div>
      )
    };

    return (
      <GlobalNav
        modules={modules}
        onModuleChange={this.navigate}
        sideNav={sideNavProps}
        submodules={submodules}
        topNav={topNavProps}
        activeModuleId={this.state.activeModuleId}
        showSubNav={true}
      >
        <ButtonSection />
        <IconButtonSection />
        <CheckboxSection />
        <PasswordFieldSection />
        <RadioButtonSection />
        <RangeSection />
        <SpacerSection />
        <TextFieldSection />
        <TextAreaSection />
        <ModalSection />
        <DropdownSection />
        <TypographySection />
        <TableSection/>
        <TextLinkSection/>
        <FlyoutSection />
        <RichTextSection />
        <AvatarSection />
        </GlobalNav>
    );
  }
}

export default Playground;
