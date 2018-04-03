import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import TestDecorator from "./TestDecorator";

addDecorator((story, context) => withInfo({ header: true })(story)(context));
addDecorator(withKnobs);
addDecorator(TestDecorator);

const req = require.context("../packages", true, /stories.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
