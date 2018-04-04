import { configure, addDecorator } from "@storybook/react";
import TestDecorator from "./TestDecorator";
import "hig-vanilla/lib/hig.css";

const req = require.context("../stories", true);
function loadStories() {
  req.keys().forEach(req);
}

addDecorator(TestDecorator);

configure(loadStories, module);
