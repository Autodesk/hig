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

import GlobalNav from '../../../../adapters/GlobalNavAdapter';
const TopNav = GlobalNav.TopNav;
const Profile = TopNav.Profile;
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

const tabOptions = {
  one: 'One',
  two: 'Two'
};
const tabDefaultValue = 'one';

storiesOf('Tabs', module)
  .addWithInfo('default', '', () => {
    return (
      <GlobalNav>
        <TopNav logo={logo}>
          <Profile />
        </TopNav>
        <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger">
          <Tabs>
            <Tab label="One" />
            <Tab label="Two" />
          </Tabs>
        </SubNav>
        <Slot>
          <p>
            Next level deep v roof party, jianbing pok pok pug butcher vape farm-to-table kombucha. Yr snackwave VHS, wolf
            poutine actually woke poke flexitarian paleo food truck DIY kale chips viral yuccie. Cornhole tattooed vaporware
            affogato, gentrify mlkshk portland organic. Swag try-hard cronut hashtag, etsy bespoke chia banjo messenger bag.
            Mustache umami godard man braid cronut yuccie. YOLO vaporware franzen, gochujang typewriter mixtape brunch salvia
            paleo lyft. Four dollar toast tumblr mustache thundercats single-origin coffee, freegan flexitarian cold-pressed
            beard roof party VHS venmo af ugh bushwick.
          </p>
        </Slot>
      </GlobalNav>
    );
  })
  .addWithInfo('client-controlled', '', () => {
    const activeTab = select('Active tab', tabOptions, tabDefaultValue);
    return (
      <GlobalNav>
        <TopNav logo={logo}>
          <Profile />
        </TopNav>
        <SubNav moduleIndicatorName="Insight" moduleIndicatorIcon="hamburger">
          <Tabs>
            <Tab
              label="One"
              active={activeTab === 'one'}
              onClick={action('Tab 1 clicked')}
            />
            <Tab
              label="Two"
              active={activeTab === 'two'}
              onClick={action('Tab 2 clicked')}
            />
          </Tabs>
        </SubNav>
        <Slot>
          {activeTab === 'one'
            ? <div>
                <h1>Tab 1</h1>
                <p>
                  Raw denim flexitarian green juice kinfolk. Umami hammock trust fund everyday carry, woke wolf viral sriracha austin.
                  Fingerstache affogato messenger bag salvia, cray iPhone bushwick blue bottle marfa gentrify dreamcatcher pop-up.
                  Slow-carb etsy enamel pin cronut, raclette post-ironic hashtag. Hoodie dreamcatcher enamel pin lumbersexual before
                  they sold out, authentic selvage tumblr vinyl. Hot chicken chillwave coloring book fixie vice venmo echo park
                  portland. Tote bag master cleanse cronut banjo banh mi pitchfork, celiac photo booth.
                </p>
              </div>
            : <div>
                <h1>Tab 2</h1>
                <p>
                  Next level deep v roof party, jianbing pok pok pug butcher vape farm-to-table kombucha. Yr snackwave VHS, wolf
                  poutine actually woke poke flexitarian paleo food truck DIY kale chips viral yuccie. Cornhole tattooed vaporware
                  affogato, gentrify mlkshk portland organic. Swag try-hard cronut hashtag, etsy bespoke chia banjo messenger bag.
                  Mustache umami godard man braid cronut yuccie. YOLO vaporware franzen, gochujang typewriter mixtape brunch salvia
                  paleo lyft. Four dollar toast tumblr mustache thundercats single-origin coffee, freegan flexitarian cold-pressed
                  beard roof party VHS venmo af ugh bushwick.
                </p>
              </div>}

        </Slot>
      </GlobalNav>
    );
  });
