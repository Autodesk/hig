import React from 'react';
import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { setDefaults } from '@storybook/addon-info';
import { setOptions } from "@storybook/addon-options";
import "hig-react/lib/hig-react.css";

import infoStyles from './infoStyles';

setOptions({
  name: "Autodesk HIG",
  url: "https://hig.autodesk.com",
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

addDecorator(withKnobs);

setDefaults({
  inline: true,
  header: false,
  source: false,
  styles: infoStyles
});
