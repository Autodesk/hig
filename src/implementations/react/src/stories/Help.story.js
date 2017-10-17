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
import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
/* eslint-enable import/no-extraneous-dependencies */
import GlobalNav from "../adapters/GlobalNav/GlobalNavAdapter";
import Help from "../adapters/GlobalNav/TopNav/HelpAdapter";
import Group from "../adapters/GlobalNav/TopNav/GroupAdapter";
import Option from "../adapters/GlobalNav/TopNav/OptionAdapter";
import logo from "../playground/images/bim-logo.png";

const TopNav = GlobalNav.TopNav;
const Slot = GlobalNav.Slot;

function ParagraphSlot() {
  return (
    <Slot>
      <p>
        Next level deep v roof party, jianbing pok pok pug butcher vape
        farm-to-table kombucha. Yr snackwave VHS, wolf poutine actually woke
        poke flexitarian paleo food truck DIY kale chips viral yuccie. Cornhole
        tattooed vaporware affogato, gentrify mlkshk portland organic. Swag
        try-hard cronut hashtag, etsy bespoke chia banjo messenger bag. Mustache
        umami godard man braid cronut yuccie. YOLO vaporware franzen, gochujang
        typewriter mixtape brunch salvia paleo lyft. Four dollar toast tumblr
        mustache thundercats single-origin coffee, freegan flexitarian
        cold-pressed beard roof party VHS venmo af ugh bushwick.
      </p>
    </Slot>
  );
}

storiesOf("TopNav Help", module)
  .addWithInfo("with a single group", "", () => (
    <div>
      <GlobalNav>
        <TopNav logo={logo}>
          <Help
            title="Help"
            onClick={action("on Click")}
            onClickOutside={action("on Click Outside")}
            open
          >
            <Group>
              <Option name="option 1" onClick={action("on Click")} />
              <Option name="option 2" onClick={action("on Click")} />
            </Group>
          </Help>
        </TopNav>
      </GlobalNav>
      <ParagraphSlot />
    </div>
  ))
  .addWithInfo("with multiple groups", "", () => (
    <div>
      <GlobalNav>
        <TopNav logo={logo}>
          <Help
            title="Help"
            onClick={action("on Click")}
            onClickOutside={action("on Click Outside")}
            open
          >
            <Group>
              <Option name="group 1 option 1" onClick={action("on Click")} />
              <Option name="group 1 option 2" onClick={action("on Click")} />
            </Group>
            <Group>
              <Option name="group 2 option 1" onClick={action("on Click")} />
              <Option name="group 2 option 2" onClick={action("on Click")} />
            </Group>
          </Help>
        </TopNav>
      </GlobalNav>
      <ParagraphSlot />
      <ParagraphSlot />
    </div>
  ));
