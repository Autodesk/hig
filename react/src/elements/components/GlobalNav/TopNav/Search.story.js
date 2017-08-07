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
import { text } from '@storybook/addon-knobs';
import GlobalNav from '../../../../adapters/GlobalNav/GlobalNavAdapter';
import logo from '../../../../images/bim-logo.png';

const TopNav = GlobalNav.TopNav;
const TopNavSearch = TopNav.Search;
const Slot = GlobalNav.Slot;

storiesOf('TopNav Search', module)
  .addWithInfo(
    'default',
    <div>
      Basic usage of <pre>GlobalNav.TopNav.Search</pre>

    </div>,
    () => (
      <GlobalNav>
        <TopNav logo={logo}>
          <TopNavSearch />
        </TopNav>
      </GlobalNav>
    )
  )
  .addWithInfo(
    'with placeholder and events configured',
    `Set your own placeholder text, and add additional listeners/event handlers`,
    () => {
      return (
        <GlobalNav>
          <TopNav logo={logo}>
            <TopNavSearch
              placeholder={text('Placeholder', 'in search of...')}
              query={text('Query', '')}
              onInput={action('Typing detected')}
              onFocusIn={action('Focus in')}
              onFocusOut={action('Focus out')}
              onClearIconClick={action('Clicked Clear Icon')}
            />
          </TopNav>
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
    }
  );
