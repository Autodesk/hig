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
import { text, boolean } from '@storybook/addon-knobs';
import GlobalNav from '../GlobalNav';

import logo from '../../../../images/bim-logo.png';
import profileImage from '../../../../images/profileImage.png';

const TopNav = GlobalNav.TopNav;
const Profile = TopNav.Profile;
const Slot = GlobalNav.Slot;

function ParagraphSlot() {
  return (
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
  );
}

storiesOf('TopNav Profile', module)
  .addWithInfo(
    'default',
    <div>
      Basic usage of <pre>GlobalNav.TopNav.Profile</pre>

    </div>,
    () => (
      <GlobalNav>
        <TopNav logo={logo}>
          <Profile
            image={profileImage}
            name="Jane Designer"
            email="jane.designer@example.com"
            onProfileSettingsClick={action('profile settings clicked')}
            onSignOutClick={action('sign out clicked')}
          />
        </TopNav>
        <ParagraphSlot />
      </GlobalNav>
    )
  )
  .addWithInfo(
    'different initialSettings (no knobs)',
    <div>
      TopNav Search has different initial settings (knobs trigger a commitUpdate)
    </div>,
    () => (
      <GlobalNav>
        <TopNav logo={logo}>
          <Profile
            image={profileImage}
            email="jane.designer@example.com"
            name="Jane Designer"
            open={true}
            signOutLabel="Sign off"
            signOutLink="http://www.autodesk.com"
            onProfileSettingsClick={function() {
              alert('profile settings clicked');
            }}
          />
        </TopNav>
        <ParagraphSlot />
      </GlobalNav>
    )
  )
  .addWithInfo('user configured', `Set open state, events, `, () => {
    return (
      <GlobalNav>
        <TopNav logo={logo}>
          <Profile
            image={text('image', profileImage)}
            name={text('name', 'Jane Designer')}
            email={text('email', 'jane.designer@example.com')}
            open={boolean('profileFlyoutOpen', false)}
            onProfileClickOutside={action('Clicked outside profile')}
            onProfileImageClick={action('profile image clicked')}
            onProfileSettingsClick={action('profile settings clicked')}
            profileSettingsLabel={text('profileSettingsLabel', 'My Account')}
            profileSettingsLink={text('profileSettingsLink', '#')}
            onSignOutClick={action('sign out clicked')}
            signOutLabel={text('signOutLabel', 'Logout')}
            signOutLink={text('signOutLink', '/signout')}
          />
        </TopNav>
        <ParagraphSlot />
      </GlobalNav>
    );
  });
