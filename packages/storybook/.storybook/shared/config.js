import { addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs/react";
import { setDefaults } from '@storybook/addon-info';

addDecorator(withKnobs);

setDefaults({
  header: true,
});
