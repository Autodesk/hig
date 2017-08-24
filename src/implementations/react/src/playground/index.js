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
import { Button, GlobalNav } from '../react-hig';

import 'hig-vanilla/dist/hig.css';
import './index.css';

import logo from './images/bim-logo.png';
// import profileImage from './images/profileImage.png';
import TopNavFixtures from './fixtures/topNavFixtures';
import sideNavFixtures from './fixtures/sideNavFixtures';

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

const topNavFixtures = new TopNavFixtures();

class Playground extends React.Component {
  render() {
    const topNavProps = {
      logo,
      onLogoClick: function() { console.log('Logo clicked'); }
    }
    const sideNavProps = {
      superHeaderLabel: "Global Construction",
      headerLabel: "Oakwood Medical Center",
      links: sideNavFixtures.links,
      onLogoClick: event => {
        event.preventDefault();
        console.log('Logo clicked');
      }
    };

    return (
      <div>
        <GlobalNav
          sideNav={sideNavProps}
          topNav={topNavProps}
          modules={sideNavFixtures.modules}
          submodules={sideNavFixtures.submodules}
          onModuleChange={id => console.log(`Module selected: ${id}`)}
        >
          <section>
            <h3>Tabs</h3>
            <Button title="Add tab before" onClick={this.addTabBefore} />
            <Button title="Add tab after" onClick={this.addTabAfter} />
            <Button title="Remove tab" onClick={this.removeTab} />
          </section>
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
        </GlobalNav>
      </div>
    );
  }
}

export default Playground;
