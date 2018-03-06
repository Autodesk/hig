import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import "hig-vanilla/lib/hig.css";

const req = require.context("../stories", true);
function loadStories() {
  req.keys().forEach(req);
}

addDecorator((story, context) => withInfo({ header: true })(story)(context));

configure(loadStories, module);
