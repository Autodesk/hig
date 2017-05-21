import { configure, addDecorator, setAddon } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import infoAddon from '@storybook/addon-info';

import WithExample from './addons/example-addon';

function loadStories() {
  require('../src/stories');
}

setAddon(infoAddon);

// addDecorator(WithExample);
addDecorator(withKnobs);

configure(loadStories, module);
