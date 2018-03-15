import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs/react";
import TestDecorator from "./TestDecorator";
import "hig-vanilla/lib/hig.css";

const req = require.context("../stories", true);
function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story, context) => withInfo({ header: true })(story)(context));
addDecorator(withKnobs);
addDecorator(TestDecorator);

configure(loadStories, module);
